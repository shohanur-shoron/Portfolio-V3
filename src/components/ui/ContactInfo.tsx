import { Mail, Phone, MapPin, Linkedin, Github, Facebook } from "lucide-react";

export const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@example.com",
      href: "mailto:hello@example.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourprofile",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/yourprofile",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://facebook.com/yourprofile",
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in-up">
      <div className="space-y-6">
        {contactDetails.map((detail) => {
          const Icon = detail.icon;
          const content = (
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-accent/20 group-hover:scale-110">
                <Icon className="w-5 h-5 text-accent" />
              </div>
              <div className="flex-1 pt-1 text-left">
                <p className="text-sm text-muted-foreground mb-1 ">{detail.label}</p>
                <p className="text-foreground font-medium transition-colors ">
                  {detail.value}
                </p>
              </div>
            </div>
          );

          return detail.href ? (
            <a
              key={detail.label}
              href={detail.href}
              className="block transition-transform duration-300 hover:translate-x-1"
            >
              {content}
            </a>
          ) : (
            <div 
              key={detail.label} 
              className="transition-transform duration-300 hover:translate-x-1"
            >
              {content}
            </div>
          );
        })}
      </div>

      <div className="pt-8 border-t border-border/50">
        <div className="flex gap-3">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-11 h-11 rounded-lg bg-secondary/50 border border-border/50 flex items-center justify-center transition-all duration-300 hover:bg-accent/10 hover:border-accent/50 hover:scale-110 hover:shadow-glow"
              >
                <Icon className="w-5 h-5 text-muted-foreground transition-colors duration-300 hover:text-accent" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};