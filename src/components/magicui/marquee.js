"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

const Marquee = ({
  className,
  children,
  direction = "left",
  speed = 20,
  pauseOnHover = false,
  reverse = false,
  ...props
}) => {
  const containerRef = React.useRef(null);
  const [isHovered, setIsHovered] = React.useState(false);

  const animationDirection = React.useMemo(() => {
    if (direction === "up" || direction === "down") {
      return `var(--direction) ${speed}s linear infinite`;
    }
    return `var(--direction) ${speed}s linear infinite`;
  }, [direction, speed]);

  React.useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const contentWidth = container.children[0].scrollWidth;
    
    if (direction === "left" || direction === "right") {
      container.style.setProperty("--container-width", `${containerWidth}px`);
      container.style.setProperty("--content-width", `${contentWidth}px`);
    }
    
    container.style.setProperty(
      "--direction",
      reverse ? "reverse" : "normal"
    );
    
    container.style.setProperty(
      "--animation-duration",
      `${speed}s`
    );
  }, [direction, reverse, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "group flex overflow-hidden [--gap:1rem] [gap:var(--gap)]",
        direction === "left" || direction === "right"
          ? "flex-row"
          : "flex-col",
        className
      )}
      style={{
        maskImage:
          direction === "left" || direction === "right"
            ? "linear-gradient(to right, transparent, white 20%, white 80%, transparent)"
            : "linear-gradient(to bottom, transparent, white 20%, white 80%, transparent)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <div
        className={cn(
          "flex shrink-0 justify-around [gap:var(--gap)]",
          direction === "left" || direction === "right"
            ? "animate-marquee flex-row"
            : "animate-marquee-vertical flex-col"
        )}
        style={{
          animationPlayState: isHovered && pauseOnHover ? "paused" : "running",
        }}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex shrink-0 justify-around [gap:var(--gap)]",
          direction === "left" || direction === "right"
            ? "animate-marquee flex-row"
            : "animate-marquee-vertical flex-col"
        )}
        style={{
          animationPlayState: isHovered && pauseOnHover ? "paused" : "running",
        }}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
};

Marquee.displayName = "Marquee";

export { Marquee };
