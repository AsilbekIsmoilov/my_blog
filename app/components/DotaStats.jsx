"use client";

import { useEffect, useState } from "react";

export default function DotaStats() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    const loadStats = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await fetch("/api/dota-stats", {
          cache: "no-store",
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data?.error || "Failed to fetch dota stats");
        }

        if (!ignore) {
          setGames(data.games || []);
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message || "Could not load dota stats");
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    };

    loadStats();

    return () => {
      ignore = true;
    };
  }, []);

  if (loading) {
    return (
      <div className="dota-box">
        <div className="dota-title">latest dota games</div>
        <div className="dota-state">loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dota-box">
        <div className="dota-title">latest dota games</div>
        <div className="dota-state error">{error}</div>
      </div>
    );
  }

  return (
    <div className="dota-box">
      <div className="dota-title">latest dota games</div>

      <div className="dota-head">
        <span>hero</span>
        <span>mode</span>
        <span>time</span>
        <span>K / D / A</span>
        <span>score</span>
      </div>

      <div className="dota-list">
        {games.map((game, index) => (
          <a
            key={`${game.hero}-${index}`}
            href={game.detailUrl || "#"}
            target="_blank"
            rel="noreferrer"
            className="dota-row"
          >
            <div className="dota-hero">
              {game.heroImage ? (
                <img src={game.heroImage} alt={game.hero} />
              ) : (
                <div className="dota-hero-placeholder" />
              )}
              <span>{game.hero}</span>
            </div>

            <div className="dota-mode">{game.mode}</div>
            <div className="dota-time">{game.duration}</div>

            <div className="dota-kda">
              <span className="k">{game.kills}</span>
              <span>/</span>
              <span className="d">{game.deaths}</span>
              <span>/</span>
              <span className="a">{game.assists}</span>
            </div>

            <div className={`dota-score ${game.result}`}>
              {game.result === "win" && <span className="result-dot win-dot" />}
              {game.result === "lose" && <span className="result-dot lose-dot" />}
              <span>{game.score}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}