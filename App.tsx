import React from 'react';
import TopBar from './components/TopBar';
import DeckCard from './components/DeckCard';
import BottomNav from './components/BottomNav';
import { DeckProps } from './types';

const App: React.FC = () => {
  // Mock Data mimicking the image content
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
    // Added one more to show scrolling
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
      {/* Top Navigation / Search */}
      <TopBar />

      {/* Main Content Area */}
      <main className="flex-grow px-6 py-6 pb-32 overflow-y-auto no-scrollbar">
        <div className="space-y-6">
          {decks.map((deck) => (
            <DeckCard 
              key={deck.id}
              {...deck}
            />
          ))}
        </div>
      </main>

      {/* Floating Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default App;