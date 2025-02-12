"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface LoaderProps {
  onComplete: () => void;
  text?: string;
  duration?: number;
  bgColor?: string;
  textColor?: string;
  effect?: "fade" | "scale" | "slide" | "rotate" | "letter-assemble" | "bubble" | "wave";
}

export default function Loader({
  onComplete,
  text = "HP",
  duration = 2000,
  bgColor = "bg-gray-900",
  textColor = "text-white",
  effect = "letter-assemble",
}: LoaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [randomPositions, setRandomPositions] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    setRandomPositions(
      text.split("").map(() => ({
        x: Math.random() * 200 - 100,
        y: Math.random() * 200 - 100,
      }))
    );

    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, duration);

    return () => clearTimeout(timer);
  }, [onComplete, duration, text]);

  const effects = {
    fade: { initial: { opacity: 0 }, animate: { opacity: 1 } },
    scale: { initial: { scale: 0.5 }, animate: { scale: 1 } },
    slide: { initial: { y: -50 }, animate: { y: 0 } },
    rotate: { initial: { rotate: -10 }, animate: { rotate: [0, 10, -10, 0] as number[] } }, 
  } as const;

  const letterAnimations = {
    "letter-assemble": (index: number) => ({
      initial: { opacity: 0, x: randomPositions[index]?.x || 0, y: randomPositions[index]?.y || 0 },
      animate: { opacity: 1, x: 0, y: 0 },
      transition: { delay: index * 0.1, duration: 0.6, ease: "easeOut" },
    }),
    bubble: (index: number) => ({
      initial: { opacity: 0, scale: 0 },
      animate: { opacity: 1, scale: 1 },
      transition: { delay: index * 0.1, duration: 0.5, ease: "easeOut" },
    }),
    wave: (index: number) => ({
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: index * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  } as const;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div className={`fixed inset-0 flex items-center justify-center ${bgColor} ${textColor}`} initial={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.5 } }}>
          {effect in letterAnimations ? (
            <motion.div className="flex space-x-2 text-6xl font-bold">
              {text.split("").map((char, index) => (
                <motion.span key={index} {...letterAnimations[effect as keyof typeof letterAnimations]?.(index)}>
                  {char}
                </motion.span>
              ))}
            </motion.div>
          ) : (
            <motion.h1 className="text-6xl font-bold" {...(effects[effect as keyof typeof effects] || {})} transition={{ duration: 1.2, ease: "easeInOut" }}>
              {text}
            </motion.h1>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}