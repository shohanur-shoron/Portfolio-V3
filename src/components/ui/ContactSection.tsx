import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";

export const ContactSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-7xl">
        <div className="mb-16 text-center space-y-4 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-serif font-semibold text-foreground tracking-tight">
            Get in Touch
          </h1>
          <div className="w-16 h-0.5 bg-accent mx-auto" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Feel free to reach out. I'm always open to conversation, collaboration, or new ideas.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Left side - Contact Information */}
          <div className="order-2 md:order-1 md:col-span-2">
            <ContactInfo />
          </div>

          {/* Right side - Contact Form */}
          <div 
            className="order-1 md:order-2 md:col-span-3 bg-card border border-border/50 rounded-2xl p-8 md:p-10 shadow-elegant backdrop-blur-sm"
            style={{ animationDelay: "0.2s" }}
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};