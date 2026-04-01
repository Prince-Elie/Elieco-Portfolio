import { useEffect, useState } from "react";

const SECRETS = [];

export const CursorReveal = () => {
  const [mouse, setMouse] = useState({ x: -999, y: -999 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };
    const leave = () => setIsVisible(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[9997]"
      style={{
        clipPath: `circle(80px at ${mouse.x}px ${mouse.y}px)`,
        background: "rgba(10, 0, 20, 0.92)",
      }}
    >
      {SECRETS.map((s, i) => (
        <span
          key={i}
          className="absolute font-mono font-semibold select-none whitespace-nowrap text-primary/90"
          style={{
            top: s.top,
            left: s.left,
            fontSize: "clamp(0.65rem, 1.2vw, 0.9rem)",
            textShadow: "0 0 8px hsl(var(--primary) / 0.6)",
          }}
        >
          {s.text}
        </span>
      ))}
    </div>
  );
};
