import { Clipboard, Link2, User, Mail, MessageCircle, Phone, Calendar, Wifi } from "lucide-react";

const categories = [
  {
    icon: Clipboard,
    name: "Clipboard",
    description: "Instantly generate QR codes from any copied text",
    color: "purple-start"
  },
  {
    icon: Link2,
    name: "URL",
    description: "Create QR codes for websites and links",
    color: "purple-mid"
  },
  {
    icon: User,
    name: "Contact",
    description: "Share complete vCard contact information",
    color: "purple-end"
  },
  {
    icon: Mail,
    name: "Email",
    description: "Pre-filled email with subject and message",
    color: "blue-accent"
  },
  {
    icon: MessageCircle,
    name: "WhatsApp",
    description: "Open WhatsApp chats with pre-filled messages",
    color: "green-success"
  },
  {
    icon: Phone,
    name: "Phone",
    description: "Generate QR codes for phone numbers",
    color: "purple-start"
  },
  {
    icon: Calendar,
    name: "Calendar",
    description: "Create QR codes for events with date and time",
    color: "purple-mid"
  },
  {
    icon: Wifi,
    name: "WiFi",
    description: "Share WiFi credentials securely via QR code",
    color: "blue-accent"
  },
];

const Categories = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">8 QR Code Categories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Generate professional QR codes for any use case with beautiful templates
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.name}
                className="relative group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="glass rounded-2xl p-6 h-full hover-glow transition-all duration-300 hover:scale-105 cursor-pointer">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {category.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Smart templates callout */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass">
            <span className="text-sm font-medium">✨ Smart Templates</span>
            <span className="text-sm text-muted-foreground">Pre-configured for common use cases</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
