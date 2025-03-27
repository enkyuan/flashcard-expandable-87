import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, X, Check, MoreHorizontal, Calendar } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { format, formatDistanceToNow } from 'date-fns';
interface FlashcardNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  onReview: () => void;
  onSkip: () => void;
  interval?: number;
  dueDate?: Date;
}
const FlashcardNavigation = ({
  onPrevious,
  onNext,
  onReview,
  onSkip,
  interval,
  dueDate
}: FlashcardNavigationProps) => {
  // Format the interval text
  const getIntervalText = () => {
    if (!interval) return '';
    if (interval === 1) {
      return '1 day';
    } else if (interval < 30) {
      return `${interval} days`;
    } else if (interval < 365) {
      const months = Math.floor(interval / 30);
      return `${months} ${months === 1 ? 'month' : 'months'}`;
    } else {
      const years = Math.floor(interval / 365);
      return `${years} ${years === 1 ? 'year' : 'years'}`;
    }
  };

  // Format the due date
  const getDueDateText = () => {
    if (!dueDate) return '';
    return formatDistanceToNow(dueDate, {
      addSuffix: true
    });
  };
  return <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full bg-transparent text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors" onClick={onPrevious}>
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
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full bg-transparent text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors" onClick={onNext}>
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
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full bg-transparent text-gray-700 hover:bg-red-100 hover:text-red-600 transition-colors" onClick={onSkip}>
                  <X size={18} />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-white border border-gray-200 text-gray-800 rounded-md p-2 shadow-lg">
                <p>Skip this card (X key)</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <span className="text-gray-600 text-sm">Again</span>
        </div>
        
        {/* Interval information */}
        {interval && dueDate && <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar size={14} className="text-gray-500" />
            <span className="text-base font-normal">Review {getDueDateText()}</span>
            <Badge variant="outline" className="bg-gray-100 text-gray-600 border-gray-200 text-[10px]">
              {getIntervalText()}
            </Badge>
          </div>}
        
        <div className="flex items-center gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" className="text-green-600 hover:text-green-700 hover:bg-green-50 transition-colors" onClick={onReview}>
                  <Check size={18} className="mr-1" />
                  <span className="text-sm">Add to reviews</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-white border border-gray-200 text-gray-800 rounded-md p-2 shadow-lg">
                <p>Add to reviews (Space key)</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full bg-transparent text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors">
                  <MoreHorizontal size={18} />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-white border border-gray-200 text-gray-800 rounded-md p-2 shadow-lg">
                <p>More options</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>;
};
export default FlashcardNavigation;