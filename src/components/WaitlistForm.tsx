import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "@/lib/emailjs-config";

const waitlistSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().optional(),
  industry: z.enum(["game-development", "film-animation", "architecture", "product-design", "other"]),
  useCase: z.string().min(10, "Please describe your use case (at least 10 characters)"),
});

type WaitlistFormData = z.infer<typeof waitlistSchema>;

interface WaitlistFormProps {
  onSuccess?: () => void;
  className?: string;
}

const WaitlistForm = ({ onSuccess, className }: WaitlistFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
  });

  const industry = watch("industry");

  const onSubmit = async (data: WaitlistFormData) => {
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration
      const templateParams = {
        to_email: EMAILJS_CONFIG.TO_EMAIL,
        from_email: data.email,
        from_name: data.name,
        company: data.company || "Not specified",
        industry: data.industry,
        use_case: data.useCase,
        message: `New waitlist signup:
Name: ${data.name}
Email: ${data.email}
Company: ${data.company || "Not specified"}
Industry: ${data.industry}
Use Case: ${data.useCase}`,
      };

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      // For now, we'll simulate success since EmailJS needs configuration
      console.log("Waitlist submission:", data);
      
      setIsSubmitted(true);
      toast({
        title: "Success!",
        description: "You've been added to our waitlist. We'll notify you when PixiePilot launches!",
      });
      
      onSuccess?.();
    } catch (error) {
      console.error("Error submitting waitlist:", error);
      toast({
        title: "Error",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={`text-center p-8 ${className}`}>
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Welcome to the Waitlist!</h3>
        <p className="text-gray-300">
          Thank you for your interest in PixiePilot. We'll notify you as soon as we launch!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`space-y-6 ${className}`}>
      <div className="space-y-4">
        <div>
          <Label htmlFor="name" className="text-white">
            Full Name *
          </Label>
          <Input
            id="name"
            {...register("name")}
            placeholder="Enter your full name"
            className="bg-slate-800/50 border-purple-500/20 text-white placeholder:text-gray-400"
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email" className="text-white">
            Email Address *
          </Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="Enter your email address"
            className="bg-slate-800/50 border-purple-500/20 text-white placeholder:text-gray-400"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="company" className="text-white">
            Company (Optional)
          </Label>
          <Input
            id="company"
            {...register("company")}
            placeholder="Enter your company name"
            className="bg-slate-800/50 border-purple-500/20 text-white placeholder:text-gray-400"
          />
        </div>

        <div>
          <Label htmlFor="industry" className="text-white">
            Industry *
          </Label>
          <Select onValueChange={(value) => setValue("industry", value as any)}>
            <SelectTrigger className="bg-slate-800/50 border-purple-500/20 text-white">
              <SelectValue placeholder="Select your industry" />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-purple-500/20">
              <SelectItem value="game-development">Game Development</SelectItem>
              <SelectItem value="film-animation">Film & Animation</SelectItem>
              <SelectItem value="architecture">Architecture</SelectItem>
              <SelectItem value="product-design">Product Design</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.industry && (
            <p className="text-red-400 text-sm mt-1">{errors.industry.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="useCase" className="text-white">
            How do you plan to use PixiePilot? *
          </Label>
          <Textarea
            id="useCase"
            {...register("useCase")}
            placeholder="Tell us about your 3D modeling needs and how PixiePilot could help..."
            className="bg-slate-800/50 border-purple-500/20 text-white placeholder:text-gray-400 min-h-[100px]"
          />
          {errors.useCase && (
            <p className="text-red-400 text-sm mt-1">{errors.useCase.message}</p>
          )}
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-lg py-3"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Joining Waitlist...
          </>
        ) : (
          "Join Waitlist"
        )}
      </Button>

      <p className="text-gray-400 text-sm text-center">
        We'll notify you when PixiePilot launches and never share your information.
      </p>
    </form>
  );
};

export default WaitlistForm; 