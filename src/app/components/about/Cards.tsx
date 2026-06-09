"use client"

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import Card from './Card';

export default function Cards() {
    const card1Ref = useRef(null)
    const card2Ref = useRef(null)
    const card3Ref = useRef(null)

    useGSAP(() => {
        gsap.from([card1Ref.current, card2Ref.current, card3Ref.current], {
            scrollTrigger: {
                trigger: card1Ref.current,
                start: "-600px",
                end: "-300px",
                scrub: 1.2,
            },

            stagger: 0.35,
            x: 300,
            opacity: 0,
            y: 200,
            rotate: 40,
        })


    })

    return (
        <div className='w-full lg:-mt-20 relative flex lg:justify-end justify-center'>
            <Card src='/images/brussels.jpeg' className='relative! lg:rotate-6 mt-4 lg:mt-0' ref={card1Ref} />
            <Card src='/images/milan.jpeg' className="lg:me-30 rotate-3 lg:rotate-0 mt-4 lg:-mt-4" ref={card2Ref} />
            <Card src='/images/market.jpeg' className="lg:me-60 rotate-6 lg:-rotate-6 mt-4 lg:mt-0" ref={card3Ref} />
        </div>
    );
}
