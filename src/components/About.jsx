import React from 'react';
import { ExternalLink, Github, Linkedin, Mail } from 'lucide-react';

const About = () => {
  const skills = [
    { name: "JavaScript", color: "bg-yellow-50 text-yellow-700 border-yellow-200" },
    { name: "React.js", color: "bg-blue-50 text-blue-700 border-blue-200" },
    { name: "Node.js", color: "bg-green-50 text-green-700 border-green-200" },
    { name: "Express.js", color: "bg-red-50 text-red-700 border-red-200" },
    { name: "Python", color: "bg-orange-50 text-orange-700 border-orange-200" },
    { name: "JAVA", color: "bg-gray-50 text-gray-700 border-gray-200" },
    { name: "MongoDB", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
    { name: "SQL", color: "bg-purple-50 text-purple-700 border-purple-200" },
    { name: "Supabase", color: "bg-pink-50 text-pink-700 border-pink-200" },
    { name: "Tailwind CSS", color: "bg-sky-50 text-sky-700 border-sky-200" },
    { name: "Git & GitHub", color: "bg-slate-50 text-slate-700 border-slate-200" },
    { name: "Postman", color: "bg-yellow-50 text-yellow-700 border-yellow-200" },
  ];

  return (
    <section id="about" className="py-12 px-6 md:px-16 lg:px-30 bg-slate-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-3">
            About <span className="text-blue-800">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-blue-800 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Left Side: About Paragraph & Contact Component */}
          <div className="flex flex-col gap-8">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 flex-grow">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-800"></span>
                My Journey
              </h3>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  I am a dedicated <span className="text-slate-900 font-bold">Software Engineering Undergraduate</span> with a passion for creating impactful digital experiences. My approach blends technical logic with creative design to build applications that are as functional as they are beautiful.
                </p>
                <p>
                  I thrive in collaborative environments and love tackling complex challenges. Whether it's optimizing backend logic or perfecting a responsive UI, I am committed to delivering high-quality code.
                </p>
              </div>

              <div className="flex gap-4 mt-10">
                {/* Contact Me Button */}
                <button className="px-6 py-2  bg-slate-900 text-white font-semibold rounded-full hover:bg-blue-900 transition">
                  Contact Me
                </button>

                {/* View Projects Button */}
                <button className="px-6 py-2 border border-slate-900 text-slate-900 font-semibold rounded-full hover:bg-blue-200 transition">
                  My Projects
                </button>
              </div>
              
            </div>

               {/* "Connect with Me" Professional Component */}
            <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-xl ">
              <h3 className="text-xl font-bold mb-4">Let's Connect</h3>
              <p className="text-slate-300 mb-6">I am currently open to internship opportunities and collaborations.</p>
              <div className="flex flex-wrap gap-4">
                <a href="https://github.com/dwathsala" target='_blank' rel='noopener noreferrer' className="p-3 bg-white/10 rounded-xl hover:bg-blue-600 transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/dulari-dayananda/" target='_blank' rel='noopener noreferrer' className="p-3 bg-white/10 rounded-xl hover:bg-blue-600 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:dulariwathsala824@mail.com?subject=Portfolio Contact&body=Hello Dulari,%0A%0AI would like to connect with you." target='_blank' rel='noopener noreferrer' className="p-3 bg-white/10 rounded-xl hover:bg-blue-600 transition-colors">
                  <Mail size={20} />
                </a>
                <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-xl font-bold hover:bg-blue-700 transition-all ml-auto">
                  Hire Me <ExternalLink size={16} />
                </button>
              </div>
            </div>

            
          </div>

          {/* Right Side: Skills Grid */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-800"></span>
              Technical Stack
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className={`p-5 rounded-2xl border ${skill.color} flex items-center justify-between transition-all hover:shadow-md group`}
                >
                  <span className="font-bold">{skill.name}</span>
                  <div className="w-2 h-2 rounded-full bg-current opacity-40 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
            
            {/* Added Value: Professional Learning Note */}
            <div className="mt-5 p-4 bg-blue-100 rounded-2xl border border-blue-200 flex items-center justify-center">
              <p className="text-sm text-blue-800 font-medium">
                Currently expanding my knowledge in Full-Stack Development and Python.
              </p>
            </div> 
          </div>

        </div>
      </div>

      {/* Interests + Fun Stats Section */}
      <div className="mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
          {/* LEFT SIDE — FUN STATS */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center justify-center">
              Fun Stats
            </h3>
              
            <div className="space-y-6">
              
              <div className="flex items-center gap-4 p-5 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-700 rounded-2xl text-xl">
                  💻
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">3+ Projects</h4>
                  <p className="text-sm text-slate-500">Completed successfully</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-5 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                <div className="w-12 h-12 flex items-center justify-center bg-purple-100 text-purple-700 rounded-2xl text-xl">
                  ⭐
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">10+ Repositories</h4>
                  <p className="text-sm text-slate-500">Public GitHub projects</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-5 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                <div className="w-12 h-12 flex items-center justify-center bg-green-100 text-green-700 rounded-2xl text-xl">
                  🎯
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">2+ Years Learning</h4>
                  <p className="text-sm text-slate-500">Continuous learning journey</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-5 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                <div className="w-12 h-12 flex items-center justify-center bg-orange-100 text-orange-700 rounded-2xl text-xl">
                  🤝
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">IEEE Volunteer</h4>
                  <p className="text-sm text-slate-500">Active tech community member</p>
                </div>
              </div>
              
            </div>
          </div>
              
          {/* RIGHT SIDE — INTERESTS */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center justify-center">
              Interests
            </h3>
              
            <div className="space-y-6">
              
              <div className="flex items-center gap-4 p-5 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                <div className="w-12 h-12 flex items-center justify-center bg-purple-100 text-purple-700 rounded-2xl text-xl">
                  🤝
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Volunteering (IEEE)</h4>
                  <p className="text-sm text-slate-500">Contributing to tech community growth</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-5 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                <div className="w-12 h-12 flex items-center justify-center bg-green-100 text-green-700 rounded-2xl text-xl">
                  🚀
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Hackathons</h4>
                  <p className="text-sm text-slate-500">Building fast & creative solutions</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-5 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                <div className="w-12 h-12 flex items-center justify-center bg-orange-100 text-orange-700 rounded-2xl text-xl">
                  📚
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Reading Tech Blogs</h4>
                  <p className="text-sm text-slate-500">Staying updated with trends</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-5 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-700 rounded-2xl text-xl">
                  🎨
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">UI/UX Design</h4>
                  <p className="text-sm text-slate-500">Designing intuitive interfaces</p>
                </div>
              </div>
              
            </div>
          </div>
              
        </div>
      </div>

    </section>
  );
};

export default About;