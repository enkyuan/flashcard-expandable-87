
import React from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface FlashcardSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const FlashcardSidebar = ({ isOpen, onClose }: FlashcardSidebarProps) => {
  return (
    <>
      {/* Sidebar Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 bottom-0 w-64 bg-[#232323] border-r border-flashcard-border z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-3 border-b border-flashcard-border flex justify-between items-center">
          <h3 className="text-flashcard-text font-medium">Flashcards</h3>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 bg-transparent text-flashcard-secondary hover:bg-[#333333] transition-colors"
            onClick={onClose}
          >
            <X size={18} />
          </Button>
        </div>
        
        <div className="p-4">
          <Button 
            variant="outline" 
            className="w-full justify-start text-flashcard-text bg-[#2A2A2A] border-flashcard-border hover:bg-[#333333] transition-colors"
          >
            Open sidebar
          </Button>
          
          <div className="mt-4 text-sm text-flashcard-secondary opacity-70">
            ⌘+1
          </div>
        </div>
      </div>
    </>
  );
};

export default FlashcardSidebar;
