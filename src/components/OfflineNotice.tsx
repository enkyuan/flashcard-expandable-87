
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
        <div className="bg-white border border-gray-200 rounded-md p-3 shadow-lg flex items-center gap-3 animate-slide-up">
          <AlertTriangle size={18} className="text-amber-500" />
          
          <div className="flex-1">
            <p className="text-gray-800 font-medium text-sm">Offline trial period</p>
            <p className="text-gray-500 text-xs">
              Changes may be lost. Subscribe to sync your data, or download the app to use offline.
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <Button 
              size="sm"
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 border-none text-sm px-3 h-8"
              onClick={onUpgrade}
            >
              Upgrade
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-gray-500 hover:bg-gray-100 transition-colors"
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
