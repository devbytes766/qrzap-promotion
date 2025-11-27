import { Clock, Share2, FolderOpen, Palette, Layers, Zap, Shield, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Save Time",
    description: "Generate QR codes in seconds instead of manually typing information",
  },
  {
    icon: Share2,
    title: "Share Easily",
    description: "No more spelling out WiFi passwords or typing long URLs",
  },
  {
    icon: FolderOpen,
    title: "Stay Organized",
    description: "Automatic history with search and filter capabilities",
  },
  {
    icon: Palette,
    title: "Professional Look",
    description: "Beautiful, modern interface with customizable QR code colors",
  },
  {
    icon: Layers,
    title: "Versatile",
    description: "Works for contacts, WiFi, URLs, events, and more",
  },
  {
    icon: Zap,
    title: "Reliable",
    description: "Fast, accurate scanning with multiple format support",
  },
  {
    icon: Shield,
    title: "Privacy-Focused",
    description: "All data stored locally on your device - complete privacy",
  },
  {
    icon: DollarSign,
    title: "Free to Use",
    description: "Core features available at no cost - no hidden fees",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Why Choose QRZap</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The ultimate QR code solution designed for modern users
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="glass rounded-xl p-6 hover-glow transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
