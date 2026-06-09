"use client"

import Button from "@/components/template/ui/Button";
import { Highlight } from "@/components/ui/Highlight";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useRef } from "react";

export default function Text() {
    const titleRef = useRef(null)
    const bodyRef = useRef(null)

    useGSAP(() => {
        gsap.from(titleRef.current, { x: 500, duration: 0.9, ease: "power1.out" });
        gsap.from(bodyRef.current, { x: 350, duration: 0.9, ease: "power1.out" });
    }, []);

    return (
        <div className='ms-0 md:-mt-18 w-fit'>
            <h1 ref={titleRef} className='text-4xl w-fit md:text-5xl lg:text-7xl mb-6 font-primary-regular'>
                <span className='md:-ms-20 w-fit md:block'>AI <span className="md:text-4xl lg:text-5xl">with</span></span> <span className='italic border-b md:border-0'>Passion</span>
            </h1>
            <div className="w-fit" ref={bodyRef}>
                <p className='sm:text-justify leading-8.5 w-fit'>With my background in <Highlight>AI and Data Science</Highlight>, I try to bring <Highlight variant="blue">passion, knowledge, and joy</Highlight>, to build a better tomorrow.</p>

                <a href="#Work">
                    <Button className="mt-4">Check my work</Button>
                </a>
            </div>
        </div>
    );
};
