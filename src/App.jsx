import React, { useState } from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import profilePic from "./assets/profile_picture.png";

export default function ResumeSite() {
  const menuItems = ["Projects", "Past Projects", "Goals & Connections"];
  const [selected, setSelected] = useState("Projects");

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-830 to-gray-950 text-white p-12">
      <div className="max-w-5xl mx-auto">

        {/* Hero Section */}
        <header className="text-center mb-20">
          <div className="bg-gray-700 bg-opacity-70 p-8 rounded-2xl shadow-2xl backdrop-blur-md inline-block">
            <img
              src={profilePic}
              alt="Tiago Soares"
              className="w-36 h-36 mx-auto rounded-full border-4 border-burgundy-600 shadow-md mb-6"
            />
            <h1 className="text-5xl font-bold tracking-tight mb-2">tiago soares</h1>
            <p className="text-lg text-gray-300">software engineering student building.</p>
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
          <h2 className="text-3xl font-semibold text-burgundy-500 mb-4">about me</h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            i'm a software engineering student at university of minho, currently based in braga,
            focused on full-stack development, AI integration, and product building. seeking
            opportunities to grow, build, and innovate.
          </p>
        </section>

        {/* Menu Options */}
        <div className="space-y-6 text-center mb-16">
          {menuItems.map((item) => (
            <div
              key={item}
              onClick={() => setSelected(item)}
              className={`cursor-pointer transition-all duration-300 ease-in-out ${
                selected === item
                  ? "text-2xl font-bold text-white"
                  : "text-lg text-gray-500 hover:text-gray-300"
              }`}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Dynamic Content */}
        <div className="w-full max-w-3xl mx-auto">
          {selected === "Projects" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">soon</h2>
              <div className="bg-[#1e1e1e] p-6 rounded-xl shadow-md border border-gray-700">
                <h3 className="font-semibold text-white">soon</h3>
                <p className="text-sm text-gray-400 mt-1">
                Soon
                </p>
              </div>
              <div className="bg-[#1e1e1e] p-6 rounded-xl shadow-md border border-gray-700">
                <h3 className="font-semibold text-white">soon</h3>
                <p className="text-sm text-gray-400 mt-1">
                soon                
                </p>
              </div>
            </div>
          )}

          {selected === "Past Projects" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">past projects</h2>
              <div className="bg-[#1e1e1e] p-6 rounded-xl shadow-md border border-gray-700">
                <h3 className="font-semibold text-white">soon</h3>
                <p className="text-sm text-gray-400 mt-1">
                  Soon
                </p>
              </div>
            </div>
          )}

          {selected === "Goals & Connections" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">soon</h2>
              <p className="text-sm text-gray-300">
              Soon              
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
