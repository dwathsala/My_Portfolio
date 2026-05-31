import React, { useEffect, useState, useRef } from 'react';
import { ExternalLink, Github, Linkedin, Mail, Award, FileCheck, Users, BookOpen, ChevronRight, ArrowRight } from 'lucide-react';

const aboutStyles = `
  /* Reveal on viewport entry */
  .reveal-node {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  .reveal-node.active {
    opacity: 1;
    transform: translateY(0);
  }

  /* High-Performance Micro-Slide Animation */
  .artifact-fade-in {
    animation: slideEngage 0.4s cubic-bezier(0.215, 0.610, 0.355, 1) forwards;
  }

  @keyframes slideEngage {
    from { opacity: 0; transform: translateY(4px) scale(0.995); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }
`;

const About = () => {
  const canvasRef = useRef(null);
  const [activeTab, setActiveTab] = useState('achievements');
  const [slideIndexes, setSlideIndexes] = useState({
    achievements: 0,
    certifications: 0,
    leadership: 0,
    blogs: 0
  });

  // Viewport Observer for Entry Animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.reveal-node');
          elements.forEach((el) => el.classList.add('active'));
        }
      });
    }, { threshold: 0.02 });

    const section = document.querySelector('#about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // --- INTERACTIVE FLOATING MATH GRID AND DATA NODE WEB ENGINE ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = canvas.parentElement.scrollHeight);

    const nodes = [];
    const nodeCount = Math.min(90, Math.floor((width * height) / 22000));
    const maxDistance = 130; 
    const mouse = { x: null, y: null, radius: 160 };

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4, 
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 1.5,
      });
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = canvas.parentElement.scrollHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const gridSpacing = 50;
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.04)';
      ctx.lineWidth = 1;
      
      for (let x = 0; x < width; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = n.x - mouse.x;
          const dy = n.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            const forceX = (dx / dist) * force * 0.6;
            const forceY = (dy / dist) * force * 0.6;
            n.x += forceX;
            n.y += forceY;
          }
        }

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(30, 64, 175, 0.12)'; 
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n.x - n2.x;
          const dy = n.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.13;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`; 
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const technicalStack = [
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "C Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: ".NET Core", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-maintained.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MySQL Workbench", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
    { name: "Git & GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" }
  ];

  const dataArrays = {
    achievements: [
      {
        title: "INSL Hackathon 1st Runner-Up",
        subtitle: "Innovation Nation Sri Lanka — Provincial Level",
        desc: "Awarded as part of Team Hackstrom for delivering an innovative solution in a competitive environment.",
        image: "Hackstrom.jpeg",
        link: "https://www.linkedin.com/posts/dulari-dayananda_insl2025-innovationnationsrilanka-ieee-activity-7411653346681511936-2eIs?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE3p4ucBwWjt1DRld8Hu5Puwqx35JbPhgd4",
        tag: "Competitive",
        btnLabel: "Verify"
      }
    ],
    certifications: [
      {
        title: "Web Design for Beginners",
        subtitle: "University of Moratuwa",
        desc: "Successfully completed the Web Design for Beginners program conducted by the Department of Information Technology, University of Moratuwa, gaining foundational web design skills.",
        image: "WebDesign.png",
        link: "https://www.linkedin.com/posts/dulari-dayananda_webdesignforbeginnerse-certificate-activity-7292623930215841796-3_tP?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE3p4ucBwWjt1DRld8Hu5Puwqx35JbPhgd4",
        tag: "Web Design Certified",
        btnLabel: "View Credential"
      },
      {
        title: "Python for Beginners",
        subtitle: "University of Moratuwa",
        desc: "Successfully completed the Python for Beginners program conducted by the Department of Computer Science & Engineering, University of Moratuwa, gaining foundational programming skills in Python.",
        image: "Python.png",
        link: "https://www.linkedin.com/posts/dulari-dayananda_pythonforbeginnerse-certificate-activity-7304472113963286528-__ZP?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE3p4ucBwWjt1DRld8Hu5Puwqx35JbPhgd4",
        tag: "Python Certified",
        btnLabel: "View Credential"
      },
      {
        title: "Introduction to Software Quality Assurance",
        subtitle: "University of Moratuwa",
        desc: "Completed the Introduction to Software Quality Assurance program from the University of Moratuwa, gaining knowledge in software testing, defect management, risk-based testing, and QA best practices.",
        image: "QA.png",
        link: "https://www.linkedin.com/posts/dulari-dayananda_introductiontosoftwarequalityassurancee-certificate-activity-7367610884745064448-Lw8O?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE3p4ucBwWjt1DRld8Hu5Puwqx35JbPhgd4",
        tag: "QA Certified",
        btnLabel: "View Credential"
      },
      {
        title: "Computer Architecture",
        subtitle: "KodeKloud",
        desc: "Completed the Computer Architecture course on KodeKloud, gaining foundational knowledge of computer systems, hardware components, and system architecture concepts.",
        image: "ComArchi.png",
        link: "https://www.linkedin.com/posts/dulari-dayananda_learning-computerarchitecture-kodekloud-activity-7429416744487911424-b-Kb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE3p4ucBwWjt1DRld8Hu5Puwqx35JbPhgd4",
        tag: "Computer Architecture",
        btnLabel: "View Credential"
      },
      {
        title: "Python for Everyone",
        subtitle: "Udemy (Sinhala Medium)",
        desc: "Completed the Python for Everyone (Sinhala Medium) course on Udemy, building strong fundamentals in Python programming and problem-solving skills.",
        image: "PythonSinhala.png",
        link: "https://www.linkedin.com/posts/dulari-dayananda_certificate-activity-7452738127615508480-nyrw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE3p4ucBwWjt1DRld8Hu5Puwqx35JbPhgd4",
        tag: "Python Certified",
        btnLabel: "View Credential"
      },
      {
        title: "What Is Generative AI?",
        subtitle: "LinkedIn Learning",
        desc: "Completed the “What Is Generative AI?” course by Pinar Seyhan Demirdag, gaining foundational understanding of generative AI concepts and applications.",
        image: "GenAI.png",
        link: "https://www.linkedin.com/posts/dulari-dayananda_certificate-of-completion-activity-7310644585846689792-o3X_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE3p4ucBwWjt1DRld8Hu5Puwqx35JbPhgd4",
        tag: "AI Fundamentals",
        btnLabel: "View Credential"
      },
      {
        title: "Artificial Intelligence Foundations: Machine Learning",
        subtitle: "LinkedIn Learning",
        desc: "Completed “Artificial Intelligence Foundations: Machine Learning” by Kesha Williams, gaining foundational knowledge of machine learning concepts and AI model development.",
        image: "AIandML.png",
        link: "https://www.linkedin.com/posts/dulari-dayananda_certificate-of-completion-activity-7320890566160838697-Pu2h?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE3p4ucBwWjt1DRld8Hu5Puwqx35JbPhgd4",
        tag: "ML Fundamentals",
        btnLabel: "View Credential"
      }
    ],
    leadership: [
      {
        title: "IEEE Student Branch — Vice Secretary",
        subtitle: "Sabaragamuwa University of Sri Lanka",
        desc: "Serving as Vice Secretary of the IEEE Student Branch at Sabaragamuwa University of Sri Lanka (2024/25 term), contributing to student leadership and tech community initiatives.",
        image: "Secretary.jpeg",
        link: "https://www.linkedin.com/posts/dulari-dayananda_leadershipjourney-ieeestudentbranch-innovation-activity-7278007032903880704-aIqY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE3p4ucBwWjt1DRld8Hu5Puwqx35JbPhgd4",
        tag: "IEEE Executive",
        btnLabel: "Context"
      },
      {
        title: "Technical Volunteer",
        subtitle: "9th Interdisciplinary Conference of Management Researchers 2024",
        desc: "Volunteered at ICMR 2024 (9th Interdisciplinary Conference of Management Researchers), supporting event operations and collaborating with the organizing team at Sabaragamuwa University of Sri Lanka.",
        image: "ICMR.png",
        link: "https://www.linkedin.com/posts/dulari-dayananda_icmr2024-teamwork-eventparticipation-activity-7273594663909924864-WjJv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE3p4ucBwWjt1DRld8Hu5Puwqx35JbPhgd4",
        tag: "Volunteering",
        btnLabel: "Context"
      },
      {
        title: "Logistic Team Leader",
        subtitle: "TECHTALK v1.0 – Society of Computer Sciences, SUSL",
        desc: "Served as Logistic Team Leader for TECHTALK v1.0, coordinating event logistics and supporting smooth execution in collaboration with the organizing team and EchonLabs as Knowledge Partner.",
        image: "TechTalk.jpeg",
        link: "https://www.linkedin.com/posts/dulari-dayananda_techtalkv1-socs-foc-activity-7317409661886812161-Kn_M?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE3p4ucBwWjt1DRld8Hu5Puwqx35JbPhgd4",
        tag: "Volunteering",
        btnLabel: "Context"
      },
      {
        title: "Program Team Member",
        subtitle: "GeekZone v1.0 – IEEE Student Branch, SUSL",
        desc: "Served as a Program Team Member for GeekZone v1.0, contributing to the planning and execution of a successful tech event organized by the IEEE Student Branch of Sabaragamuwa University of Sri Lanka.",
        image: "GeekZone.jpeg",
        link: "https://www.linkedin.com/posts/dulari-dayananda_ieee-ieeesusl-susl-activity-7340946270435360768-VjsT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE3p4ucBwWjt1DRld8Hu5Puwqx35JbPhgd4",
        tag: "Volunteering",
        btnLabel: "Context"
      },
      {
        title: "Knowledge Team Member",
        subtitle: "HOPE 2.0 – Canva Design Mastery Workshop",
        desc: "Served as a Knowledge Team Member for HOPE 2.0, contributing to the Canva Design Mastery Workshop and collaborating with a creative and passionate organizing team.",
        image: "Hope.jpeg",
        link: "https://www.linkedin.com/posts/dulari-dayananda_ieee-wie-ieeewie-activity-7443139047390298114-5miI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE3p4ucBwWjt1DRld8Hu5Puwqx35JbPhgd4",
        tag: "Workshop Contribution",
        btnLabel: "Context"
      },
      {
        title: "Volunteer Contributor",
        subtitle: "Vidunena 2025 – ICT Seminar for A/L Students, Balangoda Ananda Maithreya Central College",
        desc: "Contributed as a volunteer for Vidunena 2025, an educational seminar organized for A/L ICT students, supporting the event team under the Society of Computer Sciences – Sabaragamuwa University of Sri Lanka.",
        image: "Vidunana.jpeg",
        link: "https://www.linkedin.com/posts/dulari-dayananda_vidunenav5-socs-susl-activity-7398025032930717696-mixY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE3p4ucBwWjt1DRld8Hu5Puwqx35JbPhgd4",
        tag: "Educational Outreach",
        btnLabel: "Context"
      },
      {
        title: "IEEE Day Participant",
        subtitle: "IEEE Day 2024 – IEEE Student Branch, Sabaragamuwa University of Sri Lanka",
        desc: "Participated in IEEE Day 2024 celebrations, engaging with fellow members and tech enthusiasts at the Faculty of Computing, Sabaragamuwa University of Sri Lanka.",
        image: "IEEEDAY.jpeg",
        link: "https://www.linkedin.com/posts/dulari-dayananda_ieeeday2024-susl-ieeestudentbranch-activity-7258706001623670784-kpt8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE3p4ucBwWjt1DRld8Hu5Puwqx35JbPhgd4",
        tag: "IEEE Events",
        btnLabel: "Context"
      }
    ],
    blogs: [
      {
        title: "Understanding Different API Styles in Modern Software Engineering",
        desc: "Understanding Different API Styles in Modern Software Engineering explores common API architectures such as REST, SOAP, GraphQL, and gRPC, highlighting their principles, differences, and use cases in building scalable and efficient software systems.",
        image: "api.webp",
        link: "https://medium.com/@dulariwathsala824/understanding-different-api-styles-in-modern-software-engineering-75f7eb9f7a43",
        tag: "API Design",
        btnLabel: "Read"
      },
      {
        title: "Implementing Secure Password Verification with bcrypt in Python: A Deep Dive into Cryptographic Hashing",
        desc: "**Implementing Secure Password Verification with bcrypt in Python** explains how bcrypt is used for secure password hashing and verification, highlighting key cryptographic principles and best practices for authentication systems.",
        image: "bcrypt.webp",
        link: "https://medium.com/@dulariwathsala824/implementing-secure-password-verification-with-bcrypt-in-python-a-deep-dive-into-cryptographic-858a85d24115",
        tag: "Cyber Security",
        btnLabel: "Read"
      },
      {
        title: "Understanding Quality Assurance (QA) and Software Testing",
        desc: "Understanding Quality Assurance (QA) and Software Testing provides an overview of QA principles and software testing processes, explaining how they help ensure software reliability, functionality, and overall quality.",
        image: "QA.webp",
        link: "https://medium.com/@dulariwathsala824/understanding-quality-assurance-qa-and-software-testing-41d7fd9b63d7",
        tag: "Quality Assurance",
        btnLabel: "Read"
      }

    ]
  };

  const menuTabs = [
    { id: 'achievements', label: 'Achievements', desc: 'Hackathons & Credentials', icon: Award, accent: 'blue' },
    { id: 'certifications', label: 'Certifications', desc: 'Continuous Upskilling Matrix', icon: FileCheck, accent: 'emerald' },
    { id: 'leadership', label: 'Leadership', desc: 'IEEE Student Branch Operations', icon: Users, accent: 'purple' },
    { id: 'blogs', label: 'Technical Blogs', desc: 'System Blueprints & Guides', icon: BookOpen, accent: 'amber' }
  ];

  const handleNextSlide = (category, e) => {
    e.stopPropagation(); // Avoid altering active side tab clicks
    setSlideIndexes((prev) => ({
      ...prev,
      [category]: (prev[category] + 1) % dataArrays[category].length
    }));
  };

  const activeSlide = dataArrays[activeTab][slideIndexes[activeTab]];
  const ActiveIcon = menuTabs.find(t => t.id === activeTab)?.icon || Award;

  return (
    <>
      <style>{aboutStyles}</style>

      <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-slate-50 border-b border-slate-200/60 scroll-mt-8 overflow-hidden relative">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-b from-slate-50 via-blue-50/5 to-slate-100"
        />

        <div className="max-w-[1440px] mx-auto relative z-10">
          
          <div className="mb-16 text-center reveal-node">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-slate-900">
            About <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Profile</span>
          </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* PROFILE CARD */}
            <div className="lg:col-span-5 reveal-node">
              <div className="bg-white/80 backdrop-blur-md border border-slate-200/80 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-400/50 transition-all duration-300 flex flex-col justify-between min-h-[460px]">
                <div>
                  <h3 className="text-sm uppercase tracking-wider font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                    Engineering Profile
                  </h3>
                  <div className="space-y-4 text-slate-600 font-medium text-base text-justify leading-relaxed font-sans">
                    <p>
                      I am a dedicated <span className="text-slate-900 font-bold">Software Engineering Undergraduate</span> at Sabaragamuwa University of Sri Lanka. I focus on full-stack web and mobile development alongside modern Quality Assurance practices to build stable, scalable, and intuitive software applications.
                    </p>
                    <p>
                      My experience encompasses building production-ready components using .NET Core and React Native. I prioritize clean layout structures, careful edge-case verification, and write maintainable code that satisfies thorough user requirements.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex gap-2">
                    <a href="https://github.com/dwathsala" target='_blank' rel='noopener noreferrer' className="p-2 bg-slate-50 border border-slate-200 rounded-xl hover:bg-slate-900 hover:border-slate-900 text-slate-600 hover:text-white transition-all duration-200 hover:-translate-y-0.5 shadow-sm">
                      <Github size={16} />
                    </a>
                    <a href="https://www.linkedin.com/in/dulari-dayananda/" target='_blank' rel='noopener noreferrer' className="p-2 bg-slate-50 border border-slate-200 rounded-xl hover:bg-blue-600 hover:border-blue-600 text-slate-600 hover:text-white transition-all duration-200 hover:-translate-y-0.5 shadow-sm">
                      <Linkedin size={16} />
                    </a>
                    <a href="mailto:dulariwathsala824@mail.com" className="p-2 bg-slate-50 border border-slate-200 rounded-xl hover:bg-blue-600 hover:border-blue-600 text-slate-600 hover:text-white transition-all duration-200 hover:-translate-y-0.5 shadow-sm">
                      <Mail size={16} />
                    </a>
                  </div>
                  
                  <a href='#contact'>
                    <button className="flex items-center gap-1.5 px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-200">
                      Initiate Context <ChevronRight size={14} />
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/* EXPANDED TECHNICAL STACK MATRIX */}
            <div className="lg:col-span-7 bg-white/80 backdrop-blur-md border border-slate-200/80 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-400/50 transition-all duration-300 reveal-node">
              <h3 className="text-sm uppercase tracking-wider font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                Verified Core Technical Stack
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {technicalStack.map((tech, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-2.5 p-2.5 bg-slate-50/60 rounded-xl border border-slate-200/60 hover:bg-white hover:border-blue-400 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 group cursor-default"
                  >
                    <img 
                      src={tech.icon} 
                      alt={`${tech.name} icon`} 
                      className="w-5 h-5 object-contain group-hover:scale-110 transition-transform duration-200" 
                    />
                    <span className="text-xs font-bold text-slate-700 group-hover:text-slate-900 transition-colors">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* MASTER-DETAIL SPLIT ARTIFACT FRAMEWORK */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch reveal-node">
            
            {/* LEFT SIDE DIRECTION SELECTOR COLUMN */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              {menuTabs.map((tab) => {
                const TabIcon = tab.icon;
                const isSelected = activeTab === tab.id;
                
                // Color style setups based on categorical identity
                const dynamicBadgeStyles = {
                  blue: isSelected ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-700 border-blue-100',
                  emerald: isSelected ? 'bg-emerald-600 text-white' : 'bg-emerald-50 text-emerald-700 border-emerald-100',
                  purple: isSelected ? 'bg-purple-600 text-white' : 'bg-purple-50 text-purple-700 border-purple-100',
                  amber: isSelected ? 'bg-amber-600 text-white' : 'bg-amber-50 text-amber-700 border-amber-100'
                }[tab.accent];

                return (
                  <div
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all duration-300 relative overflow-hidden group ${
                      isSelected 
                        ? 'bg-slate-800 border-slate-950 text-white shadow-md shadow-slate-900/10 scale-[1.01]' 
                        : 'bg-white/80 backdrop-blur-sm border-slate-200/80 text-slate-800 hover:bg-white hover:border-blue-400/50 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2.5 rounded-xl border transition-all duration-300 ${dynamicBadgeStyles}`}>
                        <TabIcon size={18} />
                      </div>
                      <div>
                        <h4 className={`text-sm font-normal tracking-tight transition-colors ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                          {tab.label}
                        </h4>
                        <p className={`text-[11px] font-medium mt-0.5 ${isSelected ? 'text-slate-400' : 'text-slate-400'}`}>
                          {tab.desc}
                        </p>
                      </div>
                    </div>
                    
                    <ChevronRight 
                      size={16} 
                      className={`transition-all duration-300 ${
                        isSelected 
                          ? 'text-blue-400 translate-x-0 opacity-100' 
                          : 'text-slate-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
                      }`} 
                    />
                  </div>
                );
              })}
            </div>

            {/* RIGHT SIDE INTERACTIVE DECK SLIDESHOW VIEWER */}
            <div className="lg:col-span-8 bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-2xl shadow-sm overflow-hidden flex flex-col justify-between group hover:border-blue-400/50 hover:shadow-xl transition-all duration-300 min-h-[280px]">
              
              <div className="p-8 flex-grow flex flex-col justify-between">
                
                {/* Dynamic Sliding Content Track */}
                <div className="artifact-fade-in flex flex-col md:flex-row gap-6 items-center" key={`${activeTab}-${slideIndexes[activeTab]}`}>
                  
                  {/* Left Side: Copywriting Content Stack */}
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`p-2 rounded-lg bg-slate-100 text-slate-800`}>
                          <ActiveIcon size={16} />
                        </div>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                          Verified Record {slideIndexes[activeTab] + 1} / {dataArrays[activeTab].length}
                        </span>
                      </div>
                      
                      <span className="text-[10px] uppercase font-bold tracking-widest text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-md">
                        {activeSlide.tag}
                      </span>
                    </div>

                    <div>
                      <h5 className="text-xl font-bold text-slate-900 mb-1">{activeSlide.title}</h5>
                      <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">{activeSlide.subtitle}</p>
                    </div>

                    <p className="text-slate-600 font-medium text-sm leading-relaxed text-justify line-clamp-4 md:line-clamp-none">
                      {activeSlide.desc}
                    </p>
                  </div>

                  {/* Right Side: Media Display Node */}
                  <div className="w-full md:w-72 h-44 bg-slate-900 rounded-xl overflow-hidden relative shadow-inner flex-shrink-0">
                    <img 
                      src={activeSlide.image} 
                      alt={activeSlide.title} 
                      className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
                  </div>

                </div>
              </div>

              {/* Action Blueprint Dock */}
              <div className="px-8 py-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between flex-shrink-0">
                <button 
                  onClick={(e) => handleNextSlide(activeTab, e)} 
                  className="text-xs font-extrabold uppercase tracking-wider text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-1 group/btn"
                >
                  Next Artifact <ArrowRight size={13} className="group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
                <a 
                  href={activeSlide.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {activeSlide.btnLabel} <ExternalLink size={13} />
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default About;