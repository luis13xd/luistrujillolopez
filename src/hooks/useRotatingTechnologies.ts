import { useRef, useState } from "react";
import { useAnimationFrame } from "framer-motion";
import type { Technology } from "../components/TechnologiesSection";

export const useRotatingTechnologies = (items: Technology[], speed = 0.006) => {
  const radius = Math.min(window.innerWidth * 0.26, 500);
  const angles = useRef(items.map((_, i) => (i / items.length) * 2 * Math.PI));
  const [, setTick] = useState(0);

  useAnimationFrame(() => {
    angles.current = angles.current.map(
      (angle) => (angle + speed) % (2 * Math.PI)
    );
    setTick((t) => (t + 1) % 100000);
  });

  const getItemStyle = (index: number) => {
    const angle = angles.current[index];
    const x = radius * Math.cos(angle) * 1.2;
    const y = radius * Math.sin(angle) * 0.25;
    const scale = 0.5 + (0.5 * (Math.sin(angle) + 1)) / 2;
    const opacity = 0.3 + (0.7 * (Math.sin(angle) + 1)) / 2;
    const zIndex = Math.round(scale * 10);

    return { x, y, scale, opacity, zIndex };
  };

  return { radius, getItemStyle };
};
