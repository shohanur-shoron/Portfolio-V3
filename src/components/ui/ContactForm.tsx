

import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";
import { Textarea } from "./textarea";

const formSchema = z.object({
  name: z.string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z.string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  message: z.string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
});

type FormData = z.infer<typeof formSchema>;

export const ContactForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  const onSubmit = async (data: FormData) => {
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      console.log("Form submitted:", data);
      
      toast.success("Message sent successfully!", {
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      reset();
    } catch (error) {
      toast.error("Something went wrong", {
        description: "Please try again later.",
      });
    }
  };

  return (
    <div
      ref={formRef}
      className={`w-full transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <Label 
            htmlFor="name" 
            className="text-foreground/80 text-sm font-medium"
          >
            Name
          </Label>
          <Input
            id="name"
            {...register("name")}
            placeholder="Your name"
            className="bg-secondary/50 border-border/50 focus:border-accent input-focus-glow placeholder:text-muted-foreground/40 h-12 transition-all duration-300"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p 
              id="name-error" 
              className="text-destructive text-sm animate-fade-in"
              role="alert"
            >
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label 
            htmlFor="email" 
            className="text-foreground/80 text-sm font-medium"
          >
            Email
          </Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="your.email@example.com"
            className="bg-secondary/50 border-border/50 focus:border-accent input-focus-glow placeholder:text-muted-foreground/40 h-12 transition-all duration-300"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p 
              id="email-error" 
              className="text-destructive text-sm animate-fade-in"
              role="alert"
            >
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label 
            htmlFor="message" 
            className="text-foreground/80 text-sm font-medium"
          >
            Message
          </Label>
          <Textarea
            id="message"
            {...register("message")}
            placeholder="Your message here..."
            rows={6}
            className="bg-secondary/50 border-border/50 focus:border-accent input-focus-glow placeholder:text-muted-foreground/40 resize-none transition-all duration-300"
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p 
              id="message-error" 
              className="text-destructive text-sm animate-fade-in"
              role="alert"
            >
              {errors.message.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 bg-accent text-accent-foreground hover:bg-accent/90 font-medium tracking-wide transition-all duration-300 hover:shadow-elegant disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
};