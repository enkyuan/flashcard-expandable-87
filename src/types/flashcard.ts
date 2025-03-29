
export interface Deck {
  title: string;
  description: string;
}

export interface Card {
  front: string;
  back: string;
  interval?: number; // Days until next review
  dueDate?: Date;
  reviews?: number; // Number of times reviewed
}

export interface FlashcardData {
  deck: Deck;
  cards: Card[];
}
