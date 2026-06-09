"use client"

import FSDImage from "@/components/template/ui/FSDImage";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from "react";

export default function Photo() {
    const boxRef = useRef(null)

    useGSAP(() => {
        gsap.from(boxRef.current, { x: -500, duration: 0.9, ease: "power1.out" });
    }, []);

    return (
        <div ref={boxRef} className='max-w-90 md:max-w-120 md:w-full h-fit aspect-12/7 bg-primary relative rounded-t-[800px] rounded-[100px]'>
            <FSDImage className='rotate-y-180 absolute bottom-0 w-[70%] left-[16%]' src='/images/Fanni-hero.png'></FSDImage>
        </div>
    );
};
