import { motion } from "framer-motion";
import { Check } from "lucide-react";

const bullets = [
  "Friendly atmosphere where you can make lasting friends",
  "Expert personal trainers to unlock your potential",
  "Practice sessions that elevate your fitness",
  "Supportive management dedicated to your success",
];

export function About() {
  return (
    <section id="about" className="bg-black py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          className="rounded-2xl overflow-hidden border border-white/10"
        >
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80"
            alt="Modern gym with treadmills"
            className="w-full h-[420px] object-cover"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Why Choose <span className="text-accent-mint">Us?</span>
          </h2>
          <ul className="mt-8 space-y-4">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-white/75">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent-mint text-accent-mint">
                  <Check size={14} strokeWidth={3} />
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <a
            href="#pricing"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-accent-mint text-black px-7 py-3 font-semibold transition-all duration-300 hover:neon-glow hover:scale-105"
          >
            Book A Free Class
          </a>
        </motion.div>
      </div>
    </section>
  );
}
