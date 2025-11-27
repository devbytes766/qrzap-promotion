import { Scan, Sparkles, Share2 } from "lucide-react";

const steps = [
  {
    icon: Scan,
    number: "01",
    title: "Scan QR Codes",
    description: "Point your camera at any QR code or select an image from your gallery. Instant detection with multiple format support.",
  },
  {
    icon: Sparkles,
    number: "02",
    title: "Generate QR Codes",
    description: "Choose from 8 categories and create beautiful QR codes in seconds. Customize colors and add category icons.",
  },
  {
    icon: Share2,
    number: "03",
    title: "Share Instantly",
    description: "Copy, share, or save your QR codes with one tap. All codes are automatically saved to your history.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-mid/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">How It Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to start creating and scanning QR codes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Connection line - hidden on mobile */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-blue-accent opacity-30" />
                )}
                
                <div className="relative glass rounded-2xl p-8 hover-glow transition-all duration-300 hover:scale-105">
                  {/* Number badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center font-bold text-lg shadow-glow">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 mx-auto">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-semibold mb-4 text-center text-foreground">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
