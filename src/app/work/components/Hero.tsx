"use client"

import Button from '@/components/template/ui/Button';
import FSDImage from '@/components/template/ui/FSDImage';
import Section from '@/components/template/ui/Section';
import { HighlightSmall } from '@/components/ui/Highlight';
import { Title } from '@/components/ui/Title';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

type HeroSection = {
    heading?: string;
    content: string;
}

type WorkHeroProps = {
    title: string;
    src?: string;
    skills?: string[];
    sections: HeroSection[];
    documentHref?: string;
}

export default function Hero({ title, src, skills = [], sections, documentHref }: WorkHeroProps) {
    const imageRef = useRef(null)
    const domeRef = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from(domeRef.current, {
            y: 1200,
            duration: 1.5,
            ease: "power1.out"
        })

        if (src) {
            tl.from(imageRef.current, {
                y: 30,
                opacity: 0,
                duration: 0.5,
                ease: "power1.out"
            });
        }

        tl.from(".bodyElement", {
            opacity: 0,
            stagger: 0.04,
            ease: "sine"
        })
    }, []);

    return (
        <Section outerClassName='!py-0 bg-orange-50'>
            <div className='relative mt-60 lg:mt-83 gap-6 lg:gap-20 justify-content-between'>
                <div ref={domeRef} className='absolute inset-0 w-full aspect-1/5 bg-linear-to-b from-primary to-secondary lg:rounded-t-[600px] rounded-t-[500px]'>
                </div>

                <div className='relative mt-30 text-secondary p-4 text-justify flex justify-center'>
                    <div>
                        {src && (
                            <FSDImage ref={imageRef} className='-mt-30 lg:-mt-60 mx-auto w-[90%] md:w-full max-w-100 border-b-3 rounded-xl' src={src} />
                        )}

                        <div className='my-8 max-w-100'>
                            <Title animation={false} className='bodyElement font-black mb-4'>{title}</Title>

                            <div className='relative'>
                                <div className='space-y-4'>
                                    {sections.map((section, i) => (
                                        <div key={i} className='bodyElement'>
                                            {section.heading && (
                                                <h3 className='font-black text-lg mb-1'>{section.heading}</h3>
                                            )}
                                            <p>{section.content}</p>
                                        </div>
                                    ))}
                                </div>

                                {skills.length > 0 && (
                                    <div className='lg:absolute -right-58 z-10 top-0 lg:block'>
                                        <div className='space-x-2 space-y-2 mt-4 lg:mt-0 lg:w-50'>
                                            {skills.map((skill, index) => (
                                                <HighlightSmall className="bodyElement inline-block!" key={index}>
                                                    {skill}
                                                </HighlightSmall>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {documentHref && (
                                <Button variant='secondary' className='bodyElement mt-3'>Download Document</Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
