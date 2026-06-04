import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const out = () => setHidden(true);
    const over = () => setHidden(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseout", out);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseout", out);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] hidden md:block"
      style={{ opacity: hidden ? 0 : 1, transition: "opacity 300ms" }}
    >
      <div
        className="absolute h-[500px] w-[500px] rounded-full"
        style={{
          left: pos.x - 250,
          top: pos.y - 250,
          background:
            "radial-gradient(circle, rgba(69,255,202,0.12) 0%, rgba(69,255,202,0) 70%)",
          transition: "transform 120ms ease-out",
        }}
      />
    </div>
  );
}
