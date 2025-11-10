
import React from 'react';
import type { Post } from './Blog';
import ExploreAllButton from './ui/explore-all-button';
import BlogPostCard from './BlogPostCard';
import useIntersectionObserver from './hooks/useIntersectionObserver';

interface BlogListProps {
  posts: Post[];
}
const FeaturedPost: React.FC<{ post: Post;}> = ({ post }) => {
    const { ref, isIntersecting } = useIntersectionObserver<HTMLAnchorElement>({ threshold: 0.1 });

    return (
        <a
            href={`/blog/${post.id}`}
            ref={ref}
            className={`cursor-pointer group grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12 items-center mb-16 lg:mb-24 transition-all duration-700 ease-in-out ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} border border-white p-6 rounded-lg`}
        >
            <div className="md:col-span-3 overflow-hidden rounded-lg">
                <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
            </div>
            <div className="md:col-span-2">
                <p className="text-sm text-stone-500 dark:text-stone-400 mb-2">Featured Post</p>
                <h2 className="text-3xl lg:text-4xl font-serif text-stone-800 dark:text-stone-100 mb-4 transition-colors duration-300 group-hover:text-stone-900 dark:group-hover:text-white">{post.title}</h2>
                <p className="text-stone-600 dark:text-stone-300 mb-4 leading-relaxed">{post.summary}</p>
                 <p className="text-sm text-stone-400 dark:text-stone-500">{post.date}</p>
            </div>
        </a>
    );
};


const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  const { ref: headerRef, isIntersecting: isHeaderVisible } = useIntersectionObserver<HTMLDivElement>({ threshold: 0.5 });
  const featuredPost = posts.find(p => p.featured);
  const regularPosts = posts.filter(p => !p.featured);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <header ref={headerRef} className={`text-center mb-16 lg:mb-24 transition-opacity duration-1000 ${isHeaderVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-stone-800 dark:text-stone-100 tracking-tight">Blog & Notes</h1>
        <p className="mt-4 text-lg text-stone-500 dark:text-stone-400 max-w-2xl mx-auto">Reflections, experiments, and thoughts in progress.</p>
        <div className={`relative mt-6 mx-auto w-24 h-px bg-stone-300 dark:bg-stone-700`}>
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 h-full bg-stone-500 dark:bg-stone-500 transition-all duration-1000 ${isHeaderVisible ? 'w-full' : 'w-0'}`}/>
        </div>
      </header>

      {featuredPost && <FeaturedPost post={featuredPost} />}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {regularPosts.map((post, index) => (
          <BlogPostCard key={post.id} post={post} index={index} />
        ))}
      </div>
       <div className="mt-16 flex justify-center">
        <ExploreAllButton href="/blog" />
      </div>
    </div>
  );
};

export default BlogList;
