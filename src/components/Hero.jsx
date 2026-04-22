import React from 'react';
import { Phone, Mail, Download } from 'lucide-react';

const heroStyles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(28px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.93);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(32px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .anim-badge-mobile {
    animation: fadeIn 0.6s ease both;
    animation-delay: 0.1s;
  }

  .anim-image-wrapper {
    animation: scaleIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
    animation-delay: 0.2s;
  }

  .anim-badge-desktop {
    animation: fadeInUp 0.6s ease both;
    animation-delay: 0.3s;
  }

  .anim-greeting {
    animation: fadeInUp 0.6s ease both;
    animation-delay: 0.4s;
  }

  .anim-name {
    animation: fadeInUp 0.7s ease both;
    animation-delay: 0.5s;
  }

  .anim-title {
    animation: fadeInUp 0.6s ease both;
    animation-delay: 0.6s;
  }

  .anim-contact {
    animation: fadeInUp 0.6s ease both;
    animation-delay: 0.75s;
  }

  .anim-cta {
    animation: fadeInUp 0.6s ease both;
    animation-delay: 0.9s;
  }

  .anim-decor-circle {
    animation: fadeIn 1s ease both;
    animation-delay: 0.3s;
  }

  /* Scroll indicator */
  @keyframes scrollFadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes scrollWheel {
    0%   { transform: translateY(0); opacity: 1; }
    60%  { transform: translateY(8px); opacity: 0.2; }
    100% { transform: translateY(0); opacity: 1; }
  }

  @keyframes scrollBounce {
    0%, 100% { transform: translateY(0); opacity: 0.5; }
    50%       { transform: translateY(5px); opacity: 1; }
  }

  .scroll-indicator {
    animation: scrollFadeIn 0.8s ease both;
    animation-delay: 1.4s;
  }

  .scroll-wheel-dot {
    animation: scrollWheel 1.8s ease-in-out infinite;
  }

  .scroll-label {
    animation: scrollBounce 1.8s ease-in-out infinite;
  }
`;

const Hero = () => {
  return (
    <>
      <style>{heroStyles}</style>

      <section
        id="home"
        className="min-h-screen px-6 sm:px-12 md:px-24 flex flex-col md:flex-row items-center justify-center py-16 md:py-0 bg-white overflow-hidden gap-40 relative"
      >
        {/* 1. Mobile Status Badge */}
        <div className="md:hidden order-1 mt-8 anim-badge-mobile">
          <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold bg-slate-100 border border-slate-200 px-4 py-2 rounded-full">
            Available For Work
          </span>
        </div>

        {/* 2. Image Section */}
        <div className="relative order-2 md:order-2 flex-shrink-0 anim-image-wrapper">
          <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[480px] lg:h-[480px] rounded-full overflow-hidden border-[10px] md:border-[15px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative z-10 transition-transform duration-500 hover:scale-[1.02]">
            <img
              src="Me.png"
              alt="Dulari Dayananda"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative background circle */}
          <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-full h-full bg-slate-100 rounded-full -z-0 anim-decor-circle"></div>
        </div>

        {/* 3. Text Content */}
        <div className="max-w-xl text-center md:text-left order-3 md:order-1 flex flex-col items-center md:items-start">
          <span className="hidden md:inline-block text-xs uppercase tracking-[0.3em] text-slate-500 font-bold bg-slate-100 border border-slate-200 px-4 py-1.5 rounded-full mb-6 mt-8 anim-badge-desktop">
            Available For Work
          </span>

          <p className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tighter text-slate-700 leading-[0.9] lg:leading-[1.1] anim-greeting">
            Hi, I'm
          </p>

          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black mb-4 tracking-tighter text-slate-900 leading-[0.9] lg:leading-[1.1] anim-name">
            Dulari <br className="hidden md:block" /> Dayananda
          </h1>

          <p className="text-lg md:text-2xl text-slate-600 mb-8 font-semibold tracking-tight anim-title">
            Intern Software Engineer
          </p>

          <div className="w-full space-y-4 text-base md:text-lg text-slate-500 font-medium mb-12 anim-contact">
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

          {/* Action Button */}
          <div className="w-full flex justify-center md:justify-start anim-cta">
            <a
              href="/Dulari_Dayananda-CV.pdf"
              download="Dulari_Dayananda-CV.pdf"
              className="group flex items-center gap-3 bg-slate-900 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-600 transition-all duration-300 shadow-2xl hover:shadow-blue-200 active:scale-95"
            >
              <Download size={22} className="group-hover:animate-bounce" />
              Download CV
            </a>
          </div>
        </div>

        {/* Scroll Down Indicator — fixed to bottom center of section */}
        <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
          <p className="scroll-label text-xs uppercase tracking-[0.25em] text-slate-400 font-semibold">
            Scroll to explore
          </p>
          {/* Mouse SVG */}
          <svg
            width="28"
            height="40"
            viewBox="0 0 28 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Mouse body */}
            <rect
              x="1.5"
              y="1.5"
              width="25"
              height="37"
              rx="12.5"
              stroke="#94a3b8"
              strokeWidth="2"
            />
            {/* Center divider line */}
            <line
              x1="14"
              y1="1.5"
              x2="14"
              y2="16"
              stroke="#94a3b8"
              strokeWidth="1.5"
            />
            {/* Scroll wheel dot */}
            <circle
              className="scroll-wheel-dot"
              cx="14"
              cy="11"
              r="3"
              fill="#64748b"
            />
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;