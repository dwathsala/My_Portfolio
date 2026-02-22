import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen px-8 md:px-24 flex flex-col md:flex-row items-center justify-between py-20 bg-white">
      <div className="max-w-2xl">
        <span className="text-s uppercase tracking-[0.3em] text-slate-500 font-semibold">
          Web Developer
        </span>
        <h1 className="text-7xl md:text-8xl font-bold mt-4 mb-2 tracking-tighter text-slate-900 py-2">
          Dulari Dayananda
        </h1>
        <p className="text-xl text-slate-600 mb-10">Software Engineering Undegraduate</p>
        
        <div className="space-y-3 text-lg text-slate-500 font-medium">
          <p>+94 71 065 9360</p>
          <p>dulariwathsala824@mail.com</p>
        </div>
      </div>
      
      <div className="relative mt-16 md:mt-0">
        {/* The Image Circle */}
        <div className="w-72 h-72 md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-[12px] border-white shadow-2xl relative z-10">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
            alt="Alex James" 
            className="w-full h-full object-cover"
          />
        </div>
        {/* The Decorative Background Circle */}
        <div className="absolute -top-6 -right-6 w-full h-full bg-slate-100 rounded-full -z-0"></div>
      </div>
    </section>
  );
};

export default Hero;