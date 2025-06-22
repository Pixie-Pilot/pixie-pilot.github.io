import { useState } from "react";
import { useToast } from "./use-toast";

interface WaitlistData {
  name: string;
  email: string;
  company?: string;
  industry: string;
  useCase: string;
}

export const useWaitlist = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const submitWaitlist = async (data: WaitlistData) => {
    setIsSubmitting(true);
    
    try {
      // For now, we'll just log the data
      // In a real implementation, this would send to your backend or EmailJS
      console.log("Waitlist submission:", data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      toast({
        title: "Success!",
        description: "You've been added to our waitlist. We'll notify you when PixiePilot launches!",
      });
      
      return true;
    } catch (error) {
      console.error("Error submitting waitlist:", error);
      toast({
        title: "Error",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive",
      });
      
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setIsSubmitting(false);
  };

  return {
    isSubmitting,
    isSubmitted,
    submitWaitlist,
    resetForm,
  };
}; 