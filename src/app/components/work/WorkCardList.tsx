"use client"

import WorkCard from '@/app/components/work/WorkCard';
import { SubTitle } from '@/components/ui/Title';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FSD_STUDIO, MAXON_INTERNSHIP, SKILL_2_1, SKILL_2_2, COMPUTER_VISION, ROBOT_CONTROL } from '@/constants/skills';

export default function WorkCardList() {
    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width:768px)", () => {
            gsap.from([".work-card-1", ".work-card-2"], { 
                scale: 0.95,
                scrollTrigger: {
                    trigger: "#work-card-list-1",
                    scrub: 1,
                    end: "+=400",
            } })
            gsap.from([".work-card-3", ".work-card-4"], { 
                scale: 0.95,
                scrollTrigger: {
                    trigger: "#work-card-list-2",
                    scrub: 1,
                    end: "+=400",
            } })
        })

        mm.add("(max-width:1024px)", () => {
            gsap.utils.toArray<Element>(".work-card").forEach((card) => {
                gsap.from(card, {
                    scale: 0.95,
                    scrollTrigger: {
                        trigger: card,
                        scrub: 0.8,
                        end: "400px bottom"
                    }
                });
            });
        })
    })

    return (
        <div className='max-w-[1500px] text-justify flex-col flex gap-3'>
            <div id='work-card-list-1' className='flex lg:flex-row flex-col gap-3'>
                <WorkCard src='/images/work-card-fsd.png' className='shrink-0 work-card work-card-1' title='FSD STUDIO' href='/work/fsd-studio' skills={FSD_STUDIO} />
                <WorkCard src='/images/Maxon-Motors-Internship2.png' className='work-card work-card-2' title='MAXON INTERNSHIP' href='/work/maxon-internship' skills={MAXON_INTERNSHIP} />


                <div className='lg:ms-16 mb-8 space-y-2 md:my-auto col-span-2'>
                    <SubTitle>Internship & Work Experience</SubTitle>
                    <p className='font-primary-regular max-w-90'>While still in school, I wanted to get some real experience alongside my studies. That led to two things: starting a small design studio with my partner and doing an internship at maxon motor in Switzerland, where I got to see how a larger international company operates.</p>
                </div>
            </div>

            <div id='work-card-list-2' className='flex lg:flex-row flex-col gap-3'>
                <div className='lg:me-16 order-3 md:order-1 space-y-2 my-auto'>
                    <SubTitle>Thomas More - Belgium</SubTitle>
                    <p className='font-primary-regular max-w-90'>Thomas More is where my journey in applied computer science began. What stands out most is how practical the education is; I spent a lot of time working on real projects, both in teams and individually, and there's a strong focus on soft skills alongside the technical side. It's an approach that prepares you really well for the actual work.</p>
                </div>

                <WorkCard src='/images/SKILL-2-1.png' className='shrink-0 work-card work-card-3' title='SKIL2 — Session Coordination' href='/work/skill-2-1' skills={SKILL_2_1} />
                <WorkCard src='/images/SKILL-2-2.png' className='shrink-0 work-card work-card-4' title='Skills Integration Lab 2' href='/work/skill-2-2' skills={SKILL_2_2} />
            </div>
            
            <div id='work-card-list-3' className='flex lg:flex-row flex-col gap-3'>
                <div className='lg:me-16 space-y-2 my-auto'>
                    <SubTitle>Supsi - Switzerland</SubTitle>
                    <p className='font-primary-regular max-w-90'>I spent one semester at SUPSI in Lugano as an exchange student. The experience was quite different from what I was used to; they put a lot more emphasis on technical and theoretical knowledge, which meant I had to push myself a bit more than usual. It was challenging, but I'm really glad I did it.</p>
                </div>

                <WorkCard className='shrink-0 work-card work-card-3' title='Computer Vision' href='/work/computer-vision' skills={COMPUTER_VISION} />
                <WorkCard className='shrink-0 work-card work-card-4' title='Robot Control' href='/work/robot-control' skills={ROBOT_CONTROL} />
            </div>
        </div>
    );
}
