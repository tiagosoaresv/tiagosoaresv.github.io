import React, { useEffect } from "react";
import projects from "../data/projects";

function findProject(slug) {
  return projects.find((p) => p.slug === slug);
}

export default function ProjectPage({ slug }) {
  const project = findProject(slug);
  useEffect(() => {
    // Ensure we land at the top when navigating into a project
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen w-full bg-black">
        <section className="px-6 py-16 md:py-20 max-w-6xl mx-auto">
          <div className="h-px w-24 bg-gold/60 mb-6" aria-hidden />
          <h1 className="font-playfair text-3xl md:text-4xl mb-2">Not found</h1>
          <p className="text-white/70 mb-6">The project you’re looking for doesn’t exist.</p>
          <a href="#/work" className="btn-outline">Back to Work</a>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-black">
      <section className="px-6 py-16 md:py-20 max-w-6xl mx-auto">
        <div className="h-px w-24 bg-gold/60 mb-6" aria-hidden />
        <div className="flex items-start justify-between">
          <div>
            <h1 className="font-playfair text-3xl md:text-4xl">{project.title}</h1>
            <p className="text-white/70 mt-2 max-w-2xl">{project.summary}</p>
          </div>
          <a href="#/work" className="text-white/70 hover:text-gold transition">Back</a>
        </div>

        {project.images?.[0] && (
          <div className="mt-6">
            <img
              src={project.images[0]}
              alt={`${project.title} – hero image`}
              className="w-full max-h-[28rem] object-cover rounded-xl"
              loading="lazy"
              decoding="async"
            />
          </div>
        )}

        {project.body && project.body.length > 0 && (
          <div className="mt-8 space-y-5 text-white/90 text-[1.05rem] md:text-lg leading-relaxed">
            {project.body.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
