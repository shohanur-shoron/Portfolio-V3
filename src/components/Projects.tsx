

import { HoverEffect } from "./ui/card-hover-effect";
import PillTabs from "./ui/pill-tabs";
import { useState } from "react";

export function Projects() {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabChange = (id: string) => {
    setActiveTab(id);
  };

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.primaryTag === activeTab);

  const sortedProjects = filteredProjects.sort((a, b) => a.rank - b.rank);

  return (
    <div className="max-w-7xl mx-auto w-full">
      <div className="mt-8 flex justify-center">
        <PillTabs onTabChange={handleTabChange} />
      </div>
      <HoverEffect items={sortedProjects} />
    </div>
  );
}
export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    image: "https://picsum.photos/seed/stripe/600/400",
    tags: ["web", "react", "next.js"],
    primaryTag: "web",
    rank: 1,
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
    image: "https://picsum.photos/seed/netflix/600/400",
    tags: ["web", "react", "next.js"],
    primaryTag: "web",
    rank: 2,
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
    image: "https://picsum.photos/seed/google/600/400",
    tags: ["ml", "tensorflow", "python"],
    primaryTag: "ml",
    rank: 3,
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
    image: "https://picsum.photos/seed/meta/600/400",
    tags: ["ml", "pytorch", "python"],
    primaryTag: "ml",
    rank: 4,
  },
  {
    title: "Amazon",
    description:
      "A multinational technology companyoud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
    image: "https://picsum.photos/seed/amazon/600/400",
    tags: ["embedded", "aws", "iot"],
    primaryTag: "embedded",
    rank: 5,
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that , and related services.",
    link: "https://microsoft.com",
    image: "https://picsum.photos/seed/microsoft/600/400",
    tags: ["research", "dotnet", "c#"],
    primaryTag: "research",
    rank: 6,
  },
  {
    title: "Apple",
    description:
      "A multinational technology company that designs, develops, and sells consumer electronics, computer software, and online services.",
    link: "https://apple.com",
    image: "https://picsum.photos/seed/apple/600/400",
    tags: ["embedded", "swift", "ios"],
    primaryTag: "embedded",
    rank: 7,
  },
  {
    title: "Tesla",
    description:
      "An American electric vehicle and clean energy company based in Austin, Texas.",
    link: "https://tesla.com",
    image: "https://picsum.photos/seed/tesla/600/400",
    tags: ["ml", "embedded", "python"],
    primaryTag: "ml",
    rank: 8,
  },
];
