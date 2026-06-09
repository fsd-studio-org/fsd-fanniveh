"use client"

import WorkCardList from '@/app/components/work/WorkCardList';
import Section from '@/components/template/ui/Section';
import { Title } from '@/components/ui/Title';

export default function Work() {
    return (
        <Section id='Work' outerClassName='bg-secondary !pt-0' innerClassName='lg:max-w-[1500px] space-y-4'>
            <Title className='mb-6 lg:max-w-[1160px] mx-auto'>My Work</Title>
            <WorkCardList />
        </Section>
    );
}
