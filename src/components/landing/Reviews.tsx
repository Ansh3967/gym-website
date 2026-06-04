import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "John",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    text: "Royal Fitness changed how I approach training. The coaches push hard but the community keeps you coming back every single day.",
  },
  {
    name: "Steve",
    avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=200&q=80",
    text: "Best gym I've ever joined. Premium equipment, clean facility, and trainers who actually care about your progress.",
  },
  {
    name: "David",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=200&q=80",
    text: "Down 30 lbs in 6 months. The smart workout plan and accountability from the team made all the difference.",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="bg-black py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center text-4xl sm:text-5xl font-extrabold mb-14"
        >
          Client <span className="text-accent-mint">Reviews</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.3, ease: "easeOut", delay: i * 0.08 }}
              className="hover-lift bg-[#111111] rounded-2xl p-8 border border-white/10 text-center"
            >
              <div className="flex justify-center -mt-16 mb-4">
                <div className="h-20 w-20 rounded-full border-2 border-accent-mint p-1">
                  <img
                    src={r.avatar}
                    alt={r.name}
                    className="h-full w-full rounded-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <h3 className="text-lg font-bold">{r.name}</h3>
              <div className="mt-2 flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="mt-4 text-white/65 text-sm leading-relaxed">
                {r.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
