import React from 'react';
import { Phone, Mail, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen px-6 sm:px-12 md:px-24 flex flex-col md:flex-row items-center justify-center py-16 md:py-0 bg-white overflow-hidden gap-12 ">
      
      {/* 1. Mobile Status Badge - Refined padding and font */}
      <div className="md:hidden order-1 mt-8">
        <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold bg-slate-100 border border-slate-200 px-4 py-2 rounded-full">
          Available For Work
        </span>
      </div>

      {/* 2. Image Section - Responsive sizing and shadow */}
      <div className="relative order-2 md:order-2 flex-shrink-0">
        <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[480px] lg:h-[480px] rounded-full overflow-hidden border-[10px] md:border-[15px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative z-10 transition-transform duration-500 hover:scale-[1.02]">
          <img 
            src="Me.png" 
            alt="Dulari Dayananda" 
            className="w-full h-full object-cover"
          />
        </div>
        {/* Decorative background circle - scaled for better fit */}
        <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-full h-full bg-slate-100 rounded-full -z-0"></div>
      </div>

      {/* 3. Text Content - Improved hierarchy and alignment */}
      <div className="max-w-xl text-center md:text-left order-3 md:order-1 flex flex-col items-center md:items-start">
        <span className="hidden md:inline-block text-xs uppercase tracking-[0.3em] text-slate-500 font-bold bg-slate-100 border border-slate-200 px-4 py-1.5 rounded-full mb-6 mt-8">
          Available For Work
        </span>

        <p className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tighter text-slate-700 leading-[0.9] lg:leading-[1.1]">
          Hi, I'm
        </p>
        
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black mb-4 tracking-tighter text-slate-900 leading-[0.9] lg:leading-[1.1]">
          Dulari <br className="hidden md:block" /> Dayananda
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-600 mb-8 font-semibold tracking-tight">
          Intern Software Engineer
        </p>
        
        <div className="w-full space-y-4 text-base md:text-lg text-slate-500 font-medium mb-12">
          <div className="flex items-center justify-center md:justify-start gap-4 transition-colors hover:text-blue-600">
            <Phone size={20} className="text-blue-500" />
            <a href="tel:+94710659360">+94 71 065 9360</a>
          </div>
          
          <div className="flex items-center justify-center md:justify-start gap-4 transition-colors hover:text-blue-600">
            <Mail size={20} className="text-blue-500" />
            <a href="mailto:dulariwathsala824@mail.com" className="break-all font-sans">
              dulariwathsala824@mail.com
            </a>
          </div>
        </div>

        {/* Action Button - Enhanced shadow and sizing */}
        <div className="w-full flex justify-center md:justify-start">
          <a 
            href="/Dulari_Dayananda-CV.pdf"
            download = "Dulari_Dayananda-CV.pdf"
            className="group flex items-center gap-3 bg-slate-900 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-600 transition-all duration-300 shadow-2xl hover:shadow-blue-200 active:scale-95"
          >
            <Download size={22} className="group-hover:animate-bounce" />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;