import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTilt } from "@/hooks/use-tilt";


const plans = [
  {
    name: "BASIC",
    price: "$100",
    features: ["Smart workout plan", "At home workouts"],
    highlight: false,
  },
  {
    name: "PRO",
    price: "$150",
    features: ["Pro Gyms", "Smart workout plan", "At home workouts"],
    highlight: true,
  },
  {
    name: "PREMIUM",
    price: "$300",
    features: [
      "ELITE Gyms & Classes",
      "Pro Gyms",
      "Smart workout plan",
      "At home workouts",
      "Personal Training",
    ],
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-[#111111] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center text-4xl sm:text-5xl font-extrabold mb-14"
        >
          Our <span className="text-accent-mint">Plans</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <PlanCard key={p.name} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PlanCard({
  name,
  price,
  features,
  highlight,
  index,
}: {
  name: string;
  price: string;
  features: string[];
  highlight: boolean;
  index: number;
}) {
  const tilt = useTilt(8);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.3, ease: "easeOut", delay: index * 0.08 }}
    >
      <div
        ref={tilt.ref}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        className={`tilt-card glow-ring bg-black/60 backdrop-blur-sm rounded-2xl p-8 border ${
          highlight ? "border-accent-mint neon-glow-sm" : "border-white/10"
        }`}
      >
        <h3 className="text-sm font-bold tracking-widest text-white/70">{name}</h3>
        <div className="mt-3 text-4xl font-extrabold text-accent-mint">
          {price}
          <span className="text-2xl text-white/70">/Month</span>
        </div>
        <ul className="mt-6 space-y-3 text-white/75 text-sm">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-mint" />
              {f}
            </li>
          ))}
        </ul>
        <a
          href="#"
          className="mt-8 inline-flex items-center gap-2 text-accent-mint font-semibold border-b border-accent-mint/40 pb-1 hover:border-accent-mint transition"
        >
          Join Now <ArrowRight size={16} />
        </a>
      </div>
    </motion.div>
  );
}

