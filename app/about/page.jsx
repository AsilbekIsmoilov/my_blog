"use client";

import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();

  return (
    <div className="home-wrapper">
      <div className="macbook">

        <div className="mac-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>

        <div className="mac-body">

  <div className="left desktop-player">
    <div className="spotify-embed">
      <iframe
        src="https://open.spotify.com/embed/playlist/4LwdFSj7TnQsPCJNc9a6D3"
        width="100%"
        height="352"
        style={{ borderRadius: "12px" }}
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  </div>
          <div className="right">

            <h2>about me</h2>

            <p>my name is asilbek. im from uzbekistan, where i was born and raised. i enjoy music a lot,</p>
<p>
  it’s something i can’t imagine my day without. i also love playing football
  and computer games (
  <a
    href="https://iccup.com/dota/gamingprofile/ASYLSMELY"
    target="_blank"
  >
    warcraft 3
  </a>
  , dota 2).
</p>

            <h3>where did it start ?</h3>

            <p>my passion for programming began in 2024.</p>
            <p>i was sitting in my chair, not knowing which programming language to choose.</p>
            <p>then i discovered python.</p>
            <p>it all started with a simple “hello, world” and grew into learning variables, data types, virtual</p>
            <p>environments, pip, algorithms, loops (for, while), conditionals (if/else), classes, and oop.</p>
            <p>step by step, python taught me how programming works and opened the door to everything i know now.</p>



            <div className="categories">

              <div
                className="explore-card"
                onClick={() => router.push("/home")}
              >
                <span className="emoji">🏠</span>
                <span className="title">go home</span>
                <span className="desc">back to main page</span>
              </div>

              <div
                className="explore-card"
                onClick={() => router.push("/projects")}
              >
                <span className="emoji">🚀</span>
                <span className="title">projects</span>
                <span className="desc">what i built</span>
              </div>

            </div>

          </div>

                <div className="mobile-player">
      <div className="spotify-embed">
        <iframe
          src="https://open.spotify.com/embed/playlist/4LwdFSj7TnQsPCJNc9a6D3"
          width="100%"
          height="352"
          style={{ borderRadius: "12px" }}
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </div>

        </div>
      </div>
    </div>
  );
}