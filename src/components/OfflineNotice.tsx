
import React from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle, X } from 'lucide-react';

interface OfflineNoticeProps {
  onUpgrade: () => void;
  onDismiss: () => void;
}

const OfflineNotice = ({ onUpgrade, onDismiss }: OfflineNoticeProps) => {
  return (
    <div className="fixed bottom-16 left-0 right-0 p-4 z-20">
      <div className="max-w-screen-lg mx-auto">
        <div className="bg-[#323232] border border-[#424242] rounded-md p-3 shadow-lg flex items-center gap-3 animate-slide-up">
          <AlertTriangle size={18} className="text-[#F9A825]" />
          
          <div className="flex-1">
            <p className="text-flashcard-text font-medium text-sm">Offline trial period</p>
            <p className="text-flashcard-secondary text-xs">
              Changes may be lost. Subscribe to sync your data, or download the app to use offline.
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <Button 
              size="sm"
              className="bg-[#444444] hover:bg-[#555555] text-flashcard-text border-none text-sm px-3 h-8"
              onClick={onUpgrade}
            >
              Upgrade
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-flashcard-secondary hover:bg-[#3A3A3A] transition-colors"
              onClick={onDismiss}
            >
              <X size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfflineNotice;
