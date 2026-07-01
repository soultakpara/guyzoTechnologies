"use client";

import { useEffect, useState } from "react";

interface TypingTitleProps {
  text: string;
  className?: string;
  speed?: number;
}

export default function TypingTitle({
  text,
  className = "",
  speed = 70,
}: TypingTitleProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;

      if (index === text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <h1
      className={`text-4xl md:text-5xl font-extrabold text-blue-700 ${className}`}
    >
      {displayedText}
      <span className="animate-pulse text-black">|</span>
    </h1>
  );
}