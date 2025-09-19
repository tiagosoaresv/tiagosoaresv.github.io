import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import profilePic from "./assets/profile_picture.png";

const projects = [
  {
    title: "Project One",
    blurb: "Concise one-liner about the project’s purpose.",
    href: "#",
  },
  {
    title: "Project Two",
    blurb: "Small description that hints at impact.",
    href: "#",
  },
  {
    title: "Project Three",
    blurb: "Another short summary and link to demo.",
    href: "#",
  },
];

export default function Site() {
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
        <div className="relative z-10 px-6 max-w-3xl animate-fade-in">
          <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight">
            Tiago Soares
          </h1>
          <p className="mt-4 text-lg text-white/80">
            I build fast, clean software for ambitious teams.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#work" className="btn">View Work</a>
            <a href="#about" className="btn-outline">About Me</a>
          </div>
        </div>
      </section>

      {/* Work / Projects */}
      <section id="work" className="px-6 py-16 md:py-20 max-w-6xl mx-auto">
        <h2 className="font-playfair text-3xl md:text-4xl mb-8">Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.href} className="card p-6 focus:outline-none focus:ring-2 focus:ring-gold/60">
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{p.blurb}</p>
            </a>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-16 md:py-20 max-w-6xl mx-auto">
        <h2 className="font-playfair text-3xl md:text-4xl mb-8">About</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <p className="text-white/85 leading-relaxed">
              I’m a software engineer from Braga, studying at the University of Minho. I design systems end‑to‑end—front to back, data to deploy—with a bias for clarity, speed, and reliability. My work is direct: small surface area, strong foundations, no fluff. I use AI where it compounds output, not as decoration. I like hard problems: performance, product fit, and the seams where design meets engineering. I move quickly, communicate clearly, and ship. I’m looking to join a sharp team where ownership is real and results matter. If you want thoughtful execution with high standards and low noise, we should talk.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img
              src={profilePic}
              alt="Portrait of Tiago Soares"
              className="w-full max-w-sm aspect-[3/4] object-cover rounded-xl grayscale"
            />
          </div>
        </div>
      </section>

      {/* Connect */}
      <footer id="connect" className="px-6 py-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white/60 text-sm">Open to hard problems—let’s talk.</div>
          <div className="flex items-center gap-5 text-white/80">
            <a
              href="mailto:xtiagosoares@gmail.com"
              aria-label="Email"
              className="hover:text-white transition"
            >
              <Mail />
            </a>
            <a
              href="https://linkedin.com/in/tiagosoaresv"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition"
            >
              <Linkedin />
            </a>
            <a
              href="https://github.com/tiagosoaresv"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-white transition"
            >
              <Github />
            </a>

          </div>
        </div>
      </footer>
    </div>
  );
}
