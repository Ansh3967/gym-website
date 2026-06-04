import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Sparkles } from "lucide-react";
import { getService } from "@/data/services";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { CursorGlow } from "@/components/landing/CursorGlow";
import { useEffect } from "react";
export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getService(slug) : undefined;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  if (!service) return <Navigate to="/" replace />;
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <div aria-hidden className="cyber-grid pointer-events-none fixed inset-0 z-0" />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(69,255,202,0.10) 0%, rgba(0,0,0,0) 60%)",
        }}
      />
      <CursorGlow />
      <Navbar />
      <main className="relative z-10 pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <Link
            to="/#services"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-accent-mint transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Back to services
          </Link>
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative overflow-hidden rounded-3xl border border-white/10 mb-16"
          >
            <div className="aspect-[21/9] w-full">
              <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
              <span className="inline-flex items-center gap-2 text-xs tracking-[0.3em] text-accent-mint mb-4">
                <Sparkles size={14} /> SERVICE
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-3">
                {service.title}
              </h1>
              <p className="text-lg text-white/80 max-w-2xl">{service.tagline}</p>
            </div>
          </motion.div>
          {/* Description */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              What is <span className="text-accent-mint">{service.title}</span>?
            </h2>
            <p className="text-white/75 text-lg leading-relaxed max-w-3xl">{service.description}</p>
          </motion.section>
          {/* Why */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Why this matters</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.whyItMatters.map((reason, i) => (
                <div
                  key={i}
                  className="glow-ring bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                >
                  <CheckCircle2 className="text-accent-mint mb-3" size={22} />
                  <p className="text-white/85 leading-relaxed">{reason}</p>
                </div>
              ))}
            </div>
          </motion.section>
          {/* Real stories */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Real people, real results</h2>
            <p className="text-white/60 mb-6">
              Stories from members who walked into our gym just like you.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {service.examples.map((ex, i) => (
                <div
                  key={i}
                  className="relative bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 rounded-2xl p-7 overflow-hidden"
                >
                  <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-accent-mint/10 blur-3xl" />
                  <h3 className="font-bold text-lg text-accent-mint mb-2">{ex.name}</h3>
                  <p className="text-white/80 leading-relaxed">"{ex.story}"</p>
                </div>
              ))}
            </div>
          </motion.section>
          {/* Benefits */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">What you'll gain</h2>
            <div className="flex flex-wrap gap-3">
              {service.benefits.map((b) => (
                <span
                  key={b}
                  className="px-5 py-2.5 rounded-full border border-accent-mint/40 bg-accent-mint/5 text-accent-mint text-sm font-medium"
                >
                  {b}
                </span>
              ))}
            </div>
          </motion.section>
          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-3xl border border-accent-mint/30 bg-gradient-to-br from-accent-mint/10 via-black to-black p-10 lg:p-14 text-center"
          >
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-3">
              Ready to start your {service.title.toLowerCase()} journey?
            </h3>
            <p className="text-white/70 mb-7 max-w-xl mx-auto">
              Your first session is on us. Walk in, meet a coach, and see what's possible.
            </p>
            <Link
              to="/#pricing"
              className="inline-flex items-center justify-center rounded-full bg-accent-mint text-black px-8 py-3 font-semibold transition-all duration-300 hover:neon-glow"
            >
              Join Royal Fitness
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
