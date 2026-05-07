import React from 'react';
import { Heart, Trophy, Users, Award, ExternalLink, Star } from 'lucide-react';

const ImpactPage = () => {
  const volunteerships = [
    {
      title: "General Volunteer",
      org: "Todd's Welfare Society",
      description: "Helped organize community events and fundraisers, and animals in need",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "General Volunteer",
      org: "Faltoo Sey Paltoo",
      description: "Helped animals got over their past trauma and find loving homes.",
      icon: <Heart className="w-6 h-6" />,
    },
    {
      title: "Seminar Volunteer",
      org: "Pakistan Animal Rights Advocacy Group",
      description: "Helped in organizing a seminar on farm animal welfare, raising awareness about ethical farming practices.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Executive Volunteer",
      org: "Ruffles Animal Welfare Registry",
      description: "Aided in organizing events and campaigns to raise awareness about animal welfare issues, and helped in fundraising efforts to support the organization's initiatives.",
      icon: <Heart className="w-6 h-6" />,
    },
    {
      title: "Volunteer Training Program Attendee",
      org: "Pakistan Citizen's Alliance",
      description: "Attended Volunteer Flagship Training Program, gaining skills in community engagement, project management, and effective communication to better serve local communities, and fulfilled the goal or raising a specific amount for the organisation.",
      icon: <Heart className="w-6 h-6" />,
    },
    {
      title: "Volunteer for Ramadan Drive",
      org: "Pakistan Citizen's Alliance",
      description: "Assisted in organizing and distributing food packages to underprivileged communities during Ramadan, ensuring that those in need received essential supplies.",
      icon: <Heart className="w-6 h-6" />,
    },

  ];

  const accomplishments = [
    {
      title: "USAII Global AI Hackathon 2026",
      detail: "Participated in a global AI hackathon, developing an innovative solution for real-time data analysis using machine learning algorithms.",
      icon: <Star className="w-6 h-6" />,
    },
    {
        title: "Marathon Runner",
        detail: "Ran a Marathon organized by Milo showing discipline and resilience",
        icon: <Award className="w-6 h-6" />,
    },
    {
        title: "Tug of War Winner",
        detail: "Won the tug of War Competetion organized by KIPS College. Showing feats of teamwork and collaboration",
        icon: <Trophy className="w-6 h-6" />,
    }
  ];

  return (
    <section id="impact" className="min-h-screen bg-[#0a0a0c] py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-16 text-center">
          <h2 className="text-purple-500 font-medium tracking-widest uppercase text-xs md:text-sm mb-2">
            Beyond the Code
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Impact & <span className="text-gray-500">Athletics</span>
          </h1>
          <div className="h-1 w-20 bg-purple-600 mt-4 rounded-full mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
          
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-purple-600/20 rounded-lg text-purple-500">
                <Heart size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Volunteerships</h3>
            </div>

            <div className="space-y-6">
              {volunteerships.map((item, index) => (
                <div 
                  key={index} 
                  className="group bg-[#111113] border border-gray-800 p-6 rounded-2xl transition-all duration-300 hover:border-purple-500/40 hover:bg-[#141417]"
                >
                  <div className="flex gap-5">
                    <div className="text-gray-500 group-hover:text-purple-500 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-purple-500 text-sm font-medium mb-3">{item.org}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-purple-600/20 rounded-lg text-purple-500">
                <Trophy size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Accomplishments</h3>
            </div>

            <div className="grid sm:grid-cols-1 gap-4">
              {accomplishments.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 bg-[#111113] border border-gray-800 p-5 rounded-2xl hover:bg-[#18181b] transition-colors group"
                >
                  <div className="p-3 bg-[#0a0a0c] border border-gray-800 rounded-xl text-gray-400 group-hover:text-purple-500 group-hover:border-purple-500/30 transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base">{item.title}</h4>
                    <p className="text-gray-500 text-xs md:text-sm">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

         
          </div>

        </div>
      </div>
    </section>
  );
};

export default ImpactPage;