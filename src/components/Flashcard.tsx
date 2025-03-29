
import React from 'react';
import { Card as CardType } from '@/types/flashcard';
import FlashcardContent from './FlashcardContent';

export interface FlashcardProps {
  card: CardType;
  onNextCard?: () => void;
  isExpanded?: boolean;
  onToggleExpand?: () => void;
}

const Flashcard = ({
  card,
  onNextCard,
  isExpanded = false,
  onToggleExpand = () => {}
}: FlashcardProps) => {
  return (
    <div className="flashcard-container w-full max-w-lg mx-auto">
      <FlashcardContent
        card={card}
        isExpanded={isExpanded}
        onToggleExpand={onToggleExpand}
      />
    </div>
  );
};

export default Flashcard;
