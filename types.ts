export interface Contributor {
  id: string;
  avatarUrl: string;
}

export interface DeckProps {
  id: string;
  title: string;
  phraseCount: number;
  contributors: Contributor[];
  colorTheme: 'blue' | 'pink' | 'yellow';
}