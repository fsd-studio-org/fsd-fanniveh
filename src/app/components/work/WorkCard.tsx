"use client"

import FSDImage from "@/components/template/ui/FSDImage";
import { Highlight } from "@/components/ui/Highlight";
import { GoArrowRight } from "react-icons/go";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

interface WorkCardProps {
    title: string;
    className?: string;
    href: string;
    src?: string;
    alt?: string;
    style?: 'accent-1' | 'accent-2';
    skills?: string[];
}

const MAX_VISIBLE_SKILLS = 3;

export default function WorkCard({ title, className = "", href, src = "/template/600x400.png", alt = "no alt", style, skills = [] }: WorkCardProps) {
    const bgClass = style ? `bg-${style}-dark` : 'bg-accent-1-dark';
    const cardRef = useRef<HTMLDivElement>(null);
    const arrowRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const timelineRef = useRef<gsap.core.Timeline | null>(null);

    useGSAP(() => {
        const mm = gsap.matchMedia();

        const card = cardRef.current;
        const arrow = arrowRef.current;

        if (!card || !arrow) return;
        
        const listItems = card.querySelectorAll('ul li');

        const tlFn = (tl: any, autoplay = true) => {
            tl.to(titleRef.current, {
                y: -30,
                duration: 0.3,

            }, 0)

            tl.fromTo(arrow, {
                x: 100,
                opacity: 0
            }, {
                x: 0,
                duration: 0.4,
                opacity: 100
            }, 0)


            tl.to(listItems, {
                scale: 1,
                y: -15,
                opacity: 1,
                duration: 0.2,
                stagger: 0.1,
            }, 0)

            timelineRef.current = tl;
            if (autoplay) {
                tl.pause();
                tl.play();
            }
        }

        mm.add("(min-width:768px)", () => {
            const handleMouseEnter = () => {
                if (timelineRef.current) {
                    timelineRef.current.play();
                } else {
                    const tl = gsap.timeline()
                    
                    tlFn(tl);
                }
            };

            const handleMouseLeave = () => {
                if (timelineRef.current) {
                    timelineRef.current.delay(0.6)
                    timelineRef.current.reverse();
                }
            };

            card.addEventListener('mouseenter', handleMouseEnter);
            card.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                card.removeEventListener('mouseenter', handleMouseEnter);
                card.removeEventListener('mouseleave', handleMouseLeave);
            };
        })    
        
        mm.add("(max-width:1024px)", () => {
            const tl = gsap.timeline({ paused: true });
            tlFn(tl, false);

            ScrollTrigger.create({
                trigger: card,
                start: "top 80%",
                end: "top 20%",
                scrub: 0.8,
                animation: tl,
                onLeave: () => tl.reverse(),
            });
        })    
    }, []);

    return (
        <Link className={`${className}`} href={href}>
            <div ref={cardRef} className={`work-card relative overflow-hidden ${bgClass} rounded-[30px]`}>
                <div ref={arrowRef} className="absolute top-5 opacity-0 right-5 p-2 bg-accent-1 rounded-2xl">
                    <GoArrowRight className="text-black w-6 h-6"/>
                </div>

                <h3 ref={titleRef} className='text-4xl text-center w-full absolute bottom-6 right-1/2 translate-x-1/2 font-secondary text-white'>{title}</h3>

                <ul className="absolute bottom-0 right-1/2 translate-x-1/2 flex gap-2">
                    {skills.slice(0, MAX_VISIBLE_SKILLS).map((skill, i) => (
                        <li
                            key={skill}
                            className={`scale-0 ${i === 0 ? 'rotate-3!' : i === MAX_VISIBLE_SKILLS - 1 ? '-rotate-3!' : 'mt-1'}`}
                        >
                            <Highlight>{skill}</Highlight>
                        </li>
                    ))}
                    {skills.length > MAX_VISIBLE_SKILLS && (
                        <li className="mt-1 scale-0">
                            <Highlight>+{skills.length - MAX_VISIBLE_SKILLS}</Highlight>
                        </li>
                    )}
                </ul>
                <FSDImage src={src} className="lg:h-90 w-full aspect-auto lg:w-auto" alt={alt} />
            </div>
        </Link>
    );
}
