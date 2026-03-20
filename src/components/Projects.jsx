import React, { useEffect } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  // Updated Observer Logic: This now finds ALL reveal elements in this section
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    // Target the title (reveal-scale) and all project elements
    const elements = document.querySelectorAll('#projects .reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projectList = [
    {
      category: "Group Project - Completed",
      title: "EventBuddy – Smart Event Planning & Vendor Marketplace",
      description: "EventBuddy is a MERN-based event management platform that allows users to create, manage, and book events, enhanced with an AI assistant for smarter user support.",
      image: "EventBuddy.png", 
      techStack: ["React.js with Tailwind CSS", "Node.js", "Express", "MongoDB"],
      liveLink: "#",
      githubLink: "https://github.com/Hasmoonn/EventBuddy"
    },
    {
      category: "Group Project - Completed",
      title: "InternQuest – Internship & Job Matcher System",
      description: "A sophisticated e-commerce solution focused on a seamless user experience and robust product management.",
      image: "Web.jpeg", 
      techStack: ["React.js", "Node.js", "Express", "MongoDB"],
      liveLink: "#",
      githubLink: "https://github.com/kaveenskn/InternQuest-web-Group2"
    },
    {
      category: "Individual Project - Ongoing",
      title: "Dula Cosmetics – E-commerce Website",
      description: "Building a secure full-stack e-commerce app with JWT auth, Google Login, and password reset using React, Node.js–Express, MongoDB, and Supabase for images and analytics.",
      image: "DulaCosmetics.png", 
      techStack: ["React.js with Tailwind CSS", "Node.js", "Express", "MongoDB"],
      liveLink: "https://cbc-frontend-three.vercel.app/",
      githubLink: "https://github.com/dwathsala/cbc-frontend"
    },
    {
      category: "Individual Project - Completed",
      title: "Client-Server Chat Application",
      description: "Real-time multi-client chat app using Python sockets and Tkinter, featuring GUI messaging, timestamps, and saved chat history.",
      image: "Client-Server.png", 
      techStack: ["Python", "Sockets", "Tkinter", "Threading"],
      liveLink: "#",
      githubLink: "https://github.com/dwathsala/Client-Server-Architecture"
    },
    {
      category: "Individual Project - Completed",
      title: "Coffee-Website",
      description: "A responsive coffee shop website UI built using HTML, CSS, and JavaScript with a modern and user-friendly design.",
      image: "Coffee-Web.png", 
      techStack: ["HTML", "CSS", "JavaScript"],
      liveLink: "http://dularidayananda.me/Coffee-Website/",
      githubLink: "https://github.com/dwathsala/Coffee-Website"
    }
  ];

  return (
    <section id="projects" className="py-12 px-6 md:px-16 lg:px-30 bg-slate-200 scroll-mt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section - Scale In Animation */}
        <div className="mb-16 text-center">
          <h2 className="reveal reveal-scale text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-3">
            Work <span className="text-blue-800">Portfolio</span>
          </h2>
          <div className="reveal reveal-up w-20 h-1.5 bg-blue-800 rounded-full mx-auto"></div>
        </div>

        {/* Project List */}
        <div className="space-y-12">
          {projectList.map((project, index) => (
            <div key={index} className="project-card-container relative group">

              {/* Main Project Card */}
              <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-lg border border-slate-100 relative z-10">
                
                {/* Header bar - Slides Up */}
                <div className="bg-gradient-to-r from-slate-900 to-blue-900 px-8 py-6 text-white reveal reveal-up">
                  <p className="text-sm font-bold tracking-[0.2em] text-blue-300 mb-1 uppercase">
                    {project.category}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold">{project.title}</h3>
                </div>

                {/* Content Split */}
                <div className="flex flex-col lg:flex-row p-8 lg:p-10 gap-12">
                  
                  {/* Left Side: Image - Slides from Left */}
                  <div className="lg:w-1/2 reveal reveal-left">
                    <div className="aspect-video w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                  </div>

                  {/* Right Side: Details - Slides from Right */}
                  <div className="lg:w-1/2 flex flex-col justify-between reveal reveal-right">
                    <div>
                      <h4 className="text-xl font-bold text-slate-800 mb-2">About This Project</h4>
                      <p className="text-slate-700 text-lg leading-relaxed mb-6">
                        {project.description}
                      </p>

                      <h4 className="text-lg font-bold text-slate-800 mb-4">Built With</h4>
                      
                      <div className="grid grid-cols-2 gap-3 mb-8">
                        {project.techStack.map((tech, i) => (
                          <div key={i} className="flex items-center gap-2 py-2 px-4 bg-slate-50 rounded-xl border border-slate-100">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                            <span className="font-semibold text-slate-700 text-sm">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Buttons */}
                    <div className="flex flex-wrap sm:flex-nowrap gap-4 pt-6 border-t border-slate-100">
                      <a 
                        href={project.githubLink} 
                        target='_blank' 
                        rel='noopener noreferrer'
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-white border-2 border-slate-300 text-slate-800 font-bold rounded-full hover:bg-slate-100 transition-all active:scale-95 text-center"
                      >
                        <Github size={18} /> View Code
                      </a>
                      
                      <a 
                        href={project.liveLink}
                        target='_blank' 
                        rel='noopener noreferrer'
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-slate-900 to-slate-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-blue-200 transition-all active:scale-95 text-center"
                      >
                        <ExternalLink size={18} /> Live Demo
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