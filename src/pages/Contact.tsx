import { Mail, MessageSquare, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const Contact = () => {
  const [showEmailDetails, setShowEmailDetails] = useState(false);
  const [emailData, setEmailData] = useState({
    to: 'contact@pixiepilot.com',
    subject: '',
    body: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted!"); // Debug log
    
    // Get form data
    const formData = new FormData(e.target as HTMLFormElement);
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    
    console.log("Form data:", { firstName, lastName, email, subject, message }); // Debug log
    
    // Create email body with form data
    const emailBody = `Hello PixiePilot Team,

I'm reaching out regarding: ${subject}

Message:
${message}

Best regards,
${firstName} ${lastName}
${email}`;
    
    // Create mailto link
    const mailtoLink = `mailto:contact@pixiepilot.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    console.log("Mailto link:", mailtoLink); // Debug log
    
    // Try to open email client using window.open
    window.open(mailtoLink, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img 
                src="/logo.png" 
                alt="PixiePilot Logo" 
                className="w-12 h-12 rounded-lg"
              />
              <span className="text-white font-bold text-xl">PixiePilot</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Contact Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Have questions about PixiePilot? We'd love to hear from you. 
              Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-slate-900/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-gray-300">First Name</Label>
                      <Input 
                        id="firstName" 
                        name="firstName"
                        type="text" 
                        className="bg-slate-800 border-purple-500/20 text-white placeholder:text-gray-400"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-gray-300">Last Name</Label>
                      <Input 
                        id="lastName" 
                        name="lastName"
                        type="text" 
                        className="bg-slate-800 border-purple-500/20 text-white placeholder:text-gray-400"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-300">Email</Label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      className="bg-slate-800 border-purple-500/20 text-white placeholder:text-gray-400"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-gray-300">Subject</Label>
                    <Input 
                      id="subject" 
                      name="subject"
                      type="text" 
                      className="bg-slate-800 border-purple-500/20 text-white placeholder:text-gray-400"
                      placeholder="How can we help?"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-gray-300">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      className="bg-slate-800 border-purple-500/20 text-white placeholder:text-gray-400 min-h-[120px]"
                      placeholder="Tell us about your project or ask any questions..."
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-slate-900/50 border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Email</h3>
                      <p className="text-gray-300">contact@pixiepilot.com</p>
                      <p className="text-gray-400 text-sm">We typically respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Support</h3>
                      <p className="text-gray-300">For technical support and questions</p>
                      <p className="text-gray-400 text-sm">Available Monday - Friday, 9AM - 6PM CEST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Location</h3>
                      <p className="text-gray-300">Remote-first company</p>
                      <p className="text-gray-400 text-sm">Serving clients worldwide</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact Card */}
              <Card className="bg-gradient-to-br from-cyan-500/10 to-purple-600/10 border-purple-500/20">
                <CardContent className="p-6">
                  <h3 className="text-white font-semibold mb-3">Prefer to email directly?</h3>
                  <p className="text-gray-300 mb-4">
                    You can also send us an email directly at{' '}
                    <a 
                      href="mailto:contact@pixiepilot.com" 
                      className="text-cyan-400 hover:text-cyan-300 underline"
                    >
                      contact@pixiepilot.com
                    </a>
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-purple-500/20 text-white hover:bg-purple-500/10"
                    onClick={() => window.location.href = "mailto:contact@pixiepilot.com"}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Open Email Client
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 