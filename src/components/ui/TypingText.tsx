"use client";
import { useEffect, useState } from "react";

const words = [
  "Full-Stack Web Development",
  "Modern & Responsive UI Design",
  "High-Performance Applications",
  "Scalable Cloud Deployments",
  "Clean & Maintainable Code",
  "Collaborative Agile Workflows"
];

export default function TypingText() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[index];

    if (charIndex < currentWord.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentWord[charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setText("");
        setCharIndex(0);
        setIndex((prev) => (prev + 1) % words.length);
      }, 1500);
    }
  }, [charIndex, index]);

  return (
    <span className="font-emoji text-[clamp(18px,3vw,22px)] border-r-2 border-accent-300 pr-2 animate-pulse">
      {text}
    </span>
  );
}
