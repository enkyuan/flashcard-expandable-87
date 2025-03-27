
import React from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface FlashcardSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  deckTitle?: string;
  deckDescription?: string;
}

const FlashcardSidebar = ({ isOpen, onClose, deckTitle, deckDescription }: FlashcardSidebarProps) => {
  return (
    <>
      {/* Sidebar Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 animate-fade-in"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 bottom-0 w-80 bg-white border-r border-gray-200 z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-3 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-gray-800 font-medium">Flashcards</h3>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 bg-transparent text-gray-500 hover:bg-gray-100 transition-colors"
            onClick={onClose}
          >
            <X size={18} />
          </Button>
        </div>
        
        <div className="p-4">
          {deckTitle && (
            <h2 className="text-lg font-medium text-gray-800 mb-2">{deckTitle}</h2>
          )}
          
          {deckDescription && (
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">{deckDescription}</p>
          )}
          
          <div className="border-t border-gray-200 pt-4 mt-4">
            <Button 
              variant="outline" 
              className="w-full justify-start text-gray-700 bg-white border-gray-200 hover:bg-gray-50 transition-colors mb-2"
            >
              Open sidebar (⌘+1)
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full justify-start text-gray-700 bg-white border-gray-200 hover:bg-gray-50 transition-colors"
            >
              Import cards
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlashcardSidebar;
