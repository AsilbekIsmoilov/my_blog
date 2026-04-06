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

  <div className="service-card" onClick={() => router.push("/about")}>
    <span className="service-name">core.service</span>
    <span className="service-desc">who i am</span>
    <span className="service-status online"></span>
  </div>

  <div className="service-card" onClick={() => router.push("/music")}>
    <span className="service-name">media.stream</span>
    <span className="service-desc">what i listen</span>
    <span className="service-status idle"></span>
  </div>

  <div className="service-card" onClick={() => router.push("/projects")}>
    <span className="service-name">build.pipeline</span>
    <span className="service-desc">my work</span>
    <span className="service-status online"></span>
  </div>

  <div className="service-card" onClick={() => router.push("/videos")}>
    <span className="service-name">content.node</span>
    <span className="service-desc">videos</span>
    <span className="service-status processing"></span>
  </div>

  <div
    className="service-card"
    onClick={() => window.open("https://t.me/imbackendeveloper", "_blank")}
  >
    <span className="service-name">external.api</span>
    <span className="service-desc">@imbackendeveloper</span>
    <span className="service-status external"></span>
  </div>


            </div>

          </div>

        </div>
      </div>
    </div>
  );
}