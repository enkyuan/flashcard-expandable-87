
import React, { useState, useEffect } from 'react';
import Flashcard from '@/components/Flashcard';
import FlashcardHeader from '@/components/FlashcardHeader';
import FlashcardNavigation from '@/components/FlashcardNavigation';
import FlashcardSidebar from '@/components/FlashcardSidebar';
import OfflineNotice from '@/components/OfflineNotice';
import { toast } from '@/components/ui/use-toast';

// Mock data
const flashcards = [
  {
    id: 1,
    question: "lol",
    answer: "laugh out loud",
    tags: ["acronym", "slang"],
  },
  {
    id: 2,
    question: "What is the capital of France?",
    answer: "Paris",
    tags: ["geography", "europe"],
  },
  {
    id: 3,
    question: "Who wrote 'Pride and Prejudice'?",
    answer: "Jane Austen",
    tags: ["literature", "books"],
  },
  {
    id: 4,
    question: "What is the chemical symbol for gold?",
    answer: "Au (from Latin 'aurum')",
    tags: ["chemistry", "elements"],
  },
  {
    id: 5,
    question: "In what year did World War II end?",
    answer: "1945",
    tags: ["history", "war"],
  },
];

const Index = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showOfflineNotice, setShowOfflineNotice] = useState(true);
  const [cardOpacity, setCardOpacity] = useState(1);

  const currentCard = flashcards[currentCardIndex];

  const handleNextCard = () => {
    // Animate card transition
    setCardOpacity(0);
    setTimeout(() => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
      setCardOpacity(1);
    }, 300);
  };

  const handlePreviousCard = () => {
    // Animate card transition
    setCardOpacity(0);
    setTimeout(() => {
      setCurrentCardIndex((prevIndex) => 
        prevIndex === 0 ? flashcards.length - 1 : prevIndex - 1
      );
      setCardOpacity(1);
    }, 300);
  };

  const handleAddToReviews = () => {
    toast({
      title: "Added to Reviews",
      description: `Card "${currentCard.question}" has been added to your reviews.`,
      duration: 3000,
    });
    handleNextCard();
  };

  const handleUpgrade = () => {
    toast({
      title: "Upgrade",
      description: "This would navigate to the upgrade page in a real application.",
      duration: 3000,
    });
  };

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        handleNextCard();
      } else if (e.code === 'ArrowLeft') {
        handlePreviousCard();
      } else if (e.code === 'ArrowRight') {
        handleNextCard();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentCardIndex]);

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white relative">
      {/* Header */}
      <FlashcardHeader 
        onOpenSidebar={() => setIsSidebarOpen(true)}
        deckName="Flashcards"
        cardCount={flashcards.length}
        currentIndex={currentCardIndex + 1}
      />

      {/* Sidebar */}
      <FlashcardSidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Content */}
      <div className="pt-16 pb-24 px-4 flex items-center justify-center min-h-screen">
        <div 
          className="w-full max-w-lg transition-opacity duration-300"
          style={{ opacity: cardOpacity }}
        >
          <Flashcard
            question={currentCard.question}
            answer={currentCard.answer}
            tags={currentCard.tags}
            onNextCard={handleNextCard}
          />
        </div>
      </div>

      {/* Navigation */}
      <FlashcardNavigation
        onPrevious={handlePreviousCard}
        onNext={handleNextCard}
        onReview={handleAddToReviews}
        onSkip={handleNextCard}
      />

      {/* Offline Notice */}
      {showOfflineNotice && (
        <OfflineNotice
          onUpgrade={handleUpgrade}
          onDismiss={() => setShowOfflineNotice(false)}
        />
      )}
    </div>
  );
};

export default Index;
