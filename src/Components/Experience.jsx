import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
      {
        role: "Full Stack Developer Intern",
        company: "Mentisera",
        location: "Lahore, Pakistan",
        period: "2025 - 2026",
        description: "Developed and maintained the organization’s website, improving usability and accessibility. Managed updates and deployment to ensure smooth performance and support digital outreach",
        skills: ["Mongo DB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "Bootstrap", "JavaScript", "HTML/CSS"]
      },
      {
      role: "Web Developer & Manager",
      company: "Ruffles Animal Welfare Registry",
      location: "Lahore, Pakistan",
      period: "2025 - 2025",
      description: "Developed and maintained the organization’s website, improving usability and accessibility. Managed updates and deployment to ensure smooth performance and support digital outreach",
      skills: ["React.js", "Bootstrap", "JavaScript", "HTML/CSS"]
    },

  ];

  return (
    <section id="experience" className="bg-[#0a0a0c] py-16 md:py-24 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-16 text-center md:text-left">
          <p className="text-purple-600 font-semibold tracking-widest text-sm mb-4 uppercase">
            Career Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Work <span className="text-purple-500">Experience</span>
          </h2>
          <div className="h-1 w-20 bg-purple-600 mt-4 rounded-full mx-auto md:mx-0"></div>
        </div>

        <div className="relative border-l-2 border-gray-800 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 group">
              
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#0a0a0c] border-2 border-purple-500 rounded-full group-hover:scale-125 group-hover:bg-purple-500 transition-all duration-300 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>

              {/* Experience Card */}
              <div className="bg-[#111113] border border-gray-800 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-purple-500/30 hover:bg-[#141417]">
                
                {/* Role and Date */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {exp.role}
                  </h3>
                  <span className="flex items-center gap-2 text-sm font-medium text-purple-500 bg-purple-500/10 px-3 py-1 rounded-full w-fit">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                </div>

                <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-6">
                  <span className="flex items-center gap-1.5">
                    <Briefcase size={16} className="text-gray-500" />
                    {exp.company}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={16} className="text-gray-500" />
                    {exp.location}
                  </span>
                </div>

                <p className="text-gray-400 leading-relaxed mb-6 text-base">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="flex items-center gap-1 text-[11px] font-bold text-gray-300 bg-[#1a1a1d] border border-gray-700 px-3 py-1 rounded-md uppercase tracking-wider"
                    >
                      <ChevronRight size={12} className="text-purple-500" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;