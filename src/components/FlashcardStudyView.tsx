
import React, { useEffect } from 'react';
import { toast } from '@/hooks/use-toast';
import Flashcard from '@/components/Flashcard';
import FlashcardHeader from '@/components/FlashcardHeader';
import FlashcardNavigation from '@/components/FlashcardNavigation';
import { useFlashcardDeck } from '@/hooks/use-flashcard-deck';
import { FlashcardData } from '@/types/flashcard';

interface FlashcardStudyViewProps {
  flashcardData: FlashcardData;
  showSidebar: () => void;
}

const FlashcardStudyView = ({ 
  flashcardData,
  showSidebar 
}: FlashcardStudyViewProps) => {
  const {
    deck,
    cards,
    currentCard,
    currentCardIndex,
    isCardExpanded,
    cardOpacity,
    handleNextCard,
    handlePreviousCard,
    toggleCardExpand,
    updateCardReviews
  } = useFlashcardDeck(flashcardData);

  const handleAddToReviews = () => {
    const newReviewCount = (currentCard.reviews || 0) + 1;
    updateCardReviews(currentCardIndex, newReviewCount);
    
    toast({
      title: "Added to Reviews",
      description: `Card "${currentCard.front}" has been added to your reviews.`,
      duration: 3000,
    });
    
    handleNextCard();
  };

  const handleSkip = () => {
    toast({
      title: "Skipped",
      description: "Card has been skipped.",
      duration: 3000,
    });
    handleNextCard();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        
        if (!isCardExpanded) {
          toggleCardExpand();
        } else {
          handleNextCard();
        }
      } else if (e.code === 'ArrowLeft') {
        handlePreviousCard();
      } else if (e.code === 'ArrowRight') {
        handleNextCard();
      } else if (e.code === 'Enter') {
        handleAddToReviews();
      } else if (e.code === 'KeyX') {
        handleSkip();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isCardExpanded, currentCardIndex]);

  return (
    <div className="pt-16 pb-24 px-4 flex items-center justify-center min-h-screen">
      <div 
        className="w-full max-w-lg transition-opacity duration-300"
        style={{ opacity: cardOpacity }}
      >
        <Flashcard
          card={currentCard}
          onNextCard={handleNextCard}
          isExpanded={isCardExpanded}
          onToggleExpand={toggleCardExpand}
        />
      </div>

      <FlashcardHeader 
        onOpenSidebar={showSidebar}
        deckName={deck.title}
        cardCount={cards.length}
        currentIndex={currentCardIndex + 1}
      />

      <FlashcardNavigation
        onPrevious={handlePreviousCard}
        onNext={handleNextCard}
        onReview={handleAddToReviews}
        onSkip={handleSkip}
        interval={currentCard.interval}
        dueDate={currentCard.dueDate}
      />
    </div>
  );
};

export default FlashcardStudyView;
