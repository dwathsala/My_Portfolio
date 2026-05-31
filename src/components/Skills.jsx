import React, { useEffect, useState, useRef } from 'react';
import { Layout, Server, Database, BrainCircuit, CheckCircle } from 'lucide-react';

const WhatIDo = () => {
  const canvasRef = useRef(null);

  // --- SCROLL REVEAL INTERSECTION OBSERVER ---
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.reveal');
          elements.forEach(el => el.classList.add('active'));
        }
      });
    }, { threshold: 0.1 });

    const section = document.querySelector('#skills');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // --- LOGICAL NETWORK CANVAS ANIMATION (HERO ENGINE) ---
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

  const services = [
    {
      icon: <BrainCircuit size={22} />,
      accent: "blue",
      title: "Full-Stack Development",
      description: "Building responsive cross-platform architectures and production-ready components featuring clean layouts and meticulous end-to-end user requirement alignment."
    },
    {
      icon: <Layout size={22} />,
      accent: "emerald",
      title: "Frontend Engineering",
      description: "Crafting highly responsive user interfaces and modular layouts using modern client frameworks and utility styling engines."
    },
    {
      icon: <Server size={22} />,
      accent: "purple",
      title: "Backend Core",
      description: "Designing robust server architectures, building secure RESTful APIs, and implementing scalable enterprise-level microservices."
    },
    {
      icon: <Database size={22} />,
      accent: "amber",
      title: "Database Engineering",
      description: "Architecting relational schemas and non-relational configurations optimized for highly-performant data modeling and indexing."
    },
    {
      icon: <CheckCircle size={22} />,
      accent: "blue",
      title: "QA & Testing",
      description: "Validating systems through comprehensive manual cycles, edge-case analysis, and continuous API verification protocols."
    }
  ];

  return (
    <section 
      id="skills" 
      className="py-24 px-6 md:px-16 lg:px-24 bg-slate-50 overflow-hidden relative border-t border-slate-200/60 scroll-mt-8"
    >
      {/* INTERACTIVE DYNAMIC BACKGROUND CANVAS NETWORK */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-br from-slate-50 via-slate-50 to-blue-50/20"
      />
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* SECTION HEADER BLOCK */}
        <div className="text-center mb-16 reveal reveal-scale">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-slate-900">
            What <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">I Do</span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Engineered systems and architectural solutions tailored for reliable operation, clean styling structures, and optimal product quality.
          </p>
        </div>

        {/* FIVE-COLUMN / RESPONSIVE GRID CONFIGURATION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6 items-stretch">
          
          {services.map((service, index) => {
            const dynamicBadgeStyles = {
              blue: 'bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600',
              emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600',
              purple: 'bg-purple-50 text-purple-600 border-purple-100 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600',
              amber: 'bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600'
            }[service.accent];

            const borderHoverStyles = {
              blue: 'hover:border-blue-400/50 hover:shadow-blue-900/5',
              emerald: 'hover:border-emerald-400/50 hover:shadow-emerald-900/5',
              purple: 'hover:border-purple-400/50 hover:shadow-purple-900/5',
              amber: 'hover:border-amber-400/50 hover:shadow-amber-900/5'
            }[service.accent];

            return (
              <div 
                key={index} 
                className={`reveal reveal-up bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between group transition-all duration-300 ${borderHoverStyles} hover:shadow-xl hover:bg-white scale-[1.0] hover:scale-[1.02]`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div>
                  {/* ICON BLOCK CONFIGURATION */}
                  <div className="mb-6 flex">
                    <div className={`p-2.5 rounded-xl border transition-all duration-300 ${dynamicBadgeStyles}`}>
                      {service.icon}
                    </div>
                  </div>

                  {/* TYPOGRAPHY STRUCTURE */}
                  <h3 className="text-lg font-semibold mb-3 text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-[16px] font-medium leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                {/* INTERACTIVE BASE INDICATOR */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-slate-400">
                    Active Stack
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhatIDo;