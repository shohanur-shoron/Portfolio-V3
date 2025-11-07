import { HeroGeometric } from "./ui/shape-landing-hero";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <HeroGeometric 
        badge="Open Source"
        title1="Hi I'm"
        title2="Shohanur Rahman"
        description="Build exceptional products that users love with our comprehensive component library and design system."
      />
    </div>
  );
}