import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowUpRight,
  Sparkles,
  Palette,
  Megaphone,
  Target,
  Compass,
  Mail,
  AtSign,
  Link as LinkIcon,
  MessageCircle,
  Star,
  GraduationCap,
} from "lucide-react";
import heroVisual from "@/assets/hero-visual.jpg";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import concert1 from "@/assets/work/concert-1.png";
import concert2 from "@/assets/work/concert-2.png";
import concert3 from "@/assets/work/concert-3.png";
import realestate1 from "@/assets/work/realestate-1.png";
import realestate2 from "@/assets/work/realestate-2.png";
import realestate3 from "@/assets/work/realestate-3.png";
import restaurant1 from "@/assets/work/restaurant-1.png";
import restaurant2 from "@/assets/work/restaurant-2.png";
import restaurant3 from "@/assets/work/restaurant-3.png";
import jewellery1 from "@/assets/work/jewellery-1.jpeg";
import jewellery2 from "@/assets/work/jewellery-2.jpeg";
import jewellery3 from "@/assets/work/jewellery-3.jpeg";
import cafe1 from "@/assets/work/cafe-1.jpeg";
import cafe2 from "@/assets/work/cafe-2.jpeg";
import cafe3 from "@/assets/work/cafe-3.jpeg";

const workCategories = [
  { id: "concert", n: "01", name: "Concert", images: [concert1, concert2, concert3] },
  { id: "realestate", n: "02", name: "Real Estate", images: [realestate1, realestate2, realestate3] },
  { id: "restaurant", n: "03", name: "Restaurant", images: [restaurant1, restaurant2, restaurant3] },
  { id: "jewellery", n: "04", name: "Jewellery", images: [jewellery1, jewellery2, jewellery3] },
  { id: "cafe", n: "05", name: "Cafe", images: [cafe1, cafe2, cafe3] },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Albin Sanjay — Graphic Designer & Social Media Manager" },
      {
        name: "description",
        content:
          "I help brands look premium and grow online through strategic design, branding, and content creation.",
      },
      { property: "og:title", content: "Albin Sanjay — Designer & Social Media Manager" },
      {
        property: "og:description",
        content: "Premium portfolio of Albin Sanjay — branding, social media, creative direction.",
      },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Palette, title: "Social Media Creatives", desc: "Scroll-stopping posts, reels covers, and carousels crafted around your brand voice." },
  { icon: Megaphone, title: "Social Media Management", desc: "End-to-end content planning, scheduling, and engagement to grow your community." },
  { icon: Target, title: "Content Strategy", desc: "Data-informed strategy that turns casual viewers into loyal customers." },
  { icon: Sparkles, title: "Advertising Design", desc: "High-converting ad creatives built for performance across every platform." },
  { icon: Compass, title: "Creative Direction", desc: "Cohesive visual systems and art direction that elevate your entire brand." },
];

const process = [
  { n: "01", t: "Discovery", d: "Understanding your brand, audience, and goals." },
  { n: "02", t: "Strategy", d: "Planning design direction and content approach." },
  { n: "03", t: "Design & Execution", d: "Creating visuals and structured content." },
  { n: "04", t: "Refinement", d: "Feedback, revisions, and improvements." },
  { n: "05", t: "Delivery & Support", d: "Final delivery and ongoing guidance if needed." },
];

const tools = [
  { name: "Photoshop", level: 95 },
  { name: "Illustrator", level: 90 },
  { name: "Figma", level: 88 },
  { name: "Canva", level: 92 },
];

const projects = [
  { title: "Local Brand Identity System", cat: "Branding", desc: "Complete visual identity for a neighborhood café — from logo to packaging.", tone: "from-cyan-500/30 to-blue-700/30" },
  { title: "Startup Social Campaign", cat: "Social Media", desc: "30-day content launch that drove 4× audience growth in one month.", tone: "from-blue-500/30 to-indigo-700/30" },
  { title: "Fashion Ad Creatives", cat: "Advertising", desc: "Performance ads with editorial polish for a D2C fashion label.", tone: "from-sky-400/30 to-cyan-700/30" },
  { title: "Instagram Growth System", cat: "Strategy", desc: "Templated content engine that scales without losing brand voice.", tone: "from-indigo-500/30 to-blue-700/30" },
  { title: "Promo Design System", cat: "Brand System", desc: "Reusable promo templates that cut production time by 70%.", tone: "from-cyan-600/30 to-teal-700/30" },
  { title: "Restaurant Brand Refresh", cat: "Branding", desc: "Refreshed identity & menu system for a growing restaurant chain.", tone: "from-blue-600/30 to-purple-700/30" },
];

