import React, { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const canvasRef = useRef(null);

  // --- SCROLL REVEAL INTERSECTION OBSERVER ---
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('#projects .reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // --- LOGICAL NETWORK CANVAS ANIMATION (EXACTLY MATCHED TO WHAT I DO) ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const nodes = [];
    const nodeCount = Math.min(60, Math.floor((width * height) / 25000));
    const connectionDistance = 130; 
    const mouse = { x: null, y: null, radius: 160 };

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35, 
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 2 + 1.5,
      });
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    const parentElement = canvas.parentElement;
    parentElement.addEventListener('mousemove', handleMouseMove);
    parentElement.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = n.x - mouse.x;
          const dy = n.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            const forceX = (dx / dist) * force * 0.5;
            const forceY = (dy / dist) * force * 0.5;
            n.x += forceX;
            n.y += forceY;
          }
        }

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(30, 64, 175, 0.15)'; 
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n.x - n2.x;
          const dy = n.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.15;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`; 
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      parentElement.removeEventListener('mousemove', handleMouseMove);
      parentElement.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const projectList = [
    {
      category: "Group Project - Ongoing",
      title: "IAIS – Integrated Academic Information System",
      description: "Developing a robust full-stack Academic Information System with role-based authentication using .NET Web API, MySQL, and React / React Native for web and mobile platforms.",
      image: "IAIS.png", 
      techStack: [".NET Web API", "MySQL", "React Native", "React.js"],
      liveLink: "#",
      githubLink: "https://github.com/Integrated-Academic-Information-System"
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
    <section id="projects" className="py-24 px-6 md:px-16 lg:px-24 bg-slate-50 overflow-hidden relative border-t border-slate-200/60 scroll-mt-8">
      
      {/* INTERACTIVE DYNAMIC BACKGROUND CANVAS NETWORK */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-br from-slate-50 via-slate-50 to-blue-50/20"
      />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Header Section - Scale In Animation */}
        <div className="mb-10 text-center reveal reveal-scale">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-slate-900">
            Work <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            A comprehensive look into my full-stack applications, architectures, and testing environments.
          </p>
        </div>

        {/* Project List */}
        <div className="space-y-16">
          {projectList.map((project, index) => (
            <div key={index} className="project-card-container relative group">

              {/* Main Project Card */}
              <div className="bg-white/90 backdrop-blur-md rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 hover:border-blue-400/30 group-hover:shadow-xl transition-all duration-300 relative z-10">
                
                {/* Header bar - Slides Up */}
                <div className="bg-slate-200 px-8 py-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 reveal reveal-up">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-blue-600 font-bold bg-blue-50 border border-blue-100 px-3 py-1 rounded-full shadow-sm">
                      {project.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight mt-3">{project.title}</h3>
                  </div>
                </div>

                {/* Content Split */}
                <div className="flex flex-col lg:flex-row p-8 lg:p-10 gap-10 lg:gap-14">
                  
                  {/* Left Side: Image - Slides from Left */}
                  <div className="lg:w-1/2 reveal reveal-left">
                    <div className="aspect-video w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/60 shadow-sm relative group/img">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover/img:scale-[1.03] transition-transform duration-500 ease-out"
                      />
                    </div>
                  </div>

                  {/* Right Side: Details - Slides from Right */}
                  <div className="lg:w-1/2 flex flex-col justify-between reveal reveal-right">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-slate-600 mb-3">Project Architecture</h4>
                      <p className="text-slate-500 text-[16px] leading-relaxed font-medium mb-6">
                        {project.description}
                      </p>

                      <h4 className="text-sm font-bold uppercase tracking-wider text-slate-600 mb-3">Tech Infrastructure</h4>
                      
                      <div className="grid grid-cols-2 gap-3 mb-8">
                        {project.techStack.map((tech, i) => (
                          <div key={i} className="flex items-center gap-2.5 py-2.5 px-4 bg-slate-50/50 rounded-xl border border-slate-100 transition-colors duration-200 hover:bg-white hover:border-slate-200">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                            <span className="font-semibold text-slate-500 text-[15px]">{tech}</span>
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
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-slate-200 text-slate-700 font-semibold rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95 text-sm text-center shadow-sm"
                      >
                        <img src="https://unpkg.com/simple-icons@v13/icons/github.svg" alt="GitHub" className="w-4 h-4 opacity-70" /> Source Code
                      </a>
                      
                      <a 
                        href={project.liveLink}
                        target='_blank' 
                        rel='noopener noreferrer'
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 text-white font-semibold rounded-full hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-900/10 transition-all active:scale-95 text-sm text-center"
                      >
                        <ExternalLink size={15} /> Deployment Link
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