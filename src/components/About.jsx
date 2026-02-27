import React from 'react';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="px-6 md:px-16 lg:px-32 xl:px-48 py-24 bg-slate-50/50 border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left Column: The Big "Why" */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-[2px] bg-blue-600"></div>
            <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-slate-900">
            I am a driven software engineering student with a vision for <span className="text-blue-600">modern digital solutions.</span>
          </h2>
        </div>

        {/* Right Column: The Details */}
        <div className="flex flex-col justify-end space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-slate-800">
              Bridging the gap between design and functionality.
            </h3>
            <p className="text-slate-500 leading-relaxed text-lg md:text-xl">
              Currently an undergraduate, I focus on building responsive web applications that offer seamless user experiences. I believe that great software isn't just about code—it's about solving real-world problems elegantly.
            </p>
          </div>
          
          <p className="text-slate-500 leading-relaxed text-lg md:text-xl">
            My toolkit includes React, Tailwind CSS, and modern backend technologies. I am constantly learning and adapting to the latest industry standards to deliver high-quality, scalable products.
          </p>

          {/* Call to action link */}
          <button className="flex items-center gap-2 text-slate-900 font-bold hover:text-blue-600 transition-all group w-fit text-lg">
            View my technical skills 
            <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;