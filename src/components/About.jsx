import React from 'react';
import { ExternalLink, Github, Linkedin, Mail } from 'lucide-react';

const About = () => {
  const skills = [
    { name: "JavaScript", color: "bg-yellow-50 text-yellow-700 border-yellow-200" },
    { name: "React.js", color: "bg-blue-50 text-blue-700 border-blue-200" },
    { name: "Node.js", color: "bg-green-50 text-green-700 border-green-200" },
    { name: "MongoDB", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
    { name: "Tailwind CSS", color: "bg-sky-50 text-sky-700 border-sky-200" },
    { name: "Git & GitHub", color: "bg-slate-50 text-slate-700 border-slate-200" },
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-16 lg:px-32 bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About <span className="text-blue-800">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-blue-800 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Left Side: About Paragraph & Contact Component */}
          <div className="flex flex-col gap-8">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 flex-grow">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                My Journey
              </h3>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  I am a dedicated <span className="text-slate-900 font-bold">Software Engineering Undergraduate</span> with a passion for creating impactful digital experiences. My approach blends technical logic with creative design to build applications that are as functional as they are beautiful.
                </p>
                <p>
                  I thrive in collaborative environments and love tackling complex challenges. Whether it's optimizing backend logic or perfecting a responsive UI, I am committed to delivering high-quality code.
                </p>
              </div>
            </div>

            {/* "Connect with Me" Professional Component */}
            <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-xl">
              <h3 className="text-xl font-bold mb-4">Let's Connect</h3>
              <p className="text-slate-400 mb-6">I am currently open to internship opportunities and collaborations.</p>
              <div className="flex flex-wrap gap-4">
                <a href="https://github.com" className="p-3 bg-white/10 rounded-xl hover:bg-blue-600 transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com" className="p-3 bg-white/10 rounded-xl hover:bg-blue-600 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:dulariwathsala824@mail.com" className="p-3 bg-white/10 rounded-xl hover:bg-blue-600 transition-colors">
                  <Mail size={20} />
                </a>
                <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-xl font-bold hover:bg-blue-700 transition-all ml-auto">
                  Hire Me <ExternalLink size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Skills Grid */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              Technical Stack
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className={`p-5 rounded-2xl border ${skill.color} flex items-center justify-between transition-all hover:shadow-md group`}
                >
                  <span className="font-bold">{skill.name}</span>
                  <div className="w-2 h-2 rounded-full bg-current opacity-40 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
            
            {/* Added Value: Professional Learning Note */}
            <div className="mt-10 p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
              <p className="text-sm text-blue-800 font-medium">
                Currently exploring Cloud Computing and System Design to expand my full-stack capabilities.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;