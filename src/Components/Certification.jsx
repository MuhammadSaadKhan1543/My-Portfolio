import React from 'react';
import { Award, ExternalLink, Calendar, Search } from 'lucide-react';

const Certifications = () => {
  const certs = [
      {
          title: "Full Stack Development",
          issuer: "Navttc",
          date: "2026",
          link: "#",
          tags: ["PHP", "Laravel", "MySQL", "JavaScript", "HTML/CSS","React.js","Tailwind CSS", "Bootstrap", "WordPress"]
        },
        {
          title: "Mongo DB Course",
          issuer: "Code With Harry",
          date: "2026",
          link: "#",
          tags: ["MongoDB"]
        },
        {
          title: "Express Js Tutorial",
          issuer: "Code With Harry",
          date: "2026",
          link: "#",
          tags: ["Express.js"]
        },
        {
          title: "Node.Js Tutorial",
          issuer: "Code With Harry",
          date: "2026",
          link: "#",
          tags: ["Node.js"]
        },
        {
          title: "React.js Tutorial",
          issuer: "Code With Harry",
          date: "2025",
          link: "#",
          tags: ["React.js","Bootstrap"]
        },
        {
          title: "HTML,CSS and Java Script for Web Developers",
          issuer: "John's Hopkins University",
          date: "2024",
          link: "#",
          tags: ["HTML/CSS","JavaScript"]
        },
        {
          title: "Programming with Java Script",
          issuer: "Meta",
          date: "2024",
          link: "#",
          tags: ["JavaScript"]
        },
        {
          title: "Java Script Full Course",
          issuer: "Shradha Khapra",
          date: "2024",
          link: "#",
          tags: ["JavaScript"]
        },
        {
          title: "Web Development Tutorial",
          issuer: "Code With Harry",
          date: "2024",
          link: "#",
          tags: ["HTML/CSS","JavaScript"]
        },
    // Add more certifications here
  ];

  return (
    <section id="certifications" className="min-h-screen bg-[#0a0a0c] py-16 md:py-24 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12 md:mb-16 text-center md:text-left">
          <h2 className="text-purple-500 font-medium tracking-widest uppercase text-xs md:text-sm mb-2">
            Achievements
          </h2>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
           Certifications
          </h1>
          <div className="h-1 w-16 md:w-20 bg-purple-600 mt-4 rounded-full mx-auto md:mx-0"></div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certs.map((cert, index) => (
            <div 
              key={index}
              className="group relative bg-[#111113] border border-gray-800 rounded-2xl p-6 transition-all duration-300 hover:border-purple-500/50 hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Icon & Date Header */}
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-purple-600/10 rounded-lg text-purple-500">
                  <Award size={28} />
                </div>
                <div className="flex items-center gap-1.5 text-gray-500 text-xs font-medium bg-[#18181b] px-3 py-1 rounded-full border border-gray-800">
                  <Calendar size={14} />
                  {cert.date}
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-purple-500/80 font-medium text-sm mb-4">
                  {cert.issuer}
                </p>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] text-gray-400 border border-gray-800 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              {/* <div className="mt-auto pt-5 border-t border-gray-800/50">
                <a 
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors group/link"
                >
                  Verify Certificate
                  <ExternalLink size={16} className="text-purple-500 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </a>
              </div> */}

              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-600/5 blur-3xl rounded-full -mr-10 -mt-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Call to Action for Verification */}
        <div className="mt-16 p-8 rounded-2xl border border-dashed border-gray-800 bg-[#0d0d0f] text-center">
          <p className="text-gray-400 text-sm md:text-base">
            Looking for more details? You can verify all my credentials via my 
            <a href="https://www.linkedin.com/in/muhammad-saad-khan-1543c/" className="text-purple-500 hover:underline ml-1">LinkedIn Profile</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;