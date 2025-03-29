
import { useState, useEffect } from 'react';
import { Card, FlashcardData } from '@/types/flashcard';

export const useFlashcardDeck = (initialData: FlashcardData) => {
  const [flashcardData, setFlashcardData] = useState<FlashcardData>(initialData);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isCardExpanded, setIsCardExpanded] = useState(false);
  const [cardOpacity, setCardOpacity] = useState(1);

  // Prepare cards with due dates
  const cardsWithIntervals = flashcardData.cards.map(card => {
    const now = new Date();
    const dueDate = new Date();
    dueDate.setDate(now.getDate() + (card.interval || 1));
    return {
      ...card,
      dueDate
    };
  });

  const currentCard = cardsWithIntervals[currentCardIndex];

  const handleNextCard = () => {
    setCardOpacity(0);
    setTimeout(() => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardsWithIntervals.length);
      setCardOpacity(1);
      setIsCardExpanded(false);
    }, 300);
  };

  const handlePreviousCard = () => {
    setCardOpacity(0);
    setTimeout(() => {
      setCurrentCardIndex((prevIndex) => 
        prevIndex === 0 ? cardsWithIntervals.length - 1 : prevIndex - 1
      );
      setCardOpacity(1);
      setIsCardExpanded(false);
    }, 300);
  };

  const toggleCardExpand = () => {
    setIsCardExpanded(!isCardExpanded);
  };

  const updateCardReviews = (cardIndex: number, newReviewCount: number) => {
    const updatedCards = [...flashcardData.cards];
    updatedCards[cardIndex] = {
      ...updatedCards[cardIndex],
      reviews: newReviewCount
    };
    
    setFlashcardData({
      ...flashcardData,
      cards: updatedCards
    });
  };

  return {
    deck: flashcardData.deck,
    cards: cardsWithIntervals,
    currentCard,
    currentCardIndex,
    isCardExpanded,
    cardOpacity,
    handleNextCard,
    handlePreviousCard,
    toggleCardExpand,
    updateCardReviews
  };
};
