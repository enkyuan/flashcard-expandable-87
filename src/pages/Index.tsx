
import React, { useState, useEffect } from 'react';
import Flashcard from '@/components/Flashcard';
import FlashcardHeader from '@/components/FlashcardHeader';
import FlashcardNavigation from '@/components/FlashcardNavigation';
import FlashcardSidebar from '@/components/FlashcardSidebar';
import OfflineNotice from '@/components/OfflineNotice';
import { toast } from '@/components/ui/use-toast';
import { FlashcardData, Card } from '@/types/flashcard';

const flashcardData: FlashcardData = {
  "deck": {
    "title": "Principles of Macroeconomics",
    "description": "Covers fundamental macroeconomic mechanisms including inflation protection, policy tradeoffs, economic measurement, and trade dynamics. Focuses on atomic concepts through 12 carefully sequenced cards that emphasize: (1) Inflation-indexed wage adjustments (COLAs), (2) Opportunity cost analysis of monetary policy, (3) GDP as an economic scoreboard, and (4) Unintended consequences of protectionism. Designed for active recall of irreducible economic principles using real-world applications."
  },
  "cards": [
    {
      "front": "What does COLA stand for in wage contracts?",
      "back": "Cost-of-Living Adjustment",
      "interval": 1
    },
    {
      "front": "What economic indicator directly triggers COLA wage adjustments?",
      "back": "Inflation rates",
      "interval": 3
    },
    {
      "front": "How do COLAs protect workers during inflationary periods?",
      "back": "By automatically increasing nominal wages to match price increases",
      "interval": 7
    },
    {
      "front": "What immediate household expense increases when the Fed raises rates to combat inflation?",
      "back": "Mortgage interest rates",
      "interval": 14
    },
    {
      "front": "What personal finance opportunity is lost when mortgage rates rise?",
      "back": "Affordable home purchases or refinancing options",
      "interval": 21
    },
    {
      "front": "What trade-off exists between Fed rate hikes and consumer spending?",
      "back": "Higher rates curb inflation but reduce disposable income",
      "interval": 30
    },
    {
      "front": "What does GDP measure in simplest terms?",
      "back": "Total value of goods/services produced in a country annually",
      "interval": 45
    },
    {
      "front": "GDP analogy: What everyday object represents economic tracking?",
      "back": "A scoreboard tracking national economic activity",
      "interval": 60
    },
    {
      "front": "What two key elements define GDP calculations?",
      "back": "Final goods/services produced within borders + time period (usually annual)",
      "interval": 90
    },
    {
      "front": "First-order effect of protective tariffs on domestic industries?",
      "back": "Increased production costs for imported raw materials",
      "interval": 120
    },
    {
      "front": "How do tariffs reduce export competitiveness?",
      "back": "Through retaliatory tariffs from trading partners",
      "interval": 180
    },
    {
      "front": "What happens to consumer spending when tariffs raise prices?",
      "back": "Money shifts to protected sectors, starving other industries",
      "interval": 365
    }
  ]
};

const cardsWithIntervals = flashcardData.cards.map(card => {
  const now = new Date();
  const dueDate = new Date();
  dueDate.setDate(now.getDate() + (card.interval || 1));
  return {
    ...card,
    dueDate
  };
});

const Index = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showOfflineNotice, setShowOfflineNotice] = useState(true);
  const [cardOpacity, setCardOpacity] = useState(1);
  const [isCardExpanded, setIsCardExpanded] = useState(false);

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

  const handleAddToReviews = () => {
    toast({
      title: "Added to Reviews",
      description: `Card "${currentCard.front}" has been added to your reviews.`,
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        
        if (isCardExpanded) {
          // Collapse the card first, then go to next card
          setIsCardExpanded(false);
          // Wait for the collapse animation to finish before moving to next card
          setTimeout(() => {
            handleNextCard();
          }, 300);
        } else {
          setIsCardExpanded(true);
        }
      } else if (e.code === 'ArrowLeft') {
        handlePreviousCard();
      } else if (e.code === 'ArrowRight') {
        handleNextCard();
      } else if (e.code === 'Enter') {
        handleAddToReviews();
      } else if (e.code === 'KeyX') {
        toast({
          title: "Skipped",
          description: "Card has been skipped.",
          duration: 3000,
        });
        handleNextCard();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentCardIndex, isCardExpanded]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 relative">
      <FlashcardHeader 
        onOpenSidebar={() => setIsSidebarOpen(true)}
        deckName={flashcardData.deck.title}
        cardCount={cardsWithIntervals.length}
        currentIndex={currentCardIndex + 1}
      />

      <FlashcardSidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)}
        deckTitle={flashcardData.deck.title}
        deckDescription={flashcardData.deck.description}
      />

      <div className="pt-16 pb-24 px-4 flex items-center justify-center min-h-screen">
        <div 
          className="w-full max-w-lg transition-opacity duration-300"
          style={{ opacity: cardOpacity }}
        >
          <Flashcard
            question={currentCard.front}
            answer={currentCard.back}
            interval={currentCard.interval}
            dueDate={currentCard.dueDate}
            onNextCard={handleNextCard}
            isExpanded={isCardExpanded}
            onToggleExpand={() => setIsCardExpanded(!isCardExpanded)}
          />
        </div>
      </div>

      <FlashcardNavigation
        onPrevious={handlePreviousCard}
        onNext={handleNextCard}
        onReview={handleAddToReviews}
        onSkip={handleNextCard}
        interval={currentCard.interval}
        dueDate={currentCard.dueDate}
      />

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
