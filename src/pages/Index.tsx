import { ArrowRight, Zap, Users, Globe, Star, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import WaitlistButton from "@/components/WaitlistButton";

const Index = () => {
  const features = [
    {
      icon: Play,
      title: "Full Control",
      description: "Pixie understands your intent, producing professional-quality results while keeping you at the wheel."
    },
    {
      icon: Users,
      title: "Industry-Focused",
      description: "Tailored for game developers and film studios with workflows that integrate seamlessly into existing pipelines."
    },
    {
      icon: Globe,
      title: "Seamless Integration",
      description: "Works with Maya and Blender with native plugins, with plans to expand to all major 3D modeling software including 3ds Max and Cinema 4D."
    }
  ];

  // Commented out testimonials since the product hasn't been released yet
  /*
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Lead 3D Artist, Nexus Games",
      content: "PixiePilot has revolutionized our character modeling workflow. What used to take days now takes hours.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "VFX Supervisor, Stellar Studios",
      content: "Pixie understands creative direction better than any tool I've used. It's like having a senior artist on demand.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      role: "Indie Game Developer",
      content: "As a solo developer, PixiePilot gives me the power of an entire 3D team. The results are consistently impressive.",
      rating: 5
    }
  ];
  */

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
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/features" className="text-gray-300 hover:text-white transition-colors">Features</Link>
              {/* <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a> */}
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              <WaitlistButton className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI-Powered
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"> 3D Modeling</span>
              <br />
              for the Future
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your creative vision into stunning 3D models with Pixie. 
              Built for game developers and film studios who demand excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <WaitlistButton 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-lg px-8 py-4 hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Revolutionizing 3D Creation
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Pixie doesn't just automate tasks, she understands your intent and brings your vision to life.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-slate-900/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover-scale">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Built for
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"> Professionals</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Whether you're creating the next blockbuster game or bringing cinematic visions to life, 
                PixiePilot understands the unique demands of your industry.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Video Game Development</h3>
                    <div className="text-gray-300 space-y-2">
                      <p>• Proposes LOD chains with multiple detail levels</p>
                      <p>• Optimizes topology for target triangle budgets</p>
                      <p>• Produces PBR-compliant materials and textures</p>
                      <p>• Exports game-ready FBX/GLTF for Unity/Unreal</p>
                      <p>• And more in progress!</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Film & Animation</h3>
                    <div className="text-gray-300 space-y-2">
                      <p>• Creates high-resolution models with subdivision-ready topology</p>
                      <p>• Produces UV layouts for VFX workflows</p>
                      <p>• Post-processed to produce cinematic quality edge flow for smooth deformations.</p>
                      <p>• Exports optimized formats for Maya and Blender.</p>
                      <p>• And more in progress!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-2xl p-8 border border-purple-500/20">
                <div className="w-full h-full bg-slate-800/50 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-gray-300">3D Model Preview</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Commented out since product hasn't been released */}
      {/*
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See how PixiePilot is transforming workflows at top studios and development teams worldwide.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-900/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover-scale">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">"{testimonial.content}"</p>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Be among the first to experience the future of 3D modeling. Join our waitlist to get early access when we launch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WaitlistButton 
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-lg px-8 py-4 hover-scale"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/logo.png" 
                  alt="PixiePilot Logo" 
                  className="w-12 h-12 rounded-lg"
                />
                <span className="text-white font-bold text-xl">PixiePilot</span>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Empowering creators with AI-driven 3D modeling solutions for the entertainment industry.
              </p>
              <p className="text-gray-400 text-sm">
                © 2025 PixiePilot. All rights reserved.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link to="/documentation" className="hover:text-white transition-colors">Documentation</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
