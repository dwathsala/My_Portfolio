import React, { useEffect } from 'react';
import { ExternalLink, Github, Linkedin, Mail } from 'lucide-react';

const About = () => {
  // Local observer for the About section
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.reveal');
          elements.forEach(el => el.classList.add('active'));
        }
      });
    }, { threshold: 0.1 });

    const section = document.querySelector('#about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "JavaScript", color: "bg-yellow-50 text-yellow-700 border-yellow-200" },
    { name: "React.js", color: "bg-blue-50 text-blue-700 border-blue-200" },
    { name: "Node.js", color: "bg-green-50 text-green-700 border-green-200" },
    { name: "Express.js", color: "bg-red-50 text-red-700 border-red-200" },
    { name: "Python", color: "bg-orange-50 text-orange-700 border-orange-200" },
    { name: "TypeScript", color: "bg-blue-50 text-blue-700 border-blue-200" },
    { name: "React Native", color: "bg-blue-50 text-blue-700 border-blue-200" },
    { name: "C#", color: "bg-purple-50 text-purple-700 border-purple-200" },
    { name: ".NET", color: "bg-yellow-50 text-yellow-700 border-yellow-200" },
    { name: "JAVA", color: "bg-gray-50 text-gray-700 border-gray-200" },
    { name: "C Language", color: "bg-sky-50 text-sky-700 border-sky-200" },
    { name: "MongoDB", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
    { name: "SQL", color: "bg-purple-50 text-purple-700 border-purple-200" },
    { name: "Supabase", color: "bg-pink-50 text-pink-700 border-pink-200" },
    { name: "PostgreSQL", color: "bg-red-50 text-red-700 border-red-200" },
    { name: "MySQL Workbench", color: "bg-green-50 text-green-700 border-green-200" },
    { name: "Tailwind CSS", color: "bg-sky-50 text-sky-700 border-sky-200" },
    { name: "Figma", color: "bg-orange-50 text-orange-700 border-orange-200" },
    { name: "Git & GitHub", color: "bg-slate-50 text-slate-700 border-slate-200" },
    { name: "VS Code", color: "bg-purple-50 text-purple-700 border-purple-200" },
    { name: "Postman", color: "bg-yellow-50 text-yellow-700 border-yellow-200" },
    { name: "JIRA", color: "bg-blue-50 text-blue-700 border-blue-200" },

  ];

  return (
    <section id="about" className="py-12 px-6 md:px-16 lg:px-30 bg-slate-200 scroll-mt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section - Scale In */}
        <div className="mb-10 text-center reveal reveal-scale">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-3">
            About <span className="text-blue-800">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-blue-800 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Left Side: About Paragraph & Contact Component - Slide from Left */}
          <div className="flex flex-col gap-8 reveal reveal-left">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 flex-grow">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-800"></span>
                My Journey
              </h3>
              <div className="w-full max-w-none space-y-5 text-slate-600 text-lg leading-relaxed text-justify">
                <p>
                  I am a dedicated <span className="text-slate-900 font-bold">Software Engineering Undergraduate</span> passionate about building impactful, user-centered digital solutions. I combine strong technical knowledge with thoughtful design to create applications that are efficient, scalable, and intuitive. I aim to deliver meaningful experiences through code while maintaining high standards of quality and performance.
                </p>
                <p>
                  I enjoy working in collaborative environments where I can share ideas, learn from others, and grow continuously. I am also self-motivated and always eager to explore new technologies and improve my skills. Whether optimizing backend systems or building responsive interfaces, I focus on writing clean, maintainable code and delivering meaningful solutions.
                </p>
              </div>

              <div className="flex gap-4 mt-10">
                <a href='#contact'>
                  <button className="px-6 py-2 bg-slate-900 text-white font-semibold rounded-full hover:bg-blue-900 transition">
                    Contact Me
                  </button>
                </a>
                <a href='#projects'>
                  <button className="px-6 py-2 border border-slate-900 text-slate-900 font-semibold rounded-full hover:bg-blue-200 transition">
                    My Projects
                  </button>
                </a>
              </div>
            </div>

            {/* Connect Card */}
            <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-xl">
              <h3 className="text-xl font-bold mb-4">Let's Connect</h3>
              <p className="text-slate-300 mb-6">I am currently open to internship opportunities and collaborations.</p>
              <div className="flex flex-nowrap gap-4">
                <a href="https://github.com/dwathsala" target='_blank' rel='noopener noreferrer' className="p-3 bg-white/10 rounded-xl hover:bg-blue-600 transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/dulari-dayananda/" target='_blank' rel='noopener noreferrer' className="p-3 bg-white/10 rounded-xl hover:bg-blue-600 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:dulariwathsala824@mail.com" target='_blank' rel='noopener noreferrer' className="p-3 bg-white/10 rounded-xl hover:bg-blue-600 transition-colors">
                  <Mail size={20} />
                </a>
                <a href='#contact' className="ml-auto">
                  <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-xl font-bold hover:bg-blue-700 transition-all">
                    Hire Me <ExternalLink size={16} />
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Skills Grid - Staggered Up */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-800"></span>
              Technical Stack
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className={`reveal reveal-up p-3 rounded-2xl border ${skill.color} flex items-center justify-between transition-all hover:shadow-md group`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <span className="font-bold">{skill.name}</span>
                  <div className="w-2 h-2 rounded-full bg-current opacity-40 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
            
            <div className="reveal reveal-up mt-5 p-3 bg-blue-100 rounded-2xl border border-blue-200 flex items-center justify-center" style={{ transitionDelay: '600ms' }}>
              <p className="text-sm text-blue-800 font-medium">
                Currently expanding my knowledge in .NET and React Native.
              </p>
            </div> 
          </div>

        </div>
      </div>

      {/* Interests + Fun Stats Section */}
      <div className="mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* STATS - Staggered Up */}
          <div className="reveal reveal-up">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center justify-center">Fun Stats</h3>
            <div className="space-y-3">
              {[
                { emoji: "💻", val: "3+ Projects", sub: "Completed successfully", col: "bg-blue-100 text-blue-700" },
                { emoji: "⭐", val: "10+ Repositories", sub: "Public GitHub projects", col: "bg-purple-100 text-purple-700" },
                { emoji: "🎯", val: "2+ Years Learning", sub: "Continuous learning journey", col: "bg-green-100 text-green-700" },
                { emoji: "🤝", val: "IEEE Volunteer", sub: "Former Vice Secretary at IEEE Student Branch of SUSL", col: "bg-orange-100 text-orange-700" }
              ].map((stat, i) => (
                <div key={i} className="reveal reveal-up flex items-center gap-4 p-5 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className={`w-12 h-12 flex items-center justify-center rounded-2xl text-xl ${stat.col}`}>{stat.emoji}</div>
                  <div>
                    <h4 className="font-semibold text-slate-800">{stat.val}</h4>
                    <p className="text-sm text-slate-500">{stat.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
              
          {/* INTERESTS - Staggered Up */}
          <div className="reveal reveal-up" style={{ transitionDelay: '200ms' }}>
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center justify-center">Interests</h3>
            <div className="space-y-3">
              {[
                { href: "https://drive.google.com/drive/folders/1hAQQpyGJi5uEbc6_85RC89H2C-L7DCWp?usp=sharing", icon: "📄", title: "Certifications", desc: "Showcasing my certified skills and continuous learning.", bg: "bg-pink-50 text-purple-700" },
                { href: "https://www.linkedin.com/posts/dulari-dayananda_insl2025-innovationnationsrilanka-ieee-activity-7411653346681511936-2eIs", icon: "🚀", title: "Hackathons", desc: "1st Runner-Up at INSL – Provincial Competition", bg: "bg-green-100 text-green-700" },
                { href: "https://medium.com/@dulariwathsala824", icon: "📚", title: "Tech Blogging", desc: "Exploring and sharing tech trends through blogs", bg: "bg-orange-100 text-orange-700" },
                { href: "https://www.linkedin.com/posts/dulari-dayananda_figma-uidesign-mobileappdesign-activity-7385689018589462528-iBs6", icon: "🎨", title: "UI/UX Design", desc: "Designing intuitive and user-friendly interfaces", bg: "bg-blue-100 text-blue-700" }
              ].map((item, i) => (
                <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="reveal reveal-up flex items-center gap-4 p-5 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all group" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className={`w-12 h-12 flex items-center justify-center rounded-2xl text-xl ${item.bg}`}>{item.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-800">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                  <ExternalLink size={20} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;