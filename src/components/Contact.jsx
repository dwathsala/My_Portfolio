import React from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare, ArrowUpCircle } from 'lucide-react';

const ContactAndFooter = () => {
  const currentYear = new Date().getFullYear();

  // Smooth scroll function for the 'Back to Top' feel
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative font-sans">
      {/* --- CONTACT SECTION (Dark Theme) --- */}
      <section id="contact" className="py-12 px-6 md:px-16 lg:px-32 bg-slate-900 text-white scroll-mt-16 relative overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-0"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[100px] -z-0"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Text & Info */}
            <div>
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest">
                Available for Hire
              </div>
              <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1]">
                Let’s build <br /> 
                <span className="text-blue-600 italic">something</span> great.
              </h2>
              <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-md font-medium leading-relaxed">
                I'm currently looking for new opportunities. Whether you have a question or just want to connect, my inbox is always open.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email</p>
                    <a href="mailto:dulariwathsala824@mail.com" className="text-lg font-bold hover:text-blue-500 transition-colors">
                      dulariwathsala824@mail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Phone</p>
                    <p className="text-lg font-bold">+94 71 065 9360</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form Card */}
            <div className="bg-slate-800/40 backdrop-blur-xl p-8 md:p-12 rounded-[3rem] border border-slate-700/50 shadow-2xl">
              <form className="space-y-6">
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Your Full Name"
                    required
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-2xl px-6 py-4 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 transition-all text-white placeholder:text-slate-600 font-medium"
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email Address"
                    required
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-2xl px-6 py-4 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 transition-all text-white placeholder:text-slate-600 font-medium"
                  />
                  <textarea 
                    rows="4"
                    placeholder="How can I help you today?"
                    required
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-2xl px-6 py-4 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 transition-all text-white placeholder:text-slate-600 font-medium resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-5 rounded-2xl shadow-xl shadow-blue-900/40 flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 active:scale-[0.98]"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER SECTION (Light Theme) --- */}
      <footer className="bg-white pt-10 pb-12 px-6 md:px-16 lg:px-32 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
            
            {/* Column 1: Bio (Matches image_27debf.jpg) */}
            <div className="md:col-span-5 space-y-6">
              <h3 className="text-3xl font-bold text-slate-900 tracking-tighter">Dulari Dayananda</h3>
              <p className="text-slate-700 text-lg leading-relaxed max-w-sm font-medium">
                Full-Stack Engineer passionate about designing and developing reliable, efficient software systems.
              </p>
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/dulari-dayananda/" className="w-12 h-12 flex items-center justify-center bg-slate-100 text-slate-500 rounded-xl hover:text-blue-600 hover:bg-blue-50 transition-all border border-transparent hover:border-blue-100">
                  <Linkedin size={30} />
                </a>
                <a href="https://github.com/dwathsala" className="w-12 h-12 flex items-center justify-center bg-slate-100 text-slate-500 rounded-xl hover:text-slate-900 hover:bg-slate-100 transition-all border border-transparent hover:border-slate-200">
                  <Github size={30} />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="md:col-span-3">
              <h4 className="text-lg font-bold underline uppercase tracking-[0.2em] text-slate-900 mb-6">Navigation</h4>
              <ul className="space-y-3">
                {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-slate-700 hover:text-blue-600 transition-colors font-bold text-lg">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact Summary */}
            <div className="md:col-span-4">
              <h4 className="text-lg font-bold underline uppercase tracking-[0.2em] text-slate-900 mb-6">Contact Information</h4>
              <ul className="space-y-3">
                <li className="group">
                  <span className="block text-m font-bold text-slate-600 uppercase tracking-widest mb-1">Email</span>
                  <a href="mailto:dulariwathsala824@mail.com" className="text-slate-900 font-bold hover:text-blue-600 transition-colors decoration-blue-500/20 underline-offset-4">
                    dulariwathsala824@mail.com
                  </a>
                </li>
                <li>
                  <span className="block text-m font-bold text-slate-600 uppercase tracking-widest mb-1 mt-6">Location</span>
                  <span className="text-slate-900 font-bold">Sri Lanka</span>
                </li>
                <li className="flex items-center gap-2 mt-8">
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-blue-600 font-bold text-lg uppercase tracking-wider">Open to opportunities</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright Bar */}
          <div className="pt-2 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-400 font-bold text-m">
              © {currentYear} Dulari. All rights reserved.
            </p>
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-slate-900 font-black text-sm uppercase tracking-widest hover:text-blue-600 transition-all"
            >
              Back to Top
              <ArrowUpCircle size={20} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactAndFooter;