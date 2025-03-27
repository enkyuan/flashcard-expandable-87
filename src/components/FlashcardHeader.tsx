
import React from 'react';
import { Button } from '@/components/ui/button';
import { SlidersHorizontal, PanelLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

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
    <div className="fixed top-0 left-0 right-0 py-2 px-4 bg-white border-b border-gray-200 z-10">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Button 
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            onClick={onOpenSidebar}
          >
            <PanelLeft size={18} />
          </Button>
          
          <Breadcrumb className="font-mono text-sm">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-gray-700">Decks</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-gray-900">{deckName}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        
        <div className="flex items-center space-x-5">
          <div className="flex items-center space-x-1">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-[13px] font-normal bg-transparent text-gray-700 hover:bg-gray-100 transition-colors flex items-center gap-1.5 h-7 px-2 rounded-md"
            >
              <SlidersHorizontal size={14} className="rotate-90" />
              <span>Sort</span>
            </Button>
            
            <div className="ml-1 text-gray-400 font-light">•</div>
            
            <Badge className="bg-transparent hover:bg-transparent text-gray-700 font-normal border-0 px-2 py-0 h-7 text-[13px]">
              {currentIndex} / {cardCount}
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashcardHeader;
