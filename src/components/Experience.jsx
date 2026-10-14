import React, { useEffect, useRef } from 'react';
import { BriefcaseBusiness, ArrowRight, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.12 });

    const section = document.querySelector('#experience');
    if (section) {
      const revealItems = section.querySelectorAll('.reveal');
      revealItems.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const nodes = [];
    const nodeCount = Math.min(70, Math.floor((width * height) / 26000));
    const connectionDistance = 130;
    const mouse = { x: null, y: null, radius: 170 };

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.8 + 1.5,
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
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    const parent = canvas.parentElement;
    parent.addEventListener('mousemove', handleMouseMove);
    parent.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

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
            const forceX = (dx / dist) * force * 0.5;
            const forceY = (dy / dist) * force * 0.5;
            n.x += forceX;
            n.y += forceY;
          }
        }

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(30, 64, 175, 0.15)';
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n.x - n2.x;
          const dy = n.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.15;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      parent.removeEventListener('mousemove', handleMouseMove);
      parent.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const points = [
    'Validated modernized systems and checked functionality during migration work.',
    'Used Playwright for automated testing and repeatable validation of critical workflows.',
    'Worked with Playwright MCP and AI agents to improve QA efficiency and coverage.',
    'Performed manual testing to catch edge cases and release-level issues.'
  ];

  const tools = ['Playwright', 'Playwright MCP', 'AI Agents', 'Automation Testing', 'Manual Testing'];

  return (
    <section id="experience" className="py-24 px-6 md:px-16 lg:px-24 bg-slate-50 overflow-hidden relative border-t border-slate-200/60 scroll-mt-8">
      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(18px);
          transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-br from-slate-50 via-slate-50 to-blue-50/20" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="text-center mb-12 reveal">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
            Professional <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Journey</span>
          </h2>
        </div>

        <div className="reveal max-w-[960px] mx-auto rounded-[1.75rem] border border-slate-200 bg-white/90 backdrop-blur-md shadow-[0_20px_60px_rgba(15,23,42,0.06)] overflow-hidden">
          <div className="md:flex">
            <div className="md:w-[230px] bg-slate-900 text-white p-6 md:p-7">
              <div className="w-20 h-20 rounded-2xl overflow-hidden border border-white/10 bg-white/5 mb-5 shadow-md shadow-blue-900/20">
                <img src="/mitra.jpeg" alt="Mitra AI logo" className="w-full h-full object-cover" />
              </div>

              <p className="text-[10px] uppercase tracking-[0.22em] text-blue-200/80 mb-2">Role</p>
              <h3 className="text-xl font-black tracking-tight">QA Engineer Intern</h3>

              <div className="mt-5">
                <p className="text-[10px] uppercase tracking-[0.22em] text-blue-200/80 mb-2">Company</p>
                <p className="text-lg font-semibold">Mitra AI</p>
              </div>

              <div className="mt-5">
                <p className="text-[10px] uppercase tracking-[0.22em] text-blue-200/80 mb-2">Timeline</p>
                <p className="text-sm font-medium text-slate-200">August 2026 - Present</p>
              </div>
            </div>

            <div className="flex-1 p-6 md:p-8">
              <div className="mb-4">
                <p className="text-[10px] uppercase tracking-[0.22em] text-blue-600 font-bold mb-2">Project</p>
                <h4 className="text-2xl md:text-3xl font-black text-slate-900">NovoLingo AI Labs</h4>
              </div>

              <p className="text-slate-600 text-base leading-relaxed font-medium mb-6">
                I worked on <span className="font-bold text-slate-900">NovoLingo AI Labs</span>,
                a project focused on modernizing legacy systems and code into modern, scalable, and maintainable solutions.
                My responsibilities included validating functionality, supporting the migration process, and helping improve release confidence.
              </p>

              <div className="border-t border-slate-200 pt-5">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="text-blue-700" size={17} />
                  <h5 className="text-base font-bold text-slate-900">Responsibilities</h5>
                </div>

                <div className="space-y-3">
                  {points.map((point) => (
                    <div key={point} className="flex gap-3 text-slate-700">
                      <ArrowRight size={16} className="text-blue-700 mt-1 shrink-0" />
                      <p className="font-medium leading-relaxed text-sm md:text-[15px]">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 border-t border-slate-200 pt-5">
                <h5 className="text-base font-bold text-slate-900 mb-3">Tools used</h5>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <span key={tool} className="px-3 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-xs font-semibold text-slate-700">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
