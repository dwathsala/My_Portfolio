import React from 'react';
import { Phone, Mail, Download } from 'lucide-react'; // Added Download icon

const Hero = () => {
  return (
    <section className="min-h-screen px-6 md:px-24 flex flex-col md:flex-row items-center justify-center md:justify-between py-12 md:py-20 bg-white overflow-hidden">
      
      {/* 1. Mobile Status Badge */}
      <div className="md:hidden order-first mb-8">
        <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-semibold bg-gray-200 px-3 py-1 rounded-full">
          Available For Work
        </span>
      </div>

      {/* 2. Image Section */}
      <div className="relative mb-12 md:mb-0 order-2 md:order-2">
        <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-[8px] md:border-[12px] border-white shadow-2xl relative z-10">
          <img 
            src="Me.png" 
            alt="Dulari Dayananda" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -top-4 -right-4 w-full h-full bg-slate-100 rounded-full -z-0"></div>
      </div>

      {/* 3. Text Content */}
      <div className="max-w-2xl text-center md:text-left order-3 md:order-1">
        <span className="hidden md:inline-block text-xs uppercase tracking-[0.3em] text-slate-500 font-semibold bg-gray-200 px-3 py-1 rounded-full mb-4">
          Available For Work
        </span>
        
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-2 tracking-tighter text-slate-900 leading-tight">
          Dulari <br className="hidden md:block" /> Dayananda
        </h1>
        <p className="text-lg md:text-xl text-slate-700 mb-8 md:mb-10 font-medium">
          Intern Software Engineer
        </p>
        
        <div className="flex flex-col items-center md:items-start space-y-4 text-base md:text-lg text-slate-600 font-medium mb-10">
          <div className="flex items-center gap-3">
            <Phone size={18} className="text-blue-500" />
            <p>+94 71 065 9360</p>
          </div>
          
          <div className="flex items-center gap-3">
            <Mail size={18} className="text-blue-500" />
            <p className="break-all">dulariwathsala824@mail.com</p>
          </div>
        </div>

        {/* --- NEW: Download CV Button --- */}
        <div className="flex justify-center md:justify-start">
          <a 
            href="/path-to-your-cv.pdf" 
            download 
            className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-200"
          >
            <Download size={20} />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;