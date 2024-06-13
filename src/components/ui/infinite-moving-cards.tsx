"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    name: string | JSX.Element;
    quote: string | JSX.Element;
    title: string | JSX.Element;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] max-[768px]:[mask-image:unset]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-[2.4rem] max-[768px]:gap-[1.6rem] w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl flex-shrink-0 
            px-[48px] py-8  
            md:w-[450px] max-[1200px]:px-8 
            max-[1200px]:py-6 max-[992px]:w-[400px] max-[576px]:w-[350px]
            max-[576px]:p-4 max-[375px]:w-[300px] newspaper-item"
            key={item.name as any}
          >
						<span className="bgBox"></span>
            <blockquote className="flex flex-col h-full">
              <span
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></span>
              <span className="relative z-20 text-sm leading-[1.6] font-normal">
                {item.name}
              </span>
              <span className="relative z-20 mt-4 flex flex-row items-center h-full">
                <span className="flex flex-col gap-2 h-full">
                  <span className="text-sm leading-[1.6] font-normal">
                    {item.quote}
                  </span>
                  <span className="text-sm leading-[1.6] font-normal mt-auto">
                    {item.title}
                  </span>
                </span>
              </span>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
