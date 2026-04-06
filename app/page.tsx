"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";



const snippets = [
  "def run(): return True",
  "sudo systemctl restart nginx",
  "SELECT * FROM users;",
  "python manage.py migrate",
  "docker-compose up",
  "git push origin main",
  "uvicorn main:app",
  "pip install fastapi",
];

const logs = [
  "[ OK ] https://iamasilbekismoilov.uz is opened !",
  "[ OK ] terminal is running ... ",
  "[INFO] loading details...",
  "[INFO] site is ready to work !",
];

type CodeItem = {
  text: string;
  top: string;
  left: string;
  duration: string;
  size: string;
};

export default function HomePage() {
  const [step, setStep] = useState<"idle" | "loading">("idle");
  const router = useRouter();
const handleEnter = () => {
  if (step !== "idle") return;

  setStep("loading");

  setTimeout(() => {
    router.replace("/home");
  }, 600);
};
useEffect(() => {
  const handleKey = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      handleEnter();
    }
  };

  window.addEventListener("keydown", handleKey);

  return () => {
    window.removeEventListener("keydown", handleKey);
  };
}, [step]);

return (
  <div className="page-center">

    <div className="terminal">
      <div className="terminal-header">
        <span className="dot red"></span>
        <span className="dot yellow"></span>
        <span className="dot green"></span>
      </div>

      <div className="terminal-body">

        <div className="logs">
          {logs.map((log, i) => (
            <p key={i}>{log}</p>
          ))}
        </div>

        {step === "idle" && (
          <>
            <p className="command">
              <span className="prompt">user@server:~$</span>
              cd /home/projects/my_blog
              <span className="cursor"></span>
            </p>
            <p className="hint clickable" onClick={handleEnter}>
  Press Enter ↵
</p>
          </>
        )}

        {step === "loading" && (
          <p className="loading">
            Opening project<span className="dots"></span>
          </p>
        )}

      </div>
    </div>

  </div>
);
}