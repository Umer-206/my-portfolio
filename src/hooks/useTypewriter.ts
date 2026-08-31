import { useEffect, useState } from "react";

interface UseTypewriterOptions {
  words: string[];
  typingSpeedMs?: number;
  deletingSpeedMs?: number;
  pauseMs?: number;
}

export const useTypewriter = ({
  words,
  typingSpeedMs = 70,
  deletingSpeedMs = 40,
  pauseMs = 1600,
}: UseTypewriterOptions) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    if (words.length === 0) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setText(words[0]);
      return;
    }

    const currentWord = words[wordIndex % words.length];

    if (phase === "typing") {
      if (text.length < currentWord.length) {
        const timeout = setTimeout(
          () => setText(currentWord.slice(0, text.length + 1)),
          typingSpeedMs,
        );
        return () => clearTimeout(timeout);
      }
      const timeout = setTimeout(() => setPhase("pausing"), pauseMs);
      return () => clearTimeout(timeout);
    }

    if (phase === "pausing") {
      const timeout = setTimeout(() => setPhase("deleting"), 0);
      return () => clearTimeout(timeout);
    }

    // deleting
    if (text.length > 0) {
      const timeout = setTimeout(
        () => setText(currentWord.slice(0, text.length - 1)),
        deletingSpeedMs,
      );
      return () => clearTimeout(timeout);
    }
    setWordIndex((i) => (i + 1) % words.length);
    setPhase("typing");
  }, [text, phase, wordIndex, words, typingSpeedMs, deletingSpeedMs, pauseMs]);

  return text;
};
