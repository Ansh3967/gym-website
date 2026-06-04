import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Services } from "@/components/landing/Services";
import { About } from "@/components/landing/About";
import { Pricing } from "@/components/landing/Pricing";
import { Reviews } from "@/components/landing/Reviews";
import { Footer } from "@/components/landing/Footer";
import { CursorGlow } from "@/components/landing/CursorGlow";

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Ambient grid background */}
      <div aria-hidden className="cyber-grid pointer-events-none fixed inset-0 z-0" />
      {/* Radial vignette */}
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
      <main className="relative z-10">
        <Hero />
        <Services />
        <About />
        <Pricing />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}
