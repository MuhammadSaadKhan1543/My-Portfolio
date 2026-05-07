import React from "react";
import bg from "./images/home-bg.png";
import { Link as ScrollLink } from "react-scroll"; 

const Home = () => {
  return (
    <section
  id="home"
  className="relative w-full min-h-screen bg-cover bg-center flex items-center py-20 md:py-0"
  style={{ backgroundImage: `url(${bg})` }}
>
  <div className="absolute inset-0 bg-black/40 md:hidden"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center md:text-left">
    
    <div className="text-white flex flex-col items-center md:items-start">
      <p className="text-purple-400 mb-2 text-lg font-medium">Hi, I'm</p>

      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
        Muhammad{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
          Saad Khan
        </span>
      </h1>

      <h2 className="mt-4 text-2xl md:text-3xl text-gray-200 font-semibold">
        Full-Stack Developer
      </h2>

      <p className="mt-6 text-gray-400 max-w-md text-base md:text-lg leading-relaxed">
        I build scalable, performant and beautiful web applications that solve real problems.
      </p>

      
      <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        
      
        <ScrollLink
          to="Project" 
          smooth={true} 
          duration={500} 
          className="cursor-pointer group relative px-8 py-4 overflow-hidden rounded-xl border border-purple-500 bg-gradient-to-r from-purple-500 to-purple-700 text-white transition-all duration-500 text-center"
        >
          <span className="absolute inset-0 scale-0 rounded-full bg-gray-950 opacity-0 transition-all duration-[1000ms] ease-in-out group-hover:scale-[3] group-hover:opacity-100"></span>
          <span className="relative z-10 flex items-center justify-center gap-2 font-bold tracking-wide transition-colors duration-500 group-hover:text-purple-400">
            View My Work
            <svg className="w-5 h-5 transition-transform duration-700 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </ScrollLink>

        <ScrollLink
          to="contact" 
          smooth={true} 
          duration={500}
          className="cursor-pointer group relative px-8 py-4 overflow-hidden rounded-xl border border-gray-700 bg-gray-900/50 backdrop-blur-sm text-white transition-all duration-300 text-center"
        >
          <span className="absolute inset-0 scale-0 rounded-full bg-gradient-to-tr from-purple-600 via-purple-500 to-indigo-400 opacity-0 transition-all duration-700 ease-out group-hover:scale-[2.5] group-hover:opacity-100"></span>
          <span className="relative z-10 flex items-center justify-center gap-2 font-bold tracking-wide">
            Contact Me
            <svg className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1 group-hover:rotate-[-45deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </ScrollLink>
      </div>
    </div>

  
    <div className="hidden md:flex justify-center items-center">
       
       <div className="w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
    </div>
  </div>
</section>
  ); 
}; 

export default Home;