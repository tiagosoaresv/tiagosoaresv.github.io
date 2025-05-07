import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import profilePic from "./assets/profile_picture.png";

export default function ResumeSite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-830 to-gray-950 text-white p-12">
      <div className="max-w-5xl mx-auto">

        {/* Hero Section */}
        <header className="text-center mb-20">
          <head>
            <title>Tiago Soares</title>
          </head>
          <div className="bg-gray-700 bg-opacity-70 p-8 rounded-2xl shadow-2xl backdrop-blur-md inline-block">
            <img
              src={profilePic}
              alt="Tiago Soares"
              className="w-36 h-36 mx-auto rounded-full border-4 border-burgundy-600 shadow-md mb-6"
            />
            <h1 className="text-5xl font-bold tracking-tight mb-2">Tiago Soares</h1>
            <p className="text-lg text-gray-300">Software Engineering Student looking to build.</p>
            <div className="flex justify-center gap-6 mt-6 text-burgundy-400 text-2xl">
              <a href="mailto:xtiagosoares@gmail.com" aria-label="Email" className="hover:text-white transition">
                <Mail />
              </a>
              <a href="https://linkedin.com/in/tiagosoaresv" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-white transition">
                <Linkedin />
              </a>
              <a href="https://github.com/tiagosoaresv" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-white transition">
                <Github />
              </a>
            </div>
          </div>
        </header>

        {/* Mission Statement */}
        <section className="mb-12 text-center px-6">
          <h2 className="text-3xl font-semibold text-burgundy-500 mb-4">About me</h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            I'm a software engineering student at University of Minho, currently based in Braga, focused on full-stack development, AI integration, and product building. Seeking opportunities to grow, build, and innovate.
          </p>
        </section>

      </div>
    </div>
  );
}