const testimonials = [
  { q: "Professional work with strong design quality.", n: "Local Business Owner" },
  { q: "Great understanding of branding and social media.", n: "Startup Founder" },
  { q: "Delivered clean and impactful visuals.", n: "Marketing Lead" },
];

function Home() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  return (
    <div className="relative min-h-screen text-foreground">
      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 grid-bg" />
        <div className="glow-orb animate-pulse-glow" style={{ width: 500, height: 500, top: -100, left: -100, background: "oklch(0.6 0.25 230)" }} />
        <div className="glow-orb animate-pulse-glow" style={{ width: 600, height: 600, bottom: -200, right: -150, background: "oklch(0.5 0.25 260)" }} />
        <div className="glow-orb animate-pulse-glow" style={{ width: 400, height: 400, top: "40%", left: "30%", background: "oklch(0.55 0.22 220)", opacity: 0.25 }} />
      </div>

      <Navbar />

      {/* HERO */}
      <section id="home" className="relative pt-36 pb-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-primary mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for new projects
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6"
            >
              <span className="text-foreground">Albin Sanjay</span>
              <br />
              <span className="text-glow">Designer & Social</span>
              <br />
              <span className="text-gradient">Media Manager.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-lg text-muted-foreground max-w-xl mb-4"
            >
              I help brands look premium and grow online through strategic design and content.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="text-base text-muted-foreground/80 max-w-xl mb-10"
            >
              Turning local businesses into powerful brands on social media — from eye-catching posts to smart strategies that help businesses grow, connect, and stand out.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#work" className="btn-glow inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium">
                View Work <ArrowUpRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="btn-ghost inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium">
                Start a Project
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="mt-14 grid grid-cols-3 gap-6 max-w-md"
            >
              {[
                { k: "50+", v: "Projects" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="text-3xl font-display font-bold text-glow">{s.k}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.v}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden glass-card p-3 animate-float">
              <img
                src={heroVisual}
                alt="Creative visual"
                width={1024}
                height={1024}
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-xs text-muted-foreground">Crafting</div>
                  <div className="text-sm font-medium">Brand Magic</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3">
                <div className="text-xs text-muted-foreground">Based in</div>
                <div className="text-sm font-medium">India 🇮🇳</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <SectionLabel>About</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl">
              Building brands that <span className="text-glow">look strong</span> and perform online.
            </h2>
          </Reveal>

          <div className="mt-10 max-w-3xl">
            <Reveal>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                I'm a designer focused on building brands that look strong and perform online.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I combine visual design with content strategy to create work that is not only visually appealing but also effective.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My goal is simple — help brands grow with clarity and consistency.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel>Services</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 max-w-3xl">
              What I do <span className="text-glow">best.</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mb-14">
              A focused set of services built to make your brand stand out and scale.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="glass-card p-7 h-full group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <SectionLabel>Process</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold mb-14 max-w-3xl">
              My Creative <span className="text-glow">Process.</span>
            </h2>
          </Reveal>

          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
            <div className="space-y-6">
              {process.map((p, i) => (
                <Reveal key={p.n} delay={i * 0.08}>
                  <div className={`grid md:grid-cols-2 gap-4 items-center ${i % 2 ? "md:[direction:rtl]" : ""}`}>
                    <div className="md:[direction:ltr]">
                      <div className="glass-card p-6 ml-12 md:ml-0">
                        <div className="text-xs text-primary font-mono mb-2">STEP {p.n}</div>
                        <h3 className="text-2xl font-semibold mb-2">{p.t}</h3>
                        <p className="text-muted-foreground text-sm">{p.d}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full glass flex items-center justify-center font-display font-bold text-primary text-lg shadow-[var(--shadow-glow)]">
                        {p.n}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <SectionLabel>Skills & Tools</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold mb-14 max-w-3xl">
              Tools I work <span className="text-glow">with.</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tools.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <div className="glass-card p-6 text-center">
                  <ProgressRing value={t.level} />
                  <div className="mt-4 font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">{t.level}% Proficiency</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MY WORK */}
      <section id="projects" className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel>My Work</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold mb-14 max-w-3xl">
              Projects by <span className="text-glow">category.</span>
            </h2>
          </Reveal>

          <Tabs defaultValue="concert" className="w-full">
            <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent p-0 mb-10">
              {workCategories.map((c) => (
                <TabsTrigger
                  key={c.id}
                  value={c.id}
                  className="glass-card px-5 py-3 rounded-full data-[state=active]:bg-primary/15 data-[state=active]:text-primary border border-border/50"
                >
                  <span className="text-xs text-muted-foreground mr-2">{c.n}</span>
                  {c.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {workCategories.map((c) => (
              <TabsContent key={c.id} value={c.id} className="mt-0">
                {c.images.length === 0 ? (
                  <div className="glass-card p-14 text-center text-muted-foreground">
                    Coming soon — projects for {c.name} will appear here.
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {c.images.map((src, i) => (
                      <Reveal key={src} delay={i * 0.06}>
                        <button
                          onClick={() => setLightbox(src)}
                          className="glass-card overflow-hidden group block w-full"
                        >
                          <div className="aspect-square overflow-hidden">
                            <img
                              src={src}
                              alt={`${c.name} project ${i + 1}`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        </button>
                      </Reveal>
                    ))}
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <Dialog open={!!lightbox} onOpenChange={(o) => !o && setLightbox(null)}>
        <DialogContent className="max-w-4xl p-2 bg-background/95 border-border">
          {lightbox && (
            <img src={lightbox} alt="Project preview" className="w-full h-auto rounded-lg" />
          )}
        </DialogContent>
      </Dialog>

      {/* TESTIMONIALS */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <SectionLabel>Testimonials</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold mb-14 max-w-3xl">
              Words from <span className="text-glow">clients.</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="glass-card p-7 h-full">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground/90 text-lg leading-relaxed mb-6">"{t.q}"</p>
                  <div className="text-sm text-muted-foreground">— {t.n}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="glass-card p-8 md:p-14 relative overflow-hidden">
              <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full" style={{ background: "oklch(0.6 0.25 230 / 0.3)", filter: "blur(80px)" }} />
              <div className="relative">
                <SectionLabel>Contact</SectionLabel>
                <h2 className="text-4xl md:text-6xl font-bold mb-4 max-w-3xl">
                  Let's build something <span className="text-glow">impactful</span> together.
                </h2>
                <p className="text-muted-foreground text-lg mb-10 max-w-xl">
                  Have a project in mind? Let's build something that stands out.
                </p>

                <form className="grid md:grid-cols-2 gap-4 mb-8" onSubmit={(e) => e.preventDefault()}>
                  <input className="bg-input/50 border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors" placeholder="Your name" />
                  <input type="email" className="bg-input/50 border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors" placeholder="Email address" />
                  <textarea rows={4} className="md:col-span-2 bg-input/50 border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors resize-none" placeholder="Tell me about your project..." />
                  <button type="submit" className="btn-glow md:col-span-2 px-6 py-3 rounded-xl font-medium inline-flex items-center justify-center gap-2">
                    Start a Project <ArrowUpRight className="w-4 h-4" />
                  </button>
                </form>

                <div className="flex flex-wrap gap-3">
                  <ContactPill icon={Mail} label="Email" href="mailto:hello@albinsanjay.com" />
                  <ContactPill icon={MessageCircle} label="WhatsApp" href="#" />
                  <ContactPill icon={AtSign} label="Instagram" href="#" />
                  <ContactPill icon={LinkIcon} label="LinkedIn" href="#" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative py-10 px-6 border-t border-border/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="text-sm text-muted-foreground">
            © 2026 Albin Sanjay — Designing brands with purpose.
          </div>
          <div className="flex gap-2">
            {[AtSign, LinkIcon, Mail, MessageCircle].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 mb-5 text-xs font-mono uppercase tracking-[0.2em] text-primary">
      <span className="w-8 h-px bg-primary" />
      {children}
    </div>
  );
}

function ContactPill({ icon: Icon, label, href }: { icon: typeof Mail; label: string; href: string }) {
  return (
    <a href={href} className="glass rounded-full px-4 py-2 inline-flex items-center gap-2 text-sm hover:border-primary/50 hover:text-primary transition-all">
      <Icon className="w-4 h-4" />
      {label}
    </a>
  );
}

function ProgressRing({ value }: { value: number }) {
  const r = 36;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;
  return (
    <div className="relative w-24 h-24 mx-auto">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r={r} stroke="oklch(0.3 0.04 250 / 0.4)" strokeWidth="6" fill="none" />
        <motion.circle
          cx="50"
          cy="50"
          r={r}
          stroke="url(#grad)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.78 0.18 220)" />
            <stop offset="100%" stopColor="oklch(0.55 0.2 260)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-lg font-display font-bold text-glow">
        {value}%
      </div>
    </div>
  );
}
