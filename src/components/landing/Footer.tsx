import { Instagram, Facebook, Linkedin } from "lucide-react";

const socials = [
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col items-center gap-6">
        <div className="flex items-center gap-5">
          {socials.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-accent-mint text-accent-mint transition-all duration-300 hover:scale-125 hover:-translate-y-2"
              style={{ transitionProperty: "transform, box-shadow" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = "0 0 25px #45FFCA")
              }
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "")}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
        <p className="text-white/40 text-sm text-center">
          © Royal Fitness 2024 - All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
