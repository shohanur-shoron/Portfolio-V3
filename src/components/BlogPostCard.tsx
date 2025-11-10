
import React from 'react';
import type { Post } from './Blog';
import useIntersectionObserver from './hooks/useIntersectionObserver';

interface BlogPostCardProps {
  post: Post;
  index: number;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, index }) => {
  const { ref, isIntersecting } = useIntersectionObserver<HTMLAnchorElement>({ threshold: 0.1 });
  const animationDelay = `${index * 100}ms`;

  return (
    <a
      href={`/blog/${post.id}`}
      ref={ref}
      className={`group cursor-pointer bg-transparent rounded-lg shadow-sm overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} flex flex-col border border-white`}
      style={{ transitionDelay: isIntersecting ? animationDelay : '0ms' }}
    >
      <div className="p-4">
        <div className="overflow-hidden rounded-lg">
            <img
              className="w-full h-48 object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
              src={post.imageUrl}
              alt={post.title}
            />
        </div>
      </div>
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
            <div className="flex items-center space-x-2 mb-4">
                {post.tags.map((tag) => (
                    <span key={tag} className="inline-block bg-stone-100 dark:bg-stone-700 text-stone-600 dark:text-stone-300 text-xs font-medium px-2.5 py-1 rounded-full">
                        {tag}
                    </span>
                ))}
            </div>
            <h3 className="text-left text-xl font-serif font-semibold text-stone-800 dark:text-stone-100 transition-colors duration-300 group-hover:text-stone-900 dark:group-hover:text-white mb-2">
              {post.title}
            </h3>
            <p className="text-left text-stone-500 dark:text-stone-400 text-sm leading-relaxed line-clamp-3 mb-4">
              {post.summary}
            </p>
        </div>
        <p className="text-left text-xs text-stone-400 dark:text-stone-500 mt-auto">{post.date}</p>
      </div>
    </a>
  );
};

export default BlogPostCard;
