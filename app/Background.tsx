"use client";

import { useEffect, useState } from "react";

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

type CodeItem = {
  text: string;
  top: string;
  left: string;
  duration: string;
  size: string;
};

export default function Background() {
  const [codes, setCodes] = useState<CodeItem[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 25 }).map((_, i) => ({
      text: snippets[Math.floor(Math.random() * snippets.length)],
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: `${20 + Math.random() * 15}s`,
      size: i % 3 === 0 ? "small" : i % 3 === 1 ? "medium" : "large",
    }));

    setCodes(generated);
  }, []);

  return (
    <div className="background-wrapper">
      {codes.map((item, i) => (
        <div
          key={i}
          className={`code ${item.size}`}
          style={{
            top: item.top,
            left: item.left,
            animationDuration: item.duration,
          }}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
}