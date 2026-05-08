"use client"

import { ReactNode, useState, useEffect } from 'react';
import Section from '@/components/template/ui/Section';
import { NAV_ITEMS } from '@/constants/navigation';
import NavAnimation from './NavAnimation';

type NavProps = {
  children?: ReactNode, 
  logo?: string,
}

export default function Nav ({ 
  children, 
}: NavProps) {
  // 1. Add state to track if the user has scrolled down
  const [isScrolled, setIsScrolled] = useState(false);
  const links = NAV_ITEMS;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className='sticky top-0 z-50'>
      <Section outerClassName="!py-0 overflow-visible text-orange-700 backdrop-blur-lg h-fit z-10 bg-green-50/30 w-full fixed">
        
        <div className={`absolute right-0 w-full flex transition-all duration-500 ease-in-out ${isScrolled ? 'pt-15' : 'pt-26'}`}>
          <div className='w-[46%]'>
            <div className='h-px w-full bg-orange-700'></div>
          </div>

          <div className={`relative z-10 transition-transform duration-500 ease-in-out origin-center ${isScrolled ? '-mt-16 scale-75' : '-mt-16 scale-100'}`}>
            <NavAnimation />
          </div>
          
          <div className='right-0 w-[46%]'>
            <div className='h-px w-full bg-orange-700'></div>
          </div>
        </div>

        <div className={`flex items-center justify-between w-full transition-all duration-500 ease-in-out ${isScrolled ? 'h-15' : 'h-26'}`}>
          
          <div className='flex items-center'>
            {/* Toggle logo font size */}
            <h4 className={`font-primary italic transition-all duration-500 ease-in-out ${isScrolled ? 'text-3xl md:text-5xl' : 'text-4xl md:text-8xl'}`}>
              Fanni Véh
            </h4>
          </div>

          {children}
          
          <div>
            {/* <LangSwitcherMinimalist /> */}
          </div>

          <div className='hidden lg:flex gap-6'>
            {links.map((title, index) => (
              <a 
                key={index} 
                /* Toggle nav link font size */
                className={`font-primary-regular text-orange-800 font-light transition-all duration-500 ease-in-out ${isScrolled ? 'text-xl' : 'text-3xl'}`} 
                href={`/#${title}`}
              >
                {title}
              </a>
            ))}
          </div>
        </div>
      </Section>
    </nav>
  )
}