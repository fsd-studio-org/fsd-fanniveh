"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

type TitleProps = {
  children: React.ReactNode;
  className?: string;
  animation?: boolean;
}

export function Title({ children, className = "", animation = true }: TitleProps) {
  gsap.registerPlugin(ScrollTrigger)
  const titleRef = useRef(null)

  useGSAP(() => {
    if (animation) gsap.from(titleRef.current, { x: -500, opacity: 0, duration: 1.15, scrollTrigger: titleRef.current });
  }, []);

  return (
    <h2 ref={titleRef} className={`font-primary-regular text-4xl md:text-[50px] ${className}`}>
      {children}
    </h2>
  );
}

export function SubTitle({ children, className = "" }: TitleProps) {
  return (
    <h2  className={`font-primary-regular text-2xl md:text-4xl ${className}`}>
      {children}
    </h2>
  );
}
