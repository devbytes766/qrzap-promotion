import { Button } from "@/components/ui/button";
import { Download, Smartphone, Apple } from "lucide-react";

const DownloadCTA = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-start/20 via-purple-mid/20 to-blue-accent/20" />
      
      {/* Animated orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-mid/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="glass rounded-3xl p-12 lg:p-16 hover-glow">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Download QRZap today and experience the fastest, most beautiful QR code app for Android
          </p>
          
          {/* Download buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 py-6 h-auto hover-glow group w-full sm:w-auto"
              asChild
            >
              <a href="https://play.google.com/store/apps/details?id=com.devbytes.qrzap.app&hl=en" target="_blank" rel="noopener noreferrer">
                <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Download for Android
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              disabled
              className="text-lg px-8 py-6 h-auto glass w-full sm:w-auto opacity-50"
            >
              <Apple className="w-5 h-5 mr-2" />
              Coming Soon for iOS
            </Button>
          </div>
          
          {/* Version info */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4" />
              <span>Version 1.0.30</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground/50" />
            <span>Android 15 Compatible</span>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground/50" />
            <span>Free to Download</span>
          </div>
          
          {/* QR code placeholder */}
          <div className="mt-12 inline-block">
            <div className="glass rounded-2xl p-6">
              <div className="w-32 h-32 bg-gradient-primary/10 rounded-xl flex items-center justify-center mb-2">
                <Smartphone className="w-12 h-12 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">Scan to Download</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;
