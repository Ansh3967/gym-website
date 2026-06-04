import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About Us" },
  { href: "#pricing", label: "Pricing" },
  { href: "#reviews", label: "Review" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      const sections = links.map((l) => document.querySelector(l.href));
      const y = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i] as HTMLElement | null;
        if (el && el.offsetTop <= y) {
          setActive(links[i].href);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="glass-nav fixed top-0 left-0 right-0 z-50 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="text-xl font-bold tracking-tight transition-transform duration-200 hover:scale-105"
        >
          Royal <span className="text-accent-mint">Fitness</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`nav-link text-sm font-medium text-white/80 hover:text-white ${
                active === l.href ? "active text-accent-mint" : ""
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#pricing"
          className="hidden md:inline-flex items-center justify-center rounded-full border border-accent-mint text-accent-mint px-5 py-2 text-sm font-semibold transition-all duration-300 hover:bg-accent-mint hover:text-black hover:neon-glow"
        >
          Join Us
        </a>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-white"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-nav border-t border-white/5">
          <nav className="flex flex-col px-6 py-4 gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`text-base font-medium py-2 ${
                  active === l.href ? "text-accent-mint" : "text-white/80"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full border border-accent-mint text-accent-mint px-5 py-2 text-sm font-semibold"
            >
              Join Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
