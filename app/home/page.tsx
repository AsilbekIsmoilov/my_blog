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

              <div className="card" onClick={() => router.push("/about")}>
                <span className="card-title">about me</span>
                <span className="card-desc">who i am</span>
              </div>

              <div className="card" onClick={() => router.push("/music")}>
                <span className="card-title">music</span>
                <span className="card-desc">what i listen</span>
              </div>

              <div className="card" onClick={() => router.push("/projects")}>
                <span className="card-title">projects</span>
                <span className="card-desc">my work</span>
              </div>

              <div className="card" onClick={() => router.push("/videos")}>
                <span className="card-title">videos</span>
                <span className="card-desc">content</span>
              </div>

<div
  className="card"
  onClick={() => window.open("https://t.me/imbackendeveloper", "_blank")}>
  <span className="card-title">telegram</span>
  <span className="card-desc">@imbackendeveloper</span>
</div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}