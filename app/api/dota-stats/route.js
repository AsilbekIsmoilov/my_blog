import { NextResponse } from "next/server";
import * as cheerio from "cheerio";

export async function GET() {
  const profileUrl = "https://iccup.com/dota/gamingprofile/ASYLSMELY";

  try {
    const response = await fetch(profileUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `Failed to fetch profile: ${response.status}` },
        { status: 502 }
      );
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    const games = [];

    $("#result-table tr").each((_, row) => {
      const cols = $(row).find("td");
      if (cols.length < 5) return;

      const heroImgRaw = $(cols[0]).find("img").attr("src") || "";
      const heroName = $(cols[0]).find("span").first().text().trim();

      const mode = $(cols[1]).text().replace(/\s+/g, " ").trim().toUpperCase();
      const duration = $(cols[2]).text().trim();

      const kdaSpans = $(cols[3]).find("span");
      const kills = $(kdaSpans[0]).text().trim() || "0";
      const deaths = $(kdaSpans[1]).text().trim() || "0";
      const assists = $(kdaSpans[2]).text().trim() || "0";

      const score = $(cols[4]).text().replace(/\s+/g, " ").trim();
      const isWin = $(cols[4]).find(".l-win").length > 0;
      const isLose = $(cols[4]).find(".l-lose").length > 0;

      const detailPath = $(row).attr("data-link") || "";
      const detailUrl = detailPath
        ? new URL(detailPath, "https://iccup.com/dota/").href
        : null;

      const heroImage = heroImgRaw
        ? new URL(heroImgRaw, "https://iccup.com").href
        : null;

      games.push({
        hero: heroName,
        heroImage,
        mode,
        duration,
        kills,
        deaths,
        assists,
        score,
        result: isWin ? "win" : isLose ? "lose" : "unknown",
        detailUrl,
      });
    });

    return NextResponse.json(
      {
        profile: "ASYLSMELY",
        games,
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "Could not load dota stats",
        details: String(error),
      },
      { status: 500 }
    );
  }
}