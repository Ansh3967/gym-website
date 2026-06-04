import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroVideo from "@/assets/hero-bg.mp4.asset.json";

const words = ["Run", "Workout", "Fitness", "Bodybuilding", "Strength"];

function useTyping() {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const delay = deleting ? 60 : 110;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1200);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setWordIdx((i) => (i + 1) % words.length);
        }
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, wordIdx]);

  return text;
}

export function Hero() {
  const typed = useTyping();

  return (
    <section id="home" className="relative overflow-hidden bg-black pt-28 pb-16 lg:pt-32 lg:pb-24">
      {/* Background video */}
      <video
        src={heroVideo.url}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-fill "
      />
      <div aria-hidden className="absolute inset-0 z-0 bg-black/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          className="relative z-10"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
            Build Your
            <br />
            Dream Physique
          </h1>
          <div className="mt-6 h-10 text-3xl sm:text-4xl font-bold text-accent-mint">
            <span className="typing-cursor">{typed}</span>
          </div>
          <p className="mt-6 max-w-md text-white/60 text-base leading-relaxed">
            Train hard, live strong. Join Royal Fitness and unlock a community of elite coaches,
            premium equipment, and a program designed for results — not excuses.
          </p>
          <a
            href="#pricing"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-accent-mint text-black px-7 py-3 font-semibold transition-all duration-300 hover:neon-glow hover:scale-105"
          >
            Join Us
          </a>
        </motion.div>

        <div className="relative h-[420px] sm:h-[520px] lg:h-[600px]">
          <span className="absolute inset-0 flex items-center justify-center text-[20vw] lg:text-[14rem] font-black tracking-tighter text-white/[0.2] select-none pointer-events-none">
            FITNESS
          </span>
        </div>
      </div>
    </section>
  );
}
