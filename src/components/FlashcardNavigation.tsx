
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X, Check, MoreHorizontal } from 'lucide-react';

interface FlashcardNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  onReview: () => void;
  onSkip: () => void;
}

const FlashcardNavigation = ({ 
  onPrevious, 
  onNext, 
  onReview, 
  onSkip 
}: FlashcardNavigationProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-[#232323] border-t border-flashcard-border">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon"
            className="h-9 w-9 rounded-full bg-transparent text-flashcard-text hover:bg-[#333333] transition-colors"
            onClick={onPrevious}
          >
            <ChevronLeft size={18} />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon"
            className="h-9 w-9 rounded-full bg-transparent text-flashcard-text hover:bg-[#333333] transition-colors"
            onClick={onNext}
          >
            <ChevronRight size={18} />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon"
            className="h-9 w-9 rounded-full bg-transparent text-flashcard-text hover:bg-[#333333] transition-colors"
            onClick={onSkip}
          >
            <X size={18} />
          </Button>
          
          <span className="text-flashcard-secondary ml-1">Again</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            className="text-[#4CAF50] hover:text-[#4CAF50] hover:bg-[#333333] transition-colors"
            onClick={onReview}
          >
            <Check size={18} className="mr-1" />
            <span className="text-sm">Add to reviews</span>
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon"
            className="h-9 w-9 rounded-full bg-transparent text-flashcard-text hover:bg-[#333333] transition-colors"
          >
            <MoreHorizontal size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FlashcardNavigation;
