import * as React from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedFeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  index: string;
  tag: string;
  title: string;
  imageSrc: string;
  color: "orange" | "purple" | "blue";
}

const colorVariants = {
  orange: {
    '--feature-color': 'hsl(35, 91%, 65%)',
    '--feature-color-light': 'hsl(35, 91%, 65%, 0.2)',
    '--feature-color-dark': 'hsl(35, 91%, 65%, 0.9)',
  },
  purple: {
    '--feature-color': 'hsl(262, 85%, 70%)',
    '--feature-color-light': 'hsl(262, 85%, 70%, 0.2)',
    '--feature-color-dark': 'hsl(262, 85%, 70%, 0.9)',
  },
  blue: {
    '--feature-color': 'hsl(211, 100%, 70%)',
    '--feature-color-light': 'hsl(211, 100%, 70%, 0.2)',
    '--feature-color-dark': 'hsl(211, 100%, 70%, 0.9)',
  },
} as const;

const cardVariants: Variants = {
  initial: { 
    y: 0,
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
  },
  hover: { 
    y: -10,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
  },
};

const imageVariants: Variants = {
  initial: { scale: 1, y: 0 },
  hover: { scale: 1.3, y: -20 },
};

const AnimatedFeatureCard = React.forwardRef<HTMLDivElement, AnimatedFeatureCardProps>(
  ({ className, index, tag, title, imageSrc, color, ...props }, ref) => {
    const cardStyle = {
      ...colorVariants[color],
    } as React.CSSProperties;

    return (
      <motion.div
        ref={ref}
        style={cardStyle}
        className={cn(
          "relative flex h-[380px] w-full max-w-sm flex-col justify-end overflow-hidden rounded-2xl border border-white/10 bg-card p-6 shadow-sm",
          className
        )}
        initial="initial"
        whileHover="hover"
        variants={cardVariants}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <div
          className="absolute inset-0 z-0 opacity-30 dark:opacity-10"
          style={{
            background: `radial-gradient(circle at 50% 30%, var(--feature-color) 0%, transparent 70%)`
          }}
        />
        
        <div className="absolute top-6 left-6 font-mono text-lg font-bold text-white/80">
          {index}
        </div>

        <motion.div 
          className="absolute inset-0 z-30 flex items-start justify-center pt-12"
          variants={imageVariants}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <img
            src={imageSrc}
            alt={tag}
            className="w-56 h-56 object-contain"
          />
        </motion.div>
        
        <div className="relative z-20 mt-auto">
          <div className="rounded-lg bg-black/50 p-5 backdrop-blur-sm">
            <span
              className="mb-3 inline-block rounded-full bg-white px-4 py-1.5 text-sm font-medium"
              style={{ color: `var(--feature-color)` }}
            >
              {tag}
            </span>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
          </div>
        </div>
      </motion.div>
    );
  }
);

AnimatedFeatureCard.displayName = "AnimatedFeatureCard";

export { AnimatedFeatureCard };