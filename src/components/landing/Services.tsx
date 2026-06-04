import { motion } from "framer-motion";
import { useTilt } from "@/hooks/use-tilt";



const services = [
  {
    title: "Physical Fitness",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Weight Gain",
    img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Strength Training",
    img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Fat Loss",
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Weightlifting",
    img: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Running",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-[#111111] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center text-4xl sm:text-5xl font-extrabold mb-14"
        >
          Our <span className="text-accent-mint">Services</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, img, index }: { title: string; img: string; index: number }) {
  const tilt = useTilt(10);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.05 }}
    >
      <div
        ref={tilt.ref}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        className="tilt-card glow-ring bg-black/60 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden cursor-pointer"
      >
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={img}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
        </div>
        <div className="p-5 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <span className="text-accent-mint text-xs tracking-widest">0{index + 1}</span>
        </div>
      </div>
    </motion.div>
  );
}
