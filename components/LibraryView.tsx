import React, { useState } from 'react';
import { Plus, Search, MoreHorizontal } from 'lucide-react';

const LibraryView: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Flashcard sets');

  const filters = ['Flashcard sets', 'Practice tests', 'Classes', 'Folders', 'Archived'];
  
  const libraryItems = [
    {
      period: 'Today',
      items: [
        { id: 1, title: 'HSK1', terms: 38, author: 'athiffalah', avatar: 'https://picsum.photos/seed/hsk/50' }
      ]
    },
    {
      period: 'This week',
      items: [
        { id: 2, title: 'Hello in different languages', terms: 14, author: 'Quizlet', isVerified: true, avatar: 'https://picsum.photos/seed/quiz/50' },
        { id: 3, title: 'Biology Chapter 4', terms: 22, author: 'study_guru', avatar: 'https://picsum.photos/seed/bio/50' }
      ]
    }
  ];

  return (
    <div className="w-full h-full relative">
      <div className="px-2 pb-32">
        
        {/* Horizontal Scrollable Filters (Pill Shaped/Lonjong) */}
        <div className="w-full overflow-x-auto no-scrollbar mb-8">
          <div className="flex space-x-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-[#0F766E] text-white shadow-md' // Using a teal similar to image 1
                    : 'bg-white text-gray-600 border border-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Sub Filter Dropdown Mock */}
        <div className="flex items-center gap-2 mb-6">
           <button className="px-4 py-2 rounded-full bg-[#E5E7EB] text-gray-700 text-sm font-medium flex items-center gap-1">
             All 
             <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
           </button>
        </div>

        {/* Content List */}
        <div className="space-y-8">
          {libraryItems.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-gray-900 font-bold text-lg mb-4">{section.period}</h3>
              <div className="space-y-4">
                {section.items.map((item) => (
                  <div key={item.id} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between active:scale-[0.99] transition-transform">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-800 mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm mb-3">{item.terms} terms</p>
                      
                      <div className="flex items-center gap-2">
                        <img src={item.avatar} alt={item.author} className="w-6 h-6 rounded-full bg-gray-200" />
                        <span className="text-sm font-medium text-gray-700">{item.author}</span>
                        {item.isVerified && (
                          <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>
                    <button className="text-gray-400">
                      <MoreHorizontal size={20} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Action Button (Bottom Right) */}
      <button className="fixed bottom-28 right-6 w-14 h-14 bg-[#1B1B2F] rounded-full shadow-xl flex items-center justify-center text-white transition-transform hover:scale-110 active:scale-95 z-40">
        <Plus size={32} />
      </button>
    </div>
  );
};

export default LibraryView;