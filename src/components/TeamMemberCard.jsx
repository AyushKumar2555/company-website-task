import { useState } from 'react';

const TeamMemberCard = ({ member }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="group relative w-full h-96 [perspective:1000px] cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      {/* Card Container */}
      <div className={`relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] ${
        isFlipped ? '[transform:rotateY(180deg)]' : ''
      }`}>
        
        {/* Front of Card */}
        <div className="absolute inset-0 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden [backface-visibility:hidden]">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 group-hover:from-blue-500/10 group-hover:to-purple-600/10 transition-all duration-500"></div>
          
          {/* Profile Image Area */}
          <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-500"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-ping absolute -top-1 -right-1"></div>
              <div className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">Available</div>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6 relative">
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
              {member.name}
            </h3>
            <p className="text-blue-600 font-semibold mb-3 transform group-hover:translate-x-2 transition-transform duration-300">
              {member.role}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
              {member.bio}
            </p>
            
            {/* Hover Indicator */}
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
              <div className="flex items-center text-sm text-gray-500">
                View details
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Back of Card */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl shadow-2xl overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)] p-6">
          {/* Close Button */}
          <button 
            className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
            onClick={(e) => {
              e.stopPropagation();
              setIsFlipped(false);
            }}
          >
            ×
          </button>

          {/* Back Content */}
          <div className="h-full flex flex-col">
            <h3 className="text-2xl font-bold mb-2 text-white">{member.name}</h3>
            <p className="text-blue-300 font-semibold mb-4">{member.role}</p>
            
            <div className="space-y-4 flex-grow">
              <div>
                <h4 className="text-sm text-gray-400 uppercase font-semibold mb-2">Expertise</h4>
                <p className="text-white text-sm">{member.expertise}</p>
              </div>
              
              <div>
                <h4 className="text-sm text-gray-400 uppercase font-semibold mb-2">Recent Projects</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Global E-commerce Platform</li>
                  <li>• Healthcare Mobile App</li>
                  <li>• Financial Analytics Dashboard</li>
                </ul>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 pt-4 border-t border-white/10">
              {['LinkedIn', 'Twitter', 'GitHub'].map((social) => (
                <button
                  key={social}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transform hover:scale-110 transition-all duration-300 backdrop-blur-sm"
                >
                  <span className="text-xs font-semibold">{social[0]}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 animate-pulse"></div>
      <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300 animate-pulse"></div>
    </div>
  );
};

export default TeamMemberCard;