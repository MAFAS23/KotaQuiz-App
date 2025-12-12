import React, { useState } from 'react';
import TopBar from './components/TopBar';
import DeckCard from './components/DeckCard';
import BottomNav from './components/BottomNav';
import LibraryView from './components/LibraryView';
import { DeckProps } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mydeck' | 'library'>('mydeck');

  // Mock Data mimicking the image content for the Home view
  const decks: DeckProps[] = [
    {
      id: '1',
      title: 'Daily Conversation',
      phraseCount: 15,
      contributors: [
        { id: 'c1', avatarUrl: 'https://picsum.photos/seed/user1/50' },
        { id: 'c2', avatarUrl: 'https://picsum.photos/seed/user2/50' }
      ],
      colorTheme: 'blue'
    },
    {
      id: '2',
      title: 'Food',
      phraseCount: 30,
      contributors: [
        { id: 'c3', avatarUrl: 'https://picsum.photos/seed/user3/50' },
        { id: 'c4', avatarUrl: 'https://picsum.photos/seed/user4/50' }
      ],
      colorTheme: 'pink'
    },
    {
      id: '3',
      title: 'Relatives',
      phraseCount: 18,
      contributors: [
        { id: 'c5', avatarUrl: 'https://picsum.photos/seed/user5/50' },
        { id: 'c6', avatarUrl: 'https://picsum.photos/seed/user6/50' }
      ],
      colorTheme: 'yellow'
    },
    {
      id: '4',
      title: 'Travel Essentials',
      phraseCount: 45,
      contributors: [
        { id: 'c7', avatarUrl: 'https://picsum.photos/seed/user7/50' }
      ],
      colorTheme: 'blue'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col relative overflow-hidden">
      {/* Top Navigation / Search - Always visible or conditional based on preference. 
          The previous prompt implied a specific header for Home, keeping it consistent for now 
          but could be customized per tab if needed. */}
      <TopBar />

      {/* Main Content Area */}
      <main className="flex-grow px-6 py-6 overflow-y-auto no-scrollbar">
        
        {activeTab === 'mydeck' ? (
          /* Home / My Deck View */
          <div className="space-y-6 pb-32">
            {decks.map((deck) => (
              <DeckCard 
                key={deck.id}
                {...deck}
              />
            ))}
          </div>
        ) : (
          /* Library View */
          <LibraryView />
        )}

      </main>

      {/* Floating Bottom Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default App;