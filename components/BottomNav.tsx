import React, { useState } from 'react';

const BottomNav: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mydeck' | 'collection'>('mydeck');

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      {/* The "Melonjong" (Oval) Container */}
      <div className="bg-[#1B1B2F] rounded-full p-1.5 shadow-2xl flex items-center w-[300px] h-[64px] relative">
        
        {/* Sliding Background Effect for Active Tab */}
        <div 
          className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-[#3D3D5C] rounded-full transition-all duration-300 ease-out ${
            activeTab === 'mydeck' ? 'left-1.5' : 'left-[calc(50%+3px)]'
          }`}
        />

        {/* My Deck Button */}
        <button 
          onClick={() => setActiveTab('mydeck')}
          className={`relative z-10 flex-1 h-full rounded-full flex items-center justify-center text-sm font-semibold transition-colors duration-200 ${
            activeTab === 'mydeck' ? 'text-white' : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          My Deck
        </button>

        {/* Collection Button */}
        <button 
          onClick={() => setActiveTab('collection')}
          className={`relative z-10 flex-1 h-full rounded-full flex items-center justify-center text-sm font-semibold transition-colors duration-200 ${
            activeTab === 'collection' ? 'text-white' : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          Collections
        </button>
      </div>
    </div>
  );
};

export default BottomNav;