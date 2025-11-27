import { Scan, Sparkles, History, Palette, Zap, Shield, Layers, Smartphone } from "lucide-react";

const features = [
  {
    icon: Scan,
    title: "Advanced QR Scanning",
    description: "Real-time camera scanning with support for QR codes, barcodes, and multiple formats. Scan from camera or gallery images instantly.",
    gradient: "from-purple-start to-purple-mid"
  },
  {
    icon: Sparkles,
    title: "8 Generation Categories",
    description: "Create QR codes for Clipboard, URL, Contact, Email, WhatsApp, Phone, Calendar Events, and WiFi with beautiful templates.",
    gradient: "from-purple-mid to-purple-end"
  },
  {
    icon: Palette,
    title: "Beautiful Customization",
    description: "Choose from stunning color palettes and add category icons to your QR codes. Make your codes stand out with professional design.",
    gradient: "from-purple-end to-blue-accent"
  },
  {
    icon: History,
    title: "Smart History",
    description: "Automatically save all scanned QR codes with timestamps. Search, filter, and manage your QR code history effortlessly.",
    gradient: "from-blue-accent to-purple-start"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance with debounced scanning, efficient processing, and battery-friendly operation for smooth experience.",
    gradient: "from-purple-start to-green-success"
  },
  {
    icon: Shield,
    title: "Privacy Focused",
    description: "All data stored locally on your device with Realm database. No cloud sync, no data collection - your privacy is guaranteed.",
    gradient: "from-green-success to-purple-mid"
  },
  {
    icon: Layers,
    title: "Modern Design",
    description: "Glassmorphic UI with smooth animations powered by React Native Reanimated. Professional gradients and edge-to-edge display.",
    gradient: "from-purple-mid to-blue-accent"
  },
  {
    icon: Smartphone,
    title: "Offline Support",
    description: "Generate and scan QR codes without internet connection. All core features work perfectly offline for maximum reliability.",
    gradient: "from-blue-accent to-purple-end"
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/20" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Powerful Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to scan, generate, and share QR codes professionally
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="glass rounded-2xl p-6 hover-glow transition-all duration-300 hover:scale-105 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
