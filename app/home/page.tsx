"use client";
import { useRouter } from "next/navigation";

export default function Home() {
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

          <div className="left">
            <video
              src="/mr-bean-wave.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="profile-video"
            />
          </div>

          <div className="right">
            <h2>hello $guest. welcome to my website</h2>
            <strong>currently i am not listening to anything.</strong>
            <h4>check out some sections out there:</h4>

<div className="categories">

  <div className="explore-card" onClick={() => router.push("/about")}>
    <span className="emoji">👀</span>
    <span className="title">about me</span>
    <span className="desc">who am i really?</span>
  </div>

  <div className="explore-card" onClick={() => router.push("/music")}>
    <span className="emoji">🎧</span>
    <span className="title">my vibe</span>
    <span className="desc">what i listen to</span>
  </div>

  <div className="explore-card" onClick={() => router.push("/projects")}>
    <span className="emoji">🚀</span>
    <span className="title">what i built</span>
    <span className="desc">projects & experiments</span>
  </div>

  <div className="explore-card" onClick={() => router.push("/videos")}>
    <span className="emoji">🎬</span>
    <span className="title">watch stuff</span>
    <span className="desc">videos & content</span>
  </div>

  <div
    className="explore-card"
    onClick={() => window.open("https://t.me/imbackendeveloper", "_blank")}
  >
    <span className="emoji">💬</span>
    <span className="title">let’s talk</span>
    <span className="desc">@imbackendeveloper</span>
  </div>



            </div>

          </div>

        </div>
      </div>
    </div>
  );
}