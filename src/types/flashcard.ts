
export interface Deck {
  id?: string;
  title: string;
  description: string;
}

export interface Card {
  id?: string;
  front: string;
  back: string;
  interval?: number; // Days until next review
  dueDate?: Date;
  reviews?: number; // Number of times reviewed
  tags?: string[];
}

export interface FlashcardData {
  deck: Deck;
  cards: Card[];
}

export interface FlashcardStudyState {
  isExpanded: boolean;
  currentCardIndex: number;
}
