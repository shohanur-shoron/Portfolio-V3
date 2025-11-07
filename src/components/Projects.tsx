
import { HoverEffect } from "./ui/card-hover-effect";

export function Projects() {
  return (
    <div className="max-w-7xl mx-auto w-full">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    image: "https://picsum.photos/seed/heatmap/600/400",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
    image: "https://picsum.photos/seed/heatmap/600/400",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
    image: "https://picsum.photos/seed/heatmap/600/400",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
    image: "https://picsum.photos/seed/heatmap/600/400",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology companyoud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
    image: "https://picsum.photos/seed/heatmap/600/400",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that , and related services.",
    link: "https://microsoft.com",
    image: "https://picsum.photos/seed/heatmap/600/400",
  },
  {
    title: "Apple",
    description:
      "A multinational technology company that designs, develops, and sells consumer electronics, computer software, and online services.",
    link: "https://apple.com",
    image: "https://picsum.photos/seed/heatmap/600/400",
  },
  {
    title: "Tesla",
    description:
      "An American electric vehicle and clean energy company based in Austin, Texas.",
    link: "https://tesla.com",
    image: "https://picsum.photos/seed/heatmap/600/400",
  },
];
