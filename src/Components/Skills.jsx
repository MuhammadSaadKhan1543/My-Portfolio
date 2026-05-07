import React from 'react';

const Skills = () => {
  const technologies = [
     "MongoDB","Express.js", "React.js", "Node.js","MySQL", "Appache","PHP",  "Laravel", "JavaScript","HTML/CSS","Tailwind CSS","Bootstrap","WordPress", "REST APIs","Git & GitHub",
  ];

  return (
    <section 
  id="skills"
  className="bg-[#0a0a0a] text-white py-16 md:py-24 px-6 min-h-screen flex flex-col justify-center"
>
  <div className="max-w-6xl mx-auto w-full">
    
    <p className="text-purple-600 font-semibold tracking-widest text-xs md:text-sm mb-4 uppercase text-center md:text-left">
      My Skills
    </p>

    
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 md:mb-16 text-center md:text-left">
      Technologies I Work With
    </h2>

    
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {technologies.map((tech, index) => (
        <div 
          key={index}
          className="group relative bg-[#111111] border border-gray-800 p-5 md:p-8 rounded-xl flex items-center justify-center text-center transition-all duration-300 
                     hover:border-purple-500/50 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(147,51,234,0.3)]
                     active:scale-95"
        >
          <div className="absolute inset-0 bg-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

          <span className="relative z-10 text-gray-400 font-medium text-base md:text-lg transition-colors duration-300 group-hover:text-white">
            {tech}
          </span>
          
          <div className="absolute top-0 right-0 w-2 h-2 bg-purple-600 rounded-tr-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
};

export default Skills;