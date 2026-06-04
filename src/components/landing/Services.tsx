import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useTilt } from "@/hooks/use-tilt";
import { services } from "@/data/services";

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
            <ServiceCard key={s.slug} slug={s.slug} title={s.title} img={s.img} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  slug,
  title,
  img,
  index,
}: {
  slug: string;
  title: string;
  img: string;
  index: number;
}) {
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
        className="tilt-card"
      >
        <Link
          to={`/services/${slug}`}
          className="glow-ring bg-black/60 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden cursor-pointer block group"
        >
          <div className="aspect-[16/10] overflow-hidden">
            <img
              src={img}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="p-5 flex items-center justify-between">
            <h3 className="text-lg font-bold text-white">{title}</h3>
            <span className="flex items-center gap-2 text-accent-mint text-xs tracking-widest">
              0{index + 1}
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </span>
          </div>
        </Link>
      </div>
    </motion.div>
  );
}
