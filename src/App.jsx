import React, { useEffect, useState } from "react";
import { Mail, Github } from "lucide-react";
import profilePic from "./assets/photo2.jpg";
import projects from "./data/projects";
import WorkPage from "./pages/WorkPage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";

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

  // Subtle on-scroll reveal without extra deps
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.js-reveal'));
    if (!('IntersectionObserver' in window) || els.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('animate-fade-in');
            e.target.classList.remove('opacity-0');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [route]);

  if (route === 'work') {
    return <WorkPage />;
  }
  if (route.startsWith('work/')) {
    const slug = route.split('/') [1] || '';
    return <ProjectPage slug={slug} />;
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
              className="group relative rounded-xl p-0 bg-white/0 js-reveal opacity-0"
            >
              <a href={`#/work/${p.slug}`} className="block rounded-xl p-6 md:p-8 hover:bg-white/[0.03] transition">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
                  <div>
                    <div className="h-0.5 w-12 bg-gold mb-4" aria-hidden />
                    <h3 className="text-2xl font-semibold group-hover:text-gold transition-colors">{p.title}</h3>
                    <p className="text-white/75 leading-relaxed mt-2">{p.summary}</p>
                  </div>
                  <div className="rounded-xl overflow-hidden">
                    {p.images?.[0] && (
                      <img
                        src={p.images[0]}
                        alt={p.title === 'spotaa.eu' ? 'Homepage screenshot of spotaa.eu out-of-home advertising platform' : `${p.title} – interface preview`}
                        className="w-full h-44 md:h-56 object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                  </div>
                </div>
              </a>
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
              I’m <span className="text-gold">Tiago Soares</span> — a builder with a disciplined, product‑first approach. I design and ship software end to end: clear interfaces, reliable systems, and fast delivery. I care about performance, detail, and cultural context—the things that make products feel inevitable. I collaborate well with autonomous teams and communicate directly. I move quickly without breaking fundamentals and keep standards high. If you want a competent partner who can think, prototype, and execute with taste and rigor, I’d love to connect.
            </p>
            <p className="mt-3 text-sm text-white/70">
              If this resonates—professionally or personally—say hello. I read every message.
            </p>
            <div className="mt-5 md:mt-6 flex items-center gap-5 text-white/80">
              <a
                href="https://x.com/tiagosoaresv"
                title="X (primary contact)"
                target="_blank"
                rel="noreferrer"
                aria-label="X (primary contact)"
                className="transition text-gold hover:text-gold/80"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 300 300"
                  width="22"
                  height="22"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M37 0h65.3l71.3 96.5L255 .3h66.5l-116.9 130L325 300h-67L178.4 199.4 96.4 300H28.5l117.3-136.8L37 0z"
                  />
                </svg>
              </a>
              <a href="mailto:xtiagosoares@gmail.com" title="Email" aria-label="Email" className="transition hover:text-gold"><Mail /></a>
              <a href="https://github.com/tiagosoaresv" title="GitHub" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-gold"><Github /></a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img
              src={profilePic}
              alt="Black-and-white portrait of Tiago Soares"
              className="w-40 md:w-56 aspect-[3/4] object-cover rounded-xl grayscale"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

// WorkPage moved to ./pages/WorkPage.jsx
