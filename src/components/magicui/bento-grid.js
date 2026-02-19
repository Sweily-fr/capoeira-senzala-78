import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ComponentPropsWithoutRef, ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const BentoGrid = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[18rem] sm:auto-rows-[20rem] lg:auto-rows-[22rem] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  ...props
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-1 sm:col-span-2 lg:col-span-3 flex flex-col overflow-hidden rounded-2xl border",
      "bg-gray-900 border-gray-800 transition-all duration-300 hover:border-primary/50",
      "transform-gpu hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10",
      "h-full flex flex-col",
      className,
    )}
    {...props}
  >
    {/* Image Section - Top */}
    <div className="relative h-48 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {background}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
      <div className="absolute top-4 right-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-white backdrop-blur-sm">
        <Icon className="h-6 w-6" />
      </div>
    </div>
    
    {/* Content Section - Bottom */}
    <div className="flex flex-1 flex-col justify-between p-6">
      <div className="mb-4">
        <h3 className="mb-2 text-xl font-bold text-white">
          {name}
        </h3>
        <p className="text-white/80">{description}</p>
      </div>

      <div className="mt-auto">
        <a 
          href={href}
          className="inline-flex items-center text-sm font-medium text-white hover:text-white/80 transition-colors"
        >
          {cta}
          <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
        </a>
      </div>
    </div>
  </div>
);

export { BentoCard, BentoGrid };
