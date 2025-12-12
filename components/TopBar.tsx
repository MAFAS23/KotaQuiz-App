import React from 'react';
import { Search } from 'lucide-react';

const TopBar: React.FC = () => {
  return (
    <div className="w-full px-6 pt-8 pb-4 flex flex-col gap-6 bg-[#F3F4F6] z-20">
      {/* Header Row: Title & Avatar */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#6A85C3]">Flashcards</h1>
          <p className="text-gray-500 font-medium text-sm mt-1">Pick a set to practice</p>
        </div>
        
        {/* Avatar Section */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm relative">
            <img 
              src="https://picsum.photos/100/100" 
              alt="User Profile" 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
          </div>
        </div>
      </div>

      {/* Search Input Section */}
      <div className="relative w-full">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
          <Search size={20} />
        </div>
        <input 
          type="text" 
          placeholder="Search your decks..." 
          className="w-full h-12 pl-12 pr-4 rounded-full bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6A85C3]/30 border border-transparent transition-all"
        />
      </div>
    </div>
  );
};

export default TopBar;