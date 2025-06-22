import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import WaitlistForm from "./WaitlistForm";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  trigger?: React.ReactNode;
}

const WaitlistModal = ({ isOpen, onClose, trigger }: WaitlistModalProps) => {
  const [isOpenState, setIsOpenState] = useState(false);

  const handleOpen = () => setIsOpenState(true);
  const handleClose = () => {
    setIsOpenState(false);
    onClose();
  };

  const handleSuccess = () => {
    // Close modal after successful submission
    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  return (
    <>
      {trigger && (
        <div onClick={handleOpen}>
          {trigger}
        </div>
      )}
      
      <Dialog open={isOpen || isOpenState} onOpenChange={handleClose}>
        <DialogContent className="bg-slate-900/95 border-purple-500/20 backdrop-blur-md max-w-md mx-auto">
          <DialogHeader className="relative">
            <DialogTitle className="text-2xl font-bold text-white text-center">
              Join the PixiePilot Waitlist
            </DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="absolute right-0 top-0 text-gray-400 hover:text-white"
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogHeader>
          
          <div className="mt-6">
            <p className="text-gray-300 text-center mb-6">
              Be among the first to experience the future of AI-powered 3D modeling. 
              Get early access when we launch!
            </p>
            
            <WaitlistForm onSuccess={handleSuccess} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WaitlistModal; 