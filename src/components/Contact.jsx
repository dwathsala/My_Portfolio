import React, { useEffect } from 'react';
import { Mail, Phone, Send, Github, Linkedin, ArrowUpCircle, ExternalLink } from 'lucide-react';

const ContactAndFooter = () => {
  const currentYear = new Date().getFullYear();

  // 1. Animation Observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.reveal');
          elements.forEach(el => el.classList.add('active'));
        }
      });
    }, { threshold: 0.1 });

    const section = document.querySelector('#contact');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative font-sans overflow-hidden bg-slate-50/50">
      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-20 px-6 md:px-16 lg:px-32 bg-white text-slate-900 scroll-mt-16 relative">
        {/* Animated Decorative Glows (Light Theme Variant) */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px] -z-0 animate-pulse duration-[6000ms]"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-400/10 rounded-full blur-[100px] -z-0 animate-pulse duration-[4000ms]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Text & Info */}
            <div className="reveal reveal-left">
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest">
                Available for Hire
              </div>
              <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] text-slate-900">
                Let’s build <br /> 
                <span className="text-blue-800 italic underline decoration-blue-600/20 underline-offset-8">something</span> great.
              </h2>
              <p className="text-slate-600 text-[16px] md:text-xl mb-12 max-w-md font-medium leading-relaxed">
                I'm currently looking for new opportunities. Whether you have a question or just want to connect, my inbox is always open.
              </p>

              <div className="space-y-6">
                {/* Email Item */}
                <div className="flex items-center gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-blue-800 group-hover:bg-blue-700 group-hover:text-white transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email Me</p>
                    <a href="mailto:dulariwathsala824@mail.com" className="text-[16px] font-bold text-slate-800 hover:text-blue-700 transition-colors">
                      dulariwathsala824@mail.com
                    </a>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="flex items-center gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Call Me</p>
                    <p className="text-[16px] font-bold text-slate-800">+94 71 065 9360</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="reveal reveal-right bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
              <form className="space-y-5" action="https://formspree.io/f/mnjgkypj" method="POST">
                <div className="space-y-4">
                  <input 
                    name="name"
                    type="text" 
                    placeholder="Your Full Name"
                    required
                    className="w-full bg-slate-50/80 border border-slate-200/80 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/5 transition-all text-slate-900 placeholder:text-slate-400 font-medium"
                  />
                  <input 
                    name="email"
                    type="email" 
                    placeholder="Your Email Address"
                    required
                    className="w-full bg-slate-50/80 border border-slate-200/80 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/5 transition-all text-slate-900 placeholder:text-slate-400 font-medium"
                  />
                  <textarea 
                    name="message"
                    rows="4"
                    placeholder="How can I help you today?"
                    required
                    className="w-full bg-slate-50/80 border border-slate-200/80 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/5 transition-all text-slate-900 placeholder:text-slate-400 font-medium resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-800 hover:bg-blue-700 text-white font-black py-5 rounded-2xl shadow-xl shadow-blue-600/10 flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 active:scale-[0.98]"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER SECTION --- */}
      <footer className="bg-slate-50 pt-20 pb-12 px-6 md:px-16 lg:px-32 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
            
            {/* Bio Column */}
            <div className="md:col-span-5 space-y-6">
              <h3 className="text-3xl font-bold text-slate-900 tracking-tighter">Dulari Dayananda</h3>
              <p className="text-slate-600 text-[16px] leading-relaxed max-w-sm font-medium">
                Software Engineer dedicated to building high-performance applications with a rigorous focus on quality assurance and system reliability.
              </p>
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/dulari-dayananda/" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center bg-white text-slate-400 rounded-xl hover:text-blue-600 hover:bg-blue-50 transition-all border border-slate-200/80 hover:border-blue-100 shadow-sm">
                  <Linkedin size={22} />
                </a>
                <a href="https://github.com/dwathsala" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center bg-white text-slate-400 rounded-xl hover:text-slate-900 hover:bg-slate-100 transition-all border border-slate-200/80 shadow-sm">
                  <Github size={22} />
                </a>
              </div>
            </div>

            {/* Navigation Column */}
            <div className="md:col-span-3">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-8">Navigation</h4>
              <ul className="space-y-4">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-slate-600 hover:text-blue-700 transition-colors font-bold text-lg flex items-center gap-2 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-800 scale-0 group-hover:scale-100 transition-transform"></div>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Info Column */}
            <div className="md:col-span-4">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-8">Get In Touch</h4>
              <div className="space-y-6">
                <div>
                  <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">My Location</span>
                  <span className="text-slate-900 font-bold text-lg">Sri Lanka</span>
                </div>
                <div>
                  <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Work Status</span>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
                    <span className="text-blue-800 font-bold text-lg uppercase tracking-wider">Open to opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright Bar */}
          <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-400 font-medium text-sm text-center md:text-left">
              © {currentYear} Dulari Dayananda. <span className="hidden sm:inline">Built with React & Tailwind.</span>
            </p>
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-3 text-slate-700 font-black text-xs uppercase tracking-widest hover:text-blue-800 transition-all"
            >
              Back to Top
              <ArrowUpCircle size={24} className="group-hover:-translate-y-1 transition-transform text-blue-800" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactAndFooter;