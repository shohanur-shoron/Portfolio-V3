import React, { useState } from 'react';
import BlogList from './BlogList';
import BlogPostPage from './BlogPostPage';

export interface Post {
  id: number;
  title: string;
  summary: string;
  content: string[];
  date: string;
  tags: string[];
  imageUrl: string;
  featured: boolean;
}

export const blogPosts: Post[] = [
    {
        id: 1,
        title: "The Unseen Layers of Machine Learning",
        summary: "Beyond the algorithms and data, there's a layer of intuition and creativity that we seldom talk about. A few thoughts on the human element in AI.",
        content: [
            "The world of machine learning is often portrayed as a realm of pure logic, a place where algorithms and data reign supreme. While this is true to a large extent, it's not the whole picture. There's an unseen layer, a human element that shapes the entire process, from the way we frame problems to the way we interpret results.",
            "This human element is not just about writing code or tuning hyperparameters. It's about the intuition that guides us in choosing one model over another, the creativity that allows us to see patterns in the data that others might miss, and the empathy that enables us to build systems that are not only intelligent but also fair and ethical.",
            "In this post, I want to explore this human element in machine learning. I want to talk about the role of intuition, creativity, and empathy in building intelligent systems, and how we can cultivate these qualities in ourselves and in our teams."
        ],
        date: "October 26, 2025",
        tags: ["Machine Learning", "Reflections"],
        imageUrl: "https://picsum.photos/seed/ml/800/600",
        featured: true,
    },
    {
        id: 2,
        title: "Build Log: A Personal Portfolio",
        summary: "The process of building this portfolio has been a journey of discovery. Here’s a look at the tools, challenges, and little wins along the way.",
        content: [
            "Building a personal portfolio is a rite of passage for many developers. It's a chance to showcase your skills, experiment with new technologies, and create something that is uniquely yours. For me, this portfolio was all of that and more.",
            "In this build log, I want to take you behind the scenes and share the process of creating this website. I'll talk about the tools I used, the challenges I faced, and the little wins that kept me going. I'll also share some of the lessons I learned along the way, both about web development and about myself.",
            "Whether you're a seasoned developer or just starting out, I hope you'll find something of value in this build log. And if you're thinking about building your own portfolio, I hope this post will inspire you to take the leap."
        ],
        date: "October 15, 2025",
        tags: ["Build Log", "Web Dev"],
        imageUrl: "https://picsum.photos/seed/dev/800/600",
        featured: false,
    },
    {
        id: 3,
        title: "Notes on Stillness",
        summary: "In a world that moves so fast, finding moments of stillness is a practice. A personal reflection on slowing down and observing.",
        content: [
            "The world is a noisy place. We are constantly bombarded with information, notifications, and demands on our attention. In this environment, it can be difficult to find moments of stillness, moments when we can simply be present and observe the world around us.",
            "But these moments of stillness are essential for our well-being. They allow us to recharge our batteries, connect with our inner selves, and see the world with fresh eyes. They are also the source of our best ideas and our most creative work.",
            "In this post, I want to share some personal reflections on the practice of stillness. I'll talk about why it's so important, how to cultivate it in your own life, and the benefits it can bring."
        ],
        date: "September 28, 2025",
        tags: ["Life Notes"],
        imageUrl: "https://picsum.photos/seed/life/800/600",
        featured: false,
    },
    {
        id: 4,
        title: "The Poetics of Data",
        summary: "Can data be beautiful? Exploring the intersection of data visualization and art, and how we can tell more human stories with numbers.",
        content: [
            "Data is often seen as cold and impersonal. But what if we could see the poetry in the numbers? What if we could use data to tell stories that are not only informative but also beautiful and moving?",
            "This is the promise of data visualization. By transforming data into visual forms, we can reveal hidden patterns, make complex information more accessible, and create experiences that are both intellectually and emotionally engaging.",
            "In this post, I want to explore the intersection of data visualization and art. I'll share some of my favorite examples of poetic data visualizations, and I'll talk about how we can use data to tell more human stories."
        ],
        date: "September 10, 2025",
        tags: ["Data Science", "Art"],
        imageUrl: "https://picsum.photos/seed/data/800/600",
        featured: false,
    },
];

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const handleSelectPost = (post: Post) => {
    setSelectedPost(post);
  };

  const handleBack = () => {
    setSelectedPost(null);
  };

  if (selectedPost) {
    return <BlogPostPage post={selectedPost} onBack={handleBack} />;
  }

  return <BlogList posts={blogPosts} onSelectPost={handleSelectPost} />;
};

export default Blog;
