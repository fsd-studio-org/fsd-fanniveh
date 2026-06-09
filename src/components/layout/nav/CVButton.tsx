'use client';

import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { FaFileDownload } from 'react-icons/fa';

export const CVButton = () => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const ballRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const button = buttonRef.current;
        const ball = ballRef.current;
        if (!button || !ball) return;

        const handleMouseEnter = (e: MouseEvent) => {
            const rect = button.getBoundingClientRect();
            const currentX = e.clientX - rect.left;
            const currentY = e.clientY - rect.top;

            // Calculate a size large enough to cover the button from any entry point.
            // Multiplying the widest dimension by 2.5 guarantees full coverage safely.
            const maxSize = Math.max(rect.width, rect.height) * 2.5;

            // Stop any shrinking animations currently happening
            gsap.killTweensOf(ball);
            gsap.killTweensOf(button);

            // 1. Immediately place the ball at the cursor's entry point with 0 size
            gsap.set(ball, {
                left: currentX,
                top: currentY,
                width: 0,
                height: 0,
            });

            // 2. Animate it expanding outward
            gsap.to(ball, {
                width: maxSize,
                height: maxSize,
                duration: 0.5,
                ease: 'power2.out',
            });

            gsap.to(button, {
                color: '#b53815',
                border: '1px solid #b53815',
                backgroundColor: '#fff7ed',
                duration: 0.4,
                ease: 'power2.out',
            });
        };

        const handleMouseLeave = (e: MouseEvent) => {
            const rect = button.getBoundingClientRect();
            const exitX = e.clientX - rect.left;
            const exitY = e.clientY - rect.top;

            gsap.killTweensOf(ball);
            gsap.killTweensOf(button);

            // 1. Animate the ball shrinking down to 0, while moving its center to the exit point
            gsap.to(ball, {
                left: exitX,
                top: exitY,
                width: 0,
                height: 0,
                duration: 0.4,
                ease: 'power2.out',
            });

            gsap.to(button, {
                color: '#ffffff',
                backgroundColor: '#b53815',
                duration: 0.4,
                ease: 'power2.out',
            });
        };

        button.addEventListener('mouseenter', handleMouseEnter);
        // mousemove has been completely removed
        button.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            button.removeEventListener('mouseenter', handleMouseEnter);
            button.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <a target="_blank" href="Fanni-Véh_CV-EN.pdf">
            <button
                ref={buttonRef}
                className="relative bg-primary pointer-events-auto cursor-pointer text-white px-5 py-3 flex items-center gap-3 rounded-full overflow-hidden"
            >
                <div
                    ref={ballRef}
                    className="absolute bg-[#fff7ed] rounded-full pointer-events-none"
                    style={{
                        // This keeps the ball centered exactly on the cursor coordinates
                        transform: 'translate(-50%, -50%)',
                    }}
                />
                <div className="relative z-10 flex items-center gap-3">
                    <FaFileDownload className='w-5 h-5' />
                    <span>CV</span>
                </div>
            </button>
        </a>
    );
};