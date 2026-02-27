import React from 'react';
import { Layout, Server, Database, BrainCircuit } from 'lucide-react';

const WhatIDo = () => {
  // 1. Defining skill categories with descriptions and icons from lucide-react
  const services = [
    {
      icon: <BrainCircuit size={40} className="text-blue-600" />,
      title: "MERN Stack Development",
      description: "Full-stack development expertise using MongoDB, Express.js, React.js, and Node.js to build dynamic web applications."
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
      description: "Designing, implementing, and maintaining efficient SQL and NoSQL database solutions for optimal data performance."
    }
  ];

  return (
    // 2. Section container using slate-900 background for a premium contrast look
    <section id="skills" className="py-10 px-6 md:px-16 lg:px-32 xl:px-48 bg-slate-900 text-white scroll-mt-16">
      <div className="max-w-[1400px] mx-auto">
        
        {/* 3. Section Title - Uses the bold style from your portfolio reference */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-3 text-white leading-tight">
            What <span className="text-blue-600">I Do</span>
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-xl md:text-2xl text-slate-300 mt-6 max-w-3xl mx-auto font-medium">
            Highly motivated undergraduate student with a passion for modern digital solutions and clean code.
          </p>
        </div>

        {/* 4. The Grid Layout - Controls responsive behavior (1 col mobile, 2 tablet, 4 desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          
          {/* 5. Mapping over services to generate attractive cards */}
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-slate-800/60 p-4 rounded-[2rem] border border-slate-700 shadow-xl hover:shadow-2xl hover:bg-slate-800 transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Icon Container with the distinctive corner element seen in references */}
              <div className="relative mb-8 flex justify-center w-fit mx-auto">
                <div className="p-5 bg-slate-700/50 rounded-2xl relative z-10 border border-slate-600 transition-colors group-hover:bg-blue-900/30 group-hover:border-blue-700">
                  {service.icon}
                </div>
                {/* 6. Decorative corner element */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-600/10 rounded-full blur-xl group-hover:bg-blue-600/30 transition-colors"></div>
              </div>

              {/* Title & Description with improved hierarchy */}
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