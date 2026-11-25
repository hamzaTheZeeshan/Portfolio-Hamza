"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function DrawnName({
  text,
  className = "",
  duration = 2.2,
}: {
  text: string;
  className?: string; // pass signatureFont.className here
  duration?: number;
}) {
  const ref = useRef<SVGTextElement>(null);
  const [width, setWidth] = useState<number | null>(null);

  // measure after the font has loaded so the viewBox fits the glyphs
  useEffect(() => {
    document.fonts.ready.then(() => {
      const b = ref.current?.getBBox();
      if (b) setWidth(Math.ceil(b.x + b.width) + 6);
    });
  }, [text]);

  return (
    <svg
      viewBox={`0 0 ${width ?? 200} 48`}
      className="h-8 w-auto overflow-visible"
      style={{ width: width ? undefined : 0 }}
      role="img"
      aria-label={text}
    >
      <motion.text
        ref={ref}
        x={3}
        y={34}
        fontSize={36}
        className={className}
        stroke="currentColor"
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ strokeDasharray: 400, strokeDashoffset: 400, fillOpacity: 0 }}
        animate={
          width
            ? { strokeDashoffset: 0, fillOpacity: 1 }
            : undefined
        }
        transition={{
          strokeDashoffset: { duration, ease: "easeInOut" },
          fillOpacity: { duration: 0.6, delay: duration * 0.8 },
        }}
        fill="currentColor"
      >
        {text}
      </motion.text>
    </svg>
  );
}