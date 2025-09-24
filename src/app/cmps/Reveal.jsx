"use client";
import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  once = false,              // set to true if you only want it once
  amount = 0.2,              // how much must be visible (0..1)
  delay = 0,                 // ms delay per item
  duration = 700,            // ms animation duration
  distance = 24,             // px drop distance (positive = slide up)
  className = "",
}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) io.unobserve(el);
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold: amount }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once, amount]);

  const hidden = `opacity-0 translate-y-[${distance}px]`;
  const shown  = `opacity-100 translate-y-0`;

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
      className={[
        "will-change-transform transition-all ease-out",
        inView ? shown : hidden,
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
