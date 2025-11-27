import { Button } from "@/components/ui/button";
import { Smartphone, Download, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-start/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">Version 1.0.30 - Now Available</span>
        </div>
        
        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
          <span className="gradient-text">QRZap</span>
        </h1>
        
        <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground/90 mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Scan, Generate, Share
        </p>
        
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Your Ultimate QR Code Companion
        </p>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          The fastest, most beautiful QR code scanner and generator for Android. 
          Create and scan QR codes in seconds with professional results.
        </p>
        
        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 py-6 h-auto hover-glow group"
            asChild
          >
            <a href="https://play.google.com/store/apps/details?id=com.devbytes.qrzap.app&hl=en" target="_blank" rel="noopener noreferrer">
              <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Download on Play Store
            </a>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg px-8 py-6 h-auto glass hover:bg-card/50 group"
          >
            <Smartphone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            View Features
          </Button>
        </div>
        
        {/* App preview mockup placeholder */}
        <div className="relative max-w-4xl mx-auto animate-scale-in" style={{ animationDelay: "0.5s" }}>
          <div className="glass rounded-3xl p-8 hover-glow">
            <div className="aspect-video bg-gradient-primary rounded-2xl flex items-center justify-center">
              <Smartphone className="w-24 h-24 text-white/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
