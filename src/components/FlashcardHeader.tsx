
import React from 'react';
import { Button } from '@/components/ui/button';
import { MenuIcon, Library, ArrowDownUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface FlashcardHeaderProps {
  onOpenSidebar: () => void;
  deckName: string;
  cardCount: number;
  currentIndex: number;
}

const FlashcardHeader = ({ 
  onOpenSidebar, 
  deckName, 
  cardCount, 
  currentIndex 
}: FlashcardHeaderProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 p-3 bg-[#232323] border-b border-flashcard-border z-10">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon"
            className="h-9 w-9 bg-transparent text-flashcard-text hover:bg-[#333333] transition-colors"
            onClick={onOpenSidebar}
          >
            <MenuIcon size={18} />
          </Button>
          
          <div className="flex items-center ml-1">
            <Library size={16} className="text-flashcard-secondary mr-2" />
            <span className="text-flashcard-text font-medium">{deckName}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="sm"
            className="text-sm bg-transparent text-flashcard-secondary hover:bg-[#333333] transition-colors flex items-center gap-1 h-8"
          >
            <ArrowDownUp size={14} />
            <span>Sort</span>
          </Button>
          
          <Badge className="bg-[#333333] hover:bg-[#3A3A3A] text-flashcard-secondary border-none">
            {currentIndex} / {cardCount}
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default FlashcardHeader;
