import React from "react";
import Mail from "lucide-react/dist/esm/icons/mail";
import MapPin from "lucide-react/dist/esm/icons/map-pin";
import * as icons from "simple-icons";

const BrandIcon = ({ name, color = "currentColor", size = 20 }) => {
  const iconKey = `si${name.charAt(0).toUpperCase() + name.slice(1)}`;
  const icon = icons[iconKey];

  if (!icon) return null;

  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill={color}>
      <path d={icon.path} />
    </svg>
  );
};

const Contact = () => {
  return (
 <section id="contact" className="bg-[#0a0a0a] text-white py-16 md:py-24 px-6 flex justify-center items-center">
  <div className="max-w-4xl w-full text-center">
    
    <div className="mb-12 inline-block">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
        Contact <span className="text-purple-500">Me</span>
      </h2>
      <div className="h-1 w-1/2 bg-purple-600 mx-auto rounded-full"></div>
    </div>

    <div className="flex flex-col items-center space-y-6 md:space-y-8">
      
      <a
        href="mailto:muhammadsaadkhan1543@gmail.com"
        className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 text-base sm:text-lg md:text-xl text-gray-200 hover:text-purple-500 transition-all duration-300 group max-w-full"
      >
        <div className="p-3 bg-[#111113] border border-gray-800 rounded-lg group-hover:border-purple-500/50 flex-shrink-0">
          <Mail className="w-5 h-5 md:w-6 md:h-6" />
        </div>
        <span className="font-medium break-all sm:break-normal">
          muhammadsaadkhan1543@gmail.com
        </span>
      </a>

      <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 text-base sm:text-lg md:text-xl text-gray-200 hover:text-purple-400 transition-all duration-300 group cursor-default">
        <div className="p-3 bg-[#111113] border border-gray-800 rounded-lg group-hover:border-purple-400/50 flex-shrink-0">
          <MapPin className="w-5 h-5 md:w-6 md:h-6" />
        </div>
        <span className="font-medium">Lahore, Pakistan</span>
      </div>

      <a
        href="https://github.com/MuhammadSaadKhan1543"
        target="_blank"
        rel="noreferrer"
        className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 text-base sm:text-lg md:text-xl text-gray-200 hover:text-purple-500 transition-all duration-300 group max-w-full"
      >
        <div className="p-3 bg-[#111113] border border-gray-800 rounded-lg group-hover:border-purple-500/50 flex-shrink-0">
          <BrandIcon name="github" />
        </div>
        <span className="font-medium break-all sm:break-normal text-center">
          github.com/MuhammadSaadKhan1543
        </span>
      </a>
      
    </div>
  </div>
</section>
  );
};

export default Contact;
