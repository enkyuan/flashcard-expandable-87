import React, { useState } from 'react';
import FlashcardSidebar from '@/components/FlashcardSidebar';
import OfflineNotice from '@/components/OfflineNotice';
import { toast } from '@/hooks/use-toast';
import FlashcardStudyView from '@/components/FlashcardStudyView';
import { FlashcardData } from '@/types/flashcard';

const flashcardData: FlashcardData = {
  "deck": {
    "title": "Principles of Macroeconomics",
    "description": "Covers fundamental macroeconomic mechanisms including inflation protection, policy tradeoffs, economic measurement, and trade dynamics. Focuses on atomic concepts through 12 carefully sequenced cards that emphasize: (1) Inflation-indexed wage adjustments (COLAs), (2) Opportunity cost analysis of monetary policy, (3) GDP as an economic scoreboard, and (4) Unintended consequences of protectionism. Designed for active recall of irreducible economic principles using real-world applications."
  },
  "cards": [
    {
      "front": "What does COLA stand for in wage contracts?",
      "back": "Cost-of-Living Adjustment",
      "interval": 1,
      "reviews": 3
    },
    {
      "front": "What economic indicator directly triggers COLA wage adjustments?",
      "back": "Inflation rates",
      "interval": 3,
      "reviews": 2
    },
    {
      "front": "How do COLAs protect workers during inflationary periods?",
      "back": "By automatically increasing nominal wages to match price increases",
      "interval": 7,
      "reviews": 1
    },
    {
      "front": "What immediate household expense increases when the Fed raises rates to combat inflation?",
      "back": "Mortgage interest rates",
      "interval": 14,
      "reviews": 4
    },
    {
      "front": "What personal finance opportunity is lost when mortgage rates rise?",
      "back": "Affordable home purchases or refinancing options",
      "interval": 21,
      "reviews": 2
    },
    {
      "front": "What trade-off exists between Fed rate hikes and consumer spending?",
      "back": "Higher rates curb inflation but reduce disposable income",
      "interval": 30,
      "reviews": 3
    },
    {
      "front": "What does GDP measure in simplest terms?",
      "back": "Total value of goods/services produced in a country annually",
      "interval": 45,
      "reviews": 5
    },
    {
      "front": "GDP analogy: What everyday object represents economic tracking?",
      "back": "A scoreboard tracking national economic activity",
      "interval": 60,
      "reviews": 4
    },
    {
      "front": "What two key elements define GDP calculations?",
      "back": "Final goods/services produced within borders + time period (usually annual)",
      "interval": 90,
      "reviews": 3
    },
    {
      "front": "First-order effect of protective tariffs on domestic industries?",
      "back": "Increased production costs for imported raw materials",
      "interval": 120,
      "reviews": 2
    },
    {
      "front": "How do tariffs reduce export competitiveness?",
      "back": "Through retaliatory tariffs from trading partners",
      "interval": 180,
      "reviews": 1
    },
    {
      "front": "What happens to consumer spending when tariffs raise prices?",
      "back": "Money shifts to protected sectors, starving other industries",
      "interval": 365,
      "reviews": 0
    }
  ]
};

const Index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showOfflineNotice, setShowOfflineNotice] = useState(true);

  const handleUpgrade = () => {
    toast({
      title: "Upgrade",
      description: "This would navigate to the upgrade page in a real application.",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 relative">
      <FlashcardSidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)}
        deckTitle={flashcardData.deck.title}
        deckDescription={flashcardData.deck.description}
      />

      <FlashcardStudyView 
        flashcardData={flashcardData}
        showSidebar={() => setIsSidebarOpen(true)}
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
