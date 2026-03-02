import React from 'react';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const Projects = () => {
  const projectList = [
    {
      category: "Group Project - Completed",
      title: "EventBuddy – Smart Event Planning & Vendor Marketplace",
      description: "EventBuddy is a MERN-based event management platform that allows users to create, manage, and book events, enhanced with an AI assistant for smarter user support.",
      image: "EventBuddy.png", 
      techStack: ["React", "Node.js",  "Express","MongoDB"],
      liveLink: "#",
      githubLink: "https://github.com/Hasmoonn/EventBuddy"
    },
    {
      category: "Group Project - Completed",
      title: "InternQuest – Internship & Job Matcher System ",
      description: "A sophisticated e-commerce solution focused on a seamless user experience and robust product management.",
      image: "Web.jpeg", 
      techStack: ["React.js with Tailwind CSS", "Node.js",  "Express","MongoDB"],
      liveLink: "#",
      githubLink: "https://github.com/kaveenskn/InternQuest-web-Group2"
    },
    {
      category: "Individual Project - Ongoing",
      title: "Dula Cosmetics – E-commerce Website",
      description: "Building a secure full-stack e-commerce app with JWT auth, Google Login, and password reset using React, Node.js–Express, MongoDB, and Supabase for images and analytics.",
      image: "DulaCosmetics.png", 
      techStack: ["React.js with Tailwind CSS", "Node.js",  "Express","MongoDB"],
      liveLink: "https://cbc-frontend-three.vercel.app/",
      githubLink: "https://github.com/dwathsala/cbc-frontend"
    },
        {
      category: "Individual Project - Completed",
      title: "Coffe-Website",
      description: "A responsive coffee shop website UI built using HTML, CSS, and JavaScript with a modern and user-friendly design.",
      image: "Coffee-Web.png", 
      techStack: ["HTML", "CSS",  "JavaScript"],
      liveLink: "http://dularidayananda.me/Coffee-Website/",
      githubLink: "https://github.com/dwathsala/Coffee-Website"
    }
  ];

  return (
    <section id="projects" className="py-16 px-6 md:px-16 lg:px-30 bg-slate-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section - Matches About.jsx */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-3">
            Work <span className="text-blue-800">Portfolio</span>
          </h2>
          <div className="w-20 h-1.5 bg-blue-800 rounded-full mx-auto"></div>
        </div>

        {/* Project List */}
        <div className="space-y-8">
          {projectList.map((project) => (
            <div key={project.title} className="relative group">

              {/* Main Project Card */}
              <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-lg border border-slate-100 relative z-10">
                
                {/* Dark Header bar for Category & Title */}
                <div className="bg-gradient-to-r from-slate-900 to-blue-900 px-8 py-6 text-white">
                  <p className="text-sm font-bold tracking-[0.2em] text-blue-300 mb-1 uppercase">
                    {project.category}
                  </p>
                  <h3 className="text-3xl font-bold">{project.title}</h3>
                </div>

                {/* Content Split: Image Left, Details Right */}
                <div className="flex flex-col lg:flex-row p-8 lg:p-10 gap-12">
                  
                  {/* Left Side: Image (Large & Attractive) */}
                  <div className="lg:w-1/2 flex items-center justify-center rounded-xl overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-auto rounded-2xl object-contain hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Right Side: Details & Tech Stack */}
                  <div className="lg:w-1/2 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-slate-800 mb-2">About This Project</h4>
                      <p className="text-slate-700 text-lg leading-relaxed mb-6">
                        {project.description}
                      </p>

                      <h4 className="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">
                        Built With
                      </h4>
                      
                      {/* Tech Stack Grid (Matching image_a43f4c.jpg points) */}
                      <div className="grid grid-cols-2 gap-y-2 gap-x-4 mb-6">
                        {project.techStack.map((tech, i) => (
                          <div key={i} className="flex items-center gap-3 py-2 px-4 bg-slate-50 rounded-xl border border-slate-100">
                            <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                            <span className="font-semibold text-slate-700">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Buttons */}
                    <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100">
                                            <a 
                        href={project.githubLink} target='_blank' rel='noopener noreferrer'
                        className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-slate-400 text-slate-800 font-bold rounded-full hover:bg-slate-200 transition-all active:scale-95 text-center"
                      >
                        <Github size={20} /> View Code
                      </a>
                      
                      <a 
                        href={project.liveLink} target='_blank' rel='noopener noreferrer'
                        className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-slate-900 to-slate-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-blue-200 transition-all active:scale-95 text-center"
                      >
                        <ExternalLink size={20} /> Live Demo
                      </a>

                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;