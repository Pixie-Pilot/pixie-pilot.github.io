import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import WaitlistModal from "./WaitlistModal";

interface WaitlistButtonProps {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  className?: string;
  children?: React.ReactNode;
  showArrow?: boolean;
}

const WaitlistButton = ({ 
  variant = "default", 
  size = "default", 
  className = "",
  children = "Join Waitlist",
  showArrow = true 
}: WaitlistButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <Button
        variant={variant}
        size={size}
        onClick={handleOpenModal}
        className={className}
      >
        {children}
        {showArrow && <ArrowRight className="ml-2 h-4 w-4" />}
      </Button>
      
      <WaitlistModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default WaitlistButton; 