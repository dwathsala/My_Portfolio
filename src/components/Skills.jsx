import React, { useEffect } from 'react';
import { Layout, Server, Database, BrainCircuit, CheckCircle} from 'lucide-react';

const WhatIDo = () => {
  // Intersection Observer to trigger the animation
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Find all revealable elements inside this section and activate them
          const elements = entry.target.querySelectorAll('.reveal');
          elements.forEach(el => el.classList.add('active'));
        }
      });
    }, { threshold: 0.1 });

    const section = document.querySelector('#skills');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <BrainCircuit size={40} className="text-blue-600" />,
      title: "MERN Stack Development",
      description: "Building full-stack web applications with the MERN stack, focusing on clean structure and practical solutions."
    },
    {
      icon: <Layout size={40} className="text-blue-600" />,
      title: "Frontend Development",
      description: "Building responsive, user-friendly interfaces using modern HTML, CSS, JavaScript, and frameworks like React."
    },
    {
      icon: <Server size={40} className="text-blue-600" />,
      title: "Backend Development",
      description: "Creating secure, robust, and scalable server-side logic, RESTful APIs, and managing database integration."
    },
    {
      icon: <Database size={40} className="text-blue-600" />,
      title: "Database Management",
      description: "Managing SQL and NoSQL databases to ensure efficient data storage, retrieval, and performance."
    },
    {
      icon: <CheckCircle size={40} className="text-blue-600" />,
      title: "Testing & QA",
      description: "Ensuring application reliability through unit testing, debugging, and quality assurance practices for stable and maintainable software."
    }
  ];

  return (
    <section id="skills" className="py-12 px-6 md:px-16 lg:px-30 bg-slate-900 text-white scroll-mt-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Title with Scale-in Animation */}
        <div className="text-center mb-10 md:mb-12 reveal reveal-scale">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 text-white leading-tight">
            What <span className="text-blue-600">I Do</span>
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-xl md:text-2xl text-slate-300 mt-6 max-w-3xl mx-auto font-medium">
            Highly motivated undergraduate student with a passion for modern digital solutions and clean code.
          </p>
        </div>

        {/* The Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6">
          
          {services.map((service, index) => (
            <div 
              key={index} 
              // Added 'reveal' and 'reveal-up' for the scroll effect
              className="reveal reveal-up bg-slate-800/60 p-4 rounded-[2rem] border border-slate-700 shadow-xl hover:shadow-2xl hover:bg-slate-800 transition-all duration-300 transform hover:-translate-y-2 group"
              // Staggered delay: each card appears 150ms after the previous one
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Icon Container */}
              <div className="relative mb-8 flex justify-center w-fit mx-auto">
                <div className="p-5 bg-slate-700/50 rounded-2xl relative z-10 border border-slate-600 transition-colors group-hover:bg-blue-900/30 group-hover:border-blue-700">
                  {service.icon}
                </div>
                {/* Decorative corner element */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-600/10 rounded-full blur-xl group-hover:bg-blue-600/30 transition-colors"></div>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-black mb-4 text-white text-center leading-tight">
                {service.title}
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed text-center font-medium">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatIDo;