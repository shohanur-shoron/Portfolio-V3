import cn from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    image?: string;
    tags: string[];
    primaryTag: string;
    rank: number;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-white block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5 }, // Enter animation is now almost instant
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.5, delay: 0.15 }, // Exit animation is smooth with a slight delay
                }}
              />
            )}
          </AnimatePresence>
          <Card item={item}>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  item,
}: {
  className?: string;
  children: React.ReactNode;
  item: {
    title: string;
    description: string;
    link: string;
    image?: string;
    tags: string[];
    primaryTag: string;
    rank: number;
  };
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50 flex flex-col h-full">
        {item.image && (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-40 object-cover rounded-md mb-2"
          />
        )}
        <div className="py-4 flex-grow">{children}</div>
        <div className="flex flex-wrap gap-2 mt-auto">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-800 text-white rounded-md text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-2", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};