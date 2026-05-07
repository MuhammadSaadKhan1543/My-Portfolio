import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <section
  id="Project"
  className="min-h-screen bg-[#0a0a0c] py-16 md:py-24 px-6 sm:px-12"
>
  <div className="max-w-6xl mx-auto">
    {/* Section Header - Centered on mobile */}
    <div className="mb-12 md:mb-16 text-center md:text-left">
      <h2 className="text-purple-500 font-medium tracking-widest uppercase text-xs md:text-sm mb-2">
        My Portfolio
      </h2>
      <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
        Featured <span className="text-gray-500">Projects</span>
      </h1>
      <div className="h-1 w-16 md:w-20 bg-purple-600 mt-4 rounded-full mx-auto md:mx-0"></div>
    </div>

    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {projects.map((p) => (
        <div
          key={p._id}
          className="group relative bg-[#111113] border border-gray-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 flex flex-col h-full"
        >
          <div className="relative h-48 sm:h-56 w-full overflow-hidden">
            <img
              src={`http://localhost:5000/uploads/${p.image}`}
              alt={p.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-300"></div>
          </div>

          <div className="p-5 md:p-6 flex flex-col flex-grow">
            <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
              {p.title}
            </h3>

            <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6 line-clamp-3">
              {p.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6 mt-auto">
              {Array.isArray(p.techStack) &&
                p.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2.5 py-1 text-[9px] md:text-[10px] font-semibold tracking-wider uppercase bg-[#18181b] border border-gray-700 text-gray-300 rounded-md"
                  >
                    {tech.trim()}
                  </span>
                ))}
            </div>

            <div className="flex items-center justify-between border-t border-gray-800 pt-5">
              <a
                href={p.githubLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs md:text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                Code
              </a>
              <a
                href={p.liveLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs md:text-sm font-medium text-purple-500 hover:text-purple-400 transition-colors"
              >
                <ExternalLink size={16} className="md:w-[18px]" />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>

    {projects.length === 0 && (
      <div className="text-center py-20">
        <p className="text-gray-500 text-lg italic">
          No projects found. Check back soon!
        </p>
      </div>
    )}
  </div>
</section>
  );
}
