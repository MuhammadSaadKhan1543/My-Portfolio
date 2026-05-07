import React from 'react';

const About = () => {
  return (
    <section id='about' className="bg-[#0a0a0a] text-white py-16 md:py-24 px-6 min-h-screen flex flex-col justify-center">
  <div className="max-w-4xl mx-auto w-full">
    
    {/* Subheading - Centered on mobile, left-aligned on desktop */}
    <p className="text-purple-600 font-semibold tracking-widest text-xs md:text-sm mb-4 uppercase text-center md:text-left">
      About Me
    </p>

    {/* Main Heading - Responsive text size */}
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center md:text-left">
      Who I Am
    </h2>

    {/* Description Paragraphs - Better max-width for readability */}
    <div className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl mx-auto md:mx-0 text-center md:text-left">
      <p>
        I'm a Full-Stack Developer with strong expertise in the <span className="text-gray-200">MERN stack</span> (MongoDB, Express.js, React, Node.js), along with languages like <span className="text-gray-200">PHP</span> and its libraries like <span className="text-gray-200">Laravel</span>, and databases like <span className="text-gray-200">MySQL</span>. I have a passion for creating dynamic and responsive web applications that provide seamless user experiences.
      </p>
      <p>
        I enjoy turning complex problems into simple, beautiful, and intuitive solutions.
      </p>
    </div>

    {/* Stats Cards Container */}
    {/* 
        Changes: 
        1. grid-cols-2 on small tablets (sm)
        2. grid-cols-3 on laptops (md)
        3. Gap reduced on mobile for better fit
    */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-12 md:mt-16">
      
      {/* Card 1: Experience */}
      <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center hover:border-purple-500/50 transition-all group">
        <span className="text-3xl md:text-4xl font-bold text-purple-500 mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300">
          1+
        </span>
        <p className="text-gray-300 font-medium text-sm md:text-base">Years of</p>
        <p className="text-gray-500 text-xs md:text-sm">Experience</p>
      </div>

      {/* Card 2: Projects */}
      <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center hover:border-purple-500/50 transition-all group">
        <span className="text-3xl md:text-4xl font-bold text-purple-500 mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300">
          12+
        </span>
        <p className="text-gray-300 font-medium text-sm md:text-base">Projects</p>
        <p className="text-gray-500 text-xs md:text-sm">Completed</p>
      </div>

      {/* Card 3: Tech Stacks */}
      {/* sm:col-span-2 md:col-span-1 centers the third card on small tablets */}
      <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center sm:col-span-2 md:col-span-1 hover:border-purple-500/50 transition-all group">
        <span className="text-3xl md:text-4xl font-bold text-purple-500 mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300">
          2+
        </span>
        <p className="text-gray-300 font-medium text-sm md:text-base">Tech</p>
        <p className="text-gray-500 text-xs md:text-sm">Stacks</p>
      </div>

    </div>
  </div>
</section>
  );
};

export default About;