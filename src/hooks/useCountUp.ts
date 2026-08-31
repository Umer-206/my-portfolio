import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

interface UseCountUpOptions {
  duration?: number;
  amount?: number;
}

export const useCountUp = <T extends HTMLElement>(
  target: number,
  { duration = 1.2, amount = 0.6 }: UseCountUpOptions = {},
) => {
  const ref = useRef<T>(null);
  const isInView = useInView(ref, { once: true, amount });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, target, duration]);

  return { ref, value };
};
