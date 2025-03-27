
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { ChevronDown, ChevronUp, MoreHorizontal } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

export interface FlashcardProps {
  question: string;
  answer: string;
  tags?: string[];
  onNextCard?: () => void;
}

const Flashcard = ({ question, answer, tags = [], onNextCard }: FlashcardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flashcard-container w-full max-w-lg mx-auto">
      <Card 
        className={cn(
          "flashcard bg-white border border-gray-200 rounded-md overflow-hidden",
          "transition-all duration-300 ease-out cursor-pointer",
          isExpanded ? "shadow-lg" : "shadow-md hover:shadow-lg"
        )} 
        onClick={toggleExpand}
      >
        <div className="relative px-6 py-8">
          {/* Top options */}
          <div className="absolute top-2 right-2">
            <MoreHorizontal size={18} className="text-gray-500 opacity-70 hover:opacity-100 transition-opacity" />
          </div>

          {/* Question */}
          <div className="flex items-center justify-center min-h-[120px]">
            <p className="text-xl text-center text-gray-800 font-medium">{question}</p>
          </div>

          {/* Divider - only visible when expanded */}
          {isExpanded && (
            <div className="my-3">
              <div className="dashed-divider animate-fade-in" />
            </div>
          )}

          {/* Answer - only visible when expanded */}
          <div 
            className={cn(
              "flashcard-answer overflow-hidden",
              isExpanded 
                ? "max-h-[500px] opacity-100 animate-slide-up" 
                : "max-h-0 opacity-0"
            )}
          >
            <div className="pt-4 pb-2">
              <p className="text-center text-gray-700">{answer}</p>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="px-4 py-3 bg-gray-50 flex items-center justify-between">
          {!isExpanded ? (
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <ChevronDown size={16} />
              <span>Next Side</span>
              <Badge variant="outline" className="ml-1 text-[10px] uppercase px-2 py-0 h-5 tracking-wide bg-transparent border-gray-300 text-gray-500">
                SPACE
              </Badge>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Press</span>
              <Badge variant="outline" className="ml-1 text-[10px] uppercase px-2 py-0 h-5 tracking-wide bg-transparent border-gray-300 text-gray-500">
                SPACE
              </Badge>
              <span>to add to reviews, or</span>
              <Badge variant="outline" className="ml-1 text-[10px] uppercase px-2 py-0 h-5 tracking-wide bg-transparent border-gray-300 text-gray-500">
                F
              </Badge>
              <span>review again.</span>
              <span className="ml-1 cursor-pointer" onClick={(e) => e.stopPropagation()}>×</span>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default Flashcard;
