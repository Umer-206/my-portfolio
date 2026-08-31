import { useRef, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

/**
 * Wraps the accent word of a page heading with a hand-drawn underline that
 * "draws" itself each time it scrolls into view — pulls the visitor's eye to the title.
 */
export const DrawUnderline = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { amount: 0.6 });
  const drawn = reduce ? true : inView;

  return (
    <span ref={ref} className={`relative inline-block ${className}`}>
      {children}
      <svg
        className="pointer-events-none absolute left-0 top-full h-[0.3em] w-full overflow-visible text-tertiary"
        viewBox="0 0 300 12"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path
          d="M4 7C54 3 110 2 152 4.5C194 7 252 8.5 296 3.5"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          initial={false}
          animate={{ pathLength: drawn ? 1 : 0, opacity: drawn ? 1 : 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        />
      </svg>
    </span>
  );
};
