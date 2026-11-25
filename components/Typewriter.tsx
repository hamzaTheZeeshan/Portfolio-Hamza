"use client";
import { useEffect, useState } from "react";

type Props = {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
  loop?: boolean;
};

export default function Typewriter({
  words,
  typeSpeed = 70,
  deleteSpeed = 40,
  pause = 1200,
  loop = false,
}: Props) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const word = words[index];
    const isLast = index === words.length - 1;

    // Finished typing the last word: stop (or loop)
    if (!deleting && text === word && isLast && !loop) return;

    let delay = deleting ? deleteSpeed : typeSpeed;
    if (!deleting && text === word) delay = pause;

    const t = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(
          deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(t);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause, loop, reduced]);

  // Reduced motion: just show the final word, no animation
  if (reduced) return <span>{words[words.length - 1]}</span>;

  return (
    <span aria-label={words[words.length - 1]}>
      <span aria-hidden="true">{text}</span>
      <span aria-hidden="true" className="ml-0.5 inline-block w-[1ch] animate-pulse">
        ▍
      </span>
    </span>
  );
}