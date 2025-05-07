import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import profilePic from "./assets/profile_picture.png";

export default function ResumeSite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-12">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <header className="text-center mb-16">
          <img
            src={profilePic}
            alt="Tiago Soares"
            className="w-36 h-36 mx-auto rounded-full border-4 border-burgundy-600 shadow-lg mb-6"
          />
          <h1 className="text-6xl font-extrabold text-white mb-4 leading-tight tracking-tight">
            Tiago Soares
          </h1>
          <p className="text-lg text-gray-300 mb-8">Software Engineering Student looking to build.</p>
          <div className="flex justify-center gap-8 mt-6 text-2xl text-burgundy-500">
            <a href="mailto:xtiagosoares@gmail.com" aria-label="Email">
              <Mail />
            </a>
            <a href="https://linkedin.com/in/tiagosoaresv" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin />
            </a>
            <a href="https://github.com/tiagosoaresv" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github />
            </a>
          </div>
        </header>

        {/* Mission Statement */}
        <section className="mb-16 px-8 text-center">
          <h2 className="text-4xl font-extrabold text-burgundy-600 mb-6">Mission</h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            My goal is to create the future, not just witness it. With expertise in Full Stack Development and AI, I craft scalable, transformative technologies that drive industries forward. Precision, vision, and purpose define my path.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-extrabold text-burgundy-600 mb-6">Core Skills</h2>
          <ul className="flex flex-wrap gap-8 justify-center text-lg text-gray-300">
            <li className="bg-burgundy-600 px-6 py-3 rounded-full shadow-md">Soon</li>

          </ul>
        </section>
        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-extrabold text-burgundy-600 mb-6">Education</h2>
          <div className="bg-gray-900 border-l-8 border-burgundy-600 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-burgundy-400">B.S. in Software Engineering</h3>
            <p className="text-lg text-gray-300">University of Minho</p>
          </div>
        </section>
      </div>
    </div>
  );
}
