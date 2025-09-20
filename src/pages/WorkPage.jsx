import React, { useEffect } from "react";
import projects from "../data/projects";

export default function WorkPage() {
  // Ensure reveal animation triggers when this page mounts
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
  }, []);

  return (
    <div className="min-h-screen w-full bg-black">
      <section className="px-6 py-16 md:py-20 max-w-6xl mx-auto">
        <div className="flex items-start justify-between mb-4 md:mb-6">
          <div>
            <div className="h-px w-24 bg-gold/60 mb-6" aria-hidden />
            <h1 className="font-playfair text-3xl md:text-4xl">Work</h1>
            <p className="text-white/70 mt-2 max-w-2xl">
              A deeper look at selected projects and product work. Snapshots,
              interfaces, and notes on decisions that shaped each build.
            </p>
          </div>
          <a href="#/" className="text-white/70 hover:text-gold transition">Back</a>
        </div>

        <div className="space-y-10 md:space-y-12">
          {projects.map((p) => (
            <article key={p.title} className="group relative rounded-xl p-0 bg-white/0 js-reveal opacity-0">
              <a href={`#/work/${p.slug}`} className="block rounded-xl p-6 md:p-8 hover:bg-white/[0.03] transition">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
                  <div>
                    <div className="h-0.5 w-12 bg-gold mb-4" aria-hidden />
                    <h2 className="text-2xl md:text-3xl font-semibold group-hover:text-gold transition-colors">{p.title}</h2>
                    <p className="text-white/80 leading-relaxed mt-2">{p.summary}</p>
                  </div>
                  <div className="rounded-xl overflow-hidden">
                    {p.images?.[0] && (
                      <img
                        src={p.images[0]}
                        alt={p.title === 'spotaa.eu' ? 'Homepage screenshot of spotaa.eu out-of-home advertising platform' : `${p.title} – detailed interface screenshot`}
                        className="w-full h-56 md:h-72 object-cover transition-transform duration-300 group-hover:scale-[1.02]"
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
      </section>
    </div>
  );
}
