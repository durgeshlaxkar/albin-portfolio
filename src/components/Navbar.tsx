import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = links.map((l) => document.querySelector(l.href));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i] as HTMLElement | null;
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(links[i].href);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(95%,1100px)] rounded-full transition-all ${
        scrolled ? "glass shadow-[var(--shadow-soft)]" : ""
      }`}
    >
      <div className="flex items-center justify-between px-6 py-3">
        <a href="#home" className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_12px_var(--glow)]" />
          Albin<span className="text-primary">.</span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`px-4 py-1.5 text-sm rounded-full transition-all ${
                active === l.href
                  ? "bg-primary/15 text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="btn-glow text-sm px-5 py-2 rounded-full font-medium hidden sm:inline-flex"
        >
          Hire Me
        </a>
      </div>
    </motion.nav>
  );
}
