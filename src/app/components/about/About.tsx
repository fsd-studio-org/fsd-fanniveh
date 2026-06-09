"use client"

import Section from '@/components/template/ui/Section';
import { HighlightSmall } from '@/components/ui/Highlight';
import { Title } from '@/components/ui/Title';
import Cards from './Cards';
import { CVButton } from '@/components/layout/nav/CVButton';

export default function About() {
    return (
        <Section id='About' outerClassName='bg-secondary'>
            <Title className='mb-3 lg:mb-6'>About me</Title>

            <div className='text-justify justify-between flex lg:flex-row flex-col gap-12'>
                <div className='flex gap-5 flex-col lg:w-[80%]'>
                    <p>I'm a Hungarian computer science student studying in both Belgium and Switzerland. I started
                        programming when I was 14 years old and I haven't looked back.
                    </p>
                    <p>
                        Since then I've fallen in love with <HighlightSmall>Data Science</HighlightSmall>, <HighlightSmall variant='blue'>Machine Learning</HighlightSmall>, and solving problems with cutting edge technology.
                        I do have to admit, I'm rarely satisfied with where I am. The moment I understand something, I'm already looking for what's next to learn.

                    </p>
                    <p>
                        However, I don’t only like sitting in front of a computer. In my free
                        time I love curling up with a good book or practising my musical
                        skills.
                    </p>

                    <CVButton />
                </div>

                <Cards />
            </div>
        </Section>
    );
}
