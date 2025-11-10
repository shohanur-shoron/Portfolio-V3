
import React, { useEffect, useState } from 'react';
import type { Post } from './Blog';
import { ArrowLeftIcon } from './ui/icons';

interface BlogPostPageProps {
  post: Post;
  onBack: () => void;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ post, onBack }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`transition-opacity duration-700 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="relative">
            <img 
                src={post.imageUrl} 
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-stone-50/70 to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 md:-mt-32 relative pb-24">
            <button
                onClick={onBack}
                className="flex items-center gap-2 text-sm text-stone-500 hover:text-stone-800 transition-colors duration-300 mb-8"
            >
                <ArrowLeftIcon />
                Back to Blog
            </button>
            <article className="bg-stone-50/80 backdrop-blur-sm p-8 md:p-12 rounded-lg">
                <header className="text-center border-b border-stone-200 pb-8 mb-8">
                    <div className="flex justify-center items-center space-x-2 mb-4">
                        {post.tags.map((tag) => (
                            <span key={tag} className="inline-block bg-stone-100 text-stone-600 text-xs font-medium px-2.5 py-1 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif text-stone-800 tracking-tight leading-tight">
                        {post.title}
                    </h1>
                    <p className="mt-4 text-sm text-stone-400">{post.date}</p>
                </header>

                <div className="prose prose-stone max-w-prose mx-auto leading-relaxed">
                    {post.content.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </article>
        </div>
    </div>
  );
};

export default BlogPostPage;
