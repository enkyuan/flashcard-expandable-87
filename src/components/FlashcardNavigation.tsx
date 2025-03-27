
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X, Check, MoreHorizontal } from 'lucide-react';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

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
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="h-9 w-9 rounded-full bg-transparent text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                  onClick={onPrevious}
                >
                  <ChevronLeft size={18} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Previous card (Left arrow)</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="h-9 w-9 rounded-full bg-transparent text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                  onClick={onNext}
                >
                  <ChevronRight size={18} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Next card (Right arrow)</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="h-9 w-9 rounded-full bg-transparent text-gray-700 hover:bg-red-100 hover:text-red-600 transition-colors"
                  onClick={onSkip}
                >
                  <X size={18} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Skip this card (X key)</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <span className="text-gray-500 ml-1">Again</span>
        </div>
        
        <div className="flex items-center gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="text-green-600 hover:text-green-700 hover:bg-green-50 transition-colors"
                  onClick={onReview}
                >
                  <Check size={18} className="mr-1" />
                  <span className="text-sm">Add to reviews</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add to reviews (Space key)</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="h-9 w-9 rounded-full bg-transparent text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                >
                  <MoreHorizontal size={18} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>More options</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};

export default FlashcardNavigation;
