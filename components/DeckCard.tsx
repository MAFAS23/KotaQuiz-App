import React from 'react';
import { ChevronsRight } from 'lucide-react';
import { DeckProps } from '../types';

const DeckCard: React.FC<DeckProps> = ({ title, phraseCount, contributors, colorTheme }) => {
  
  // Define styles based on theme
  const themeStyles = {
    blue: {
      bg: 'bg-[#6A85C3]',
      accent: 'bg-[#FBD490]',
      dot: 'bg-[#FBD490]',
      button: 'bg-[#FBD490] text-[#6A85C3]',
      buttonIcon: 'text-white'
    },
    pink: {
      bg: 'bg-[#F08A8A]',
      accent: 'bg-[#FBD490]',
      dot: 'bg-[#FBD490]',
      button: 'bg-[#FBD490] text-[#F08A8A]',
      buttonIcon: 'text-white'
    },
    yellow: {
      bg: 'bg-[#FBD490]',
      accent: 'bg-[#6A85C3]', 
      dot: 'bg-[#6A85C3]',
      button: 'bg-[#6A85C3] text-white',
      buttonIcon: 'text-white'
    }
  };

  const currentTheme = themeStyles[colorTheme];

  return (
    <div className={`relative w-full rounded-[32px] ${currentTheme.bg} p-6 h-48 shadow-lg transform transition-transform active:scale-[0.98] overflow-hidden`}>
      
      {/* Decorative Top Right Curve (The "Tab" effect) */}
      <div className={`absolute -top-12 -right-6 w-32 h-32 rounded-full ${currentTheme.accent} opacity-90 z-0`}></div>
      
      {/* Decorative Bottom Right Dot/Shape */}
      <div className={`absolute bottom-8 right-6 w-4 h-6 rounded-full ${currentTheme.dot} opacity-80 z-0 rotate-12`}></div>
      
      {/* Decorative Top Left Dot */}
      <div className={`absolute top-6 left-6 w-6 h-6 rounded-full ${currentTheme.dot} opacity-80 z-0`}></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-between h-full pt-6">
        
        {/* Header: Title & Contributors */}
        <div>
          <h3 className={`text-2xl font-bold ${colorTheme === 'yellow' ? 'text-[#4A5568]' : 'text-white'} mb-2`}>
            {title}
          </h3>
          
          <div className="flex items-center space-x-2">
            <span className={`text-sm ${colorTheme === 'yellow' ? 'text-[#4A5568]' : 'text-white'} opacity-90 font-medium mr-1`}>
              Contributors:
            </span>
            <div className="flex -space-x-2">
              {contributors.map((c, i) => (
                <img 
                  key={c.id} 
                  src={c.avatarUrl} 
                  alt="contributor" 
                  className={`w-6 h-6 rounded-full border-2 ${colorTheme === 'yellow' ? 'border-[#FBD490]' : 'border-white/30'}`} 
                  style={{ zIndex: contributors.length - i }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer: Phrase Count & Action Button */}
        <div className="flex items-center gap-2">
          <div className={`flex-grow h-10 ${currentTheme.button} rounded-xl flex items-center justify-center font-bold text-lg shadow-sm max-w-[160px]`}>
            {phraseCount} phrases
          </div>
          
          <button className={`h-10 w-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center transition-colors hover:bg-white/30`}>
            <ChevronsRight className="text-white" size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeckCard;