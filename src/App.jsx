import React, { useEffect, useState } from "react";
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";
import profilePic from "./assets/profile_picture.jpg";

const projects = [
  {
    title: "spotaa.eu",
    href: "https://spotaa.eu",
    blurb:
      "Full-stack OOH (out-of-home) advertising platform with real-time billboard booking, media asset management, and modular campaign planning. Built with a composable architecture using Next.js, tRPC, Prisma and PostgreSQL.",
    images: ["/spotaa.png", "/work/p1-2.svg"],
  },
];

function getRoute() {
  const hash = typeof window !== 'undefined' ? window.location.hash : '';
  // Only treat hashes starting with "#/" as routes. Plain "#work" should scroll.
  if (hash.startsWith('#/')) {
    return hash.slice(2);
  }
  return '';
}

export default function Site() {
  const [route, setRoute] = useState(getRoute());
  useEffect(() => {
    const onHash = () => setRoute(getRoute());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  if (route === 'work') {
    return <WorkPage />;
  }

  return (
    <div className="min-h-screen w-full bg-black">
      {/* Hero */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center text-center"
      >
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: "url('/dark_marble.jpeg')" }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70" aria-hidden />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-black"
          aria-hidden
        />
        <div className="relative z-10 px-6 max-w-3xl animate-fade-in">
          <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight">
            Tiago Soares
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Building fast, clean software in ambitious environments.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#work" className="btn">Work</a>
            <a href="#connect" className="btn-outline">Connect</a>
          </div>
        </div>
      </section>

      {/* Work / Projects */}
      <section id="work" className="px-6 py-16 md:py-20 max-w-6xl mx-auto">
        <div className="h-px w-24 bg-gold/60 mb-6" aria-hidden />
        <h2 className="font-playfair text-3xl md:text-4xl mb-8">Work.</h2>

        <div className="space-y-8 md:space-y-10">
          {projects.slice(0, 2).map((p) => (
            <article
              key={p.title}
              className="group relative rounded-xl p-6 md:p-8 bg-white/0 hover:bg-white/[0.03] transition"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
                <div>
                  <div className="h-0.5 w-12 bg-gold mb-4" aria-hidden />
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.title} (opens in new tab)`}
                      className="inline-flex items-center gap-2 mb-2 underline-offset-4 hover:underline decoration-white/20 hover:decoration-gold/80 transition-colors"
                    >
                      <span className="text-2xl font-semibold hover:text-gold transition-colors">{p.title}</span>
                      <ExternalLink className="w-4 h-4 text-white/60 transition-colors group-hover/link:text-gold" aria-hidden />
                    </a>
                  ) : (
                    <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
                  )}
                  <p className="text-white/75 leading-relaxed">{p.blurb}</p>
                </div>
                <div className="rounded-xl overflow-hidden">
                  {p.images?.[0] && (
                    <img
                      src={p.images[0]}
                      alt={`${p.title} preview`}
                      className="w-full h-44 md:h-56 object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 md:mt-12 flex justify-end">
          <a href="#/work" className="text-white/80 hover:text-gold transition">See more →</a>
        </div>
      </section>

      {/* Connect */}
      <section id="connect" className="px-6 py-14 md:py-20 max-w-6xl mx-auto">
        <div className="h-px w-24 bg-gold/60 mb-6" aria-hidden />
        <h2 className="font-playfair text-3xl md:text-4xl mb-6 md:mb-10">Connect.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-white/85 leading-relaxed text-justify">
              I’m Tiago — a builder with a disciplined, product‑first approach. I design and ship software end to end: clear interfaces, reliable systems, and fast delivery. I care about performance, detail, and cultural context—the things that make products feel inevitable. I collaborate well with autonomous teams and communicate directly. I move quickly without breaking fundamentals and keep standards high. If you want a competent partner who can think, prototype, and execute with taste and rigor, I’d love to connect.
            </p>
            <div className="mt-5 md:mt-6 flex items-center gap-5 text-white/80">
              <a href="mailto:xtiagosoares@gmail.com" aria-label="Email" className="transition hover:text-gold"><Mail /></a>
              <a href="https://linkedin.com/in/tiagosoaresv" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-gold"><Linkedin /></a>
              <a href="https://github.com/tiagosoaresv" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-gold"><Github /></a>
              <a href="https://x.com/tiagosoaresv" target="_blank" rel="noreferrer" aria-label="X" className="transition hover:text-gold">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3 L21 21" />
                  <path d="M21 3 L3 21" />
                </svg>
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img
              src={profilePic}
              alt="Portrait of Tiago Soares"
              className="w-40 md:w-56 aspect-[3/4] object-cover rounded-xl grayscale"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function WorkPage() {
  return (
    <div className="min-h-screen w-full bg-black">
      <section className="px-6 py-16 md:py-20 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div>
            <div className="h-px w-24 bg-gold/60 mb-6" aria-hidden />
            <h1 className="font-playfair text-3xl md:text-4xl">Work</h1>
          </div>
          <a href="#/" className="text-white/70 hover:text-gold transition">Back</a>
        </div>

        <div className="space-y-10 md:space-y-12">
          {projects.map((p) => (
            <article key={p.title} className="group relative rounded-xl p-6 md:p-8 bg-white/0 hover:bg-white/[0.03] transition">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
                <div>
                  <div className="h-0.5 w-12 bg-gold mb-4" aria-hidden />
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.title} (opens in new tab)`}
                      className="inline-flex items-center gap-2 mb-2 underline-offset-4 hover:underline decoration-white/20 hover:decoration-gold/80 transition-colors"
                    >
                      <span className="text-2xl md:text-3xl font-semibold hover:text-gold transition-colors">{p.title}</span>
                      <ExternalLink className="w-4 h-4 text-white/60" aria-hidden />
                    </a>
                  ) : (
                    <h2 className="text-2xl md:text-3xl font-semibold mb-2">{p.title}</h2>
                  )}
                  <p className="text-white/80 leading-relaxed">{p.blurb}</p>
                </div>
                <div className="rounded-xl overflow-hidden">
                  {p.images?.[0] && (
                    <img
                      src={p.images[0]}
                      alt={`${p.title} main`}
                      className="w-full h-56 md:h-72 object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  )}
                </div>
              </div>
              {p.images && p.images.length > 1 && (
                <div className="mt-4 md:mt-5 flex gap-3 overflow-x-auto">
                  {p.images.slice(1).map((src, i) => (
                    <img
                      key={src}
                      src={src}
                      alt={`${p.title} detail ${i + 2}`}
                      className="h-20 w-32 object-cover rounded-md flex-none"
                    />
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
