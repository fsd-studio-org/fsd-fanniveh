"use client"

import HamburgerMenu from '@/components/template/ui/HamburgerMenu';
import Section from '@/components/template/ui/Section';
import { NAV_ITEMS } from '@/constants/navigation';
import { motion } from 'motion/react';
import { ReactNode, useEffect, useState } from 'react';
import { FaFileDownload } from 'react-icons/fa';
import NavAnimation from './NavAnimation';
import { CVButton } from '@/components/layout/nav/CVButton';
import Link from 'next/link';

type NavProps = {
  children?: ReactNode,
  logo?: string,
}

export default function Nav({
  children,
}: NavProps) {
  // 1. Add state to track if the user has scrolled down
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = NAV_ITEMS;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed w-full top-0 z-50 ${mobileOpen && "no-doc-scroll lg:doc-scroll"}`}>
        <Section outerClassName="pointer-events-none !py-0 overflow-visible text-orange-700 bg-secondary h-fit z-10 w-full">

          <div className={`absolute z-50 right-0 w-full flex transition-all duration-500 ease-in-out ${isScrolled ? 'pt-15' : 'pt-20 lg:pt-26'}`}>
            <div className='w-[50%] lg:w-[47%]'>
              <div className='h-px w-full bg-primary'></div>
            </div>

            <div className={`relative hidden lg:block z-10 transition-transform duration-500 ease-in-out origin-center ${isScrolled ? '-mt-16 scale-55 lg:scale-75' : '-mt-16 scale-50 lg:scale-100'}`}>
              <NavAnimation />
            </div>

            <div className='right-0 w-[50%] lg:w-[47%]'>
              <div className='h-px w-full bg-primary'></div>
            </div>
          </div>

          <div className={`flex items-center justify-between w-full transition-all duration-500 ease-in-out ${isScrolled ? 'h-15' : 'h-20 lg:h-26'}`}>

            <div className='flex items-center'>
              {/* Toggle logo font size */}
              <div className={`transition-all -ms-6 lg:hidden duration-500 ${isScrolled ? 'scale-60' : 'scale-70'}`}>
                <NavAnimation />
              </div>
              <Link className='pointer-events-auto' href="/">
                <h3 className={`-ms-1 lg:ms-0 font-primary italic transition-all duration-500 ease-in-out ${isScrolled ? 'text-3xl md:text-5xl' : 'text-4xl md:text-7xl xl:text-8xl'}`}>
                  Fanni Véh
                </h3>
              </Link>

            </div>

            <div className='lg:hidden'>
              <HamburgerMenu onClick={() => setMobileOpen(!mobileOpen)} isOpen={mobileOpen} />
            </div>
            {children}

            <div className='hidden lg:flex items-center gap-6'>
              {links.map((title, index) => (
                <a
                  key={index}
                  /* Toggle nav link font size */
                  className={`font-primary-regular pointer-events-auto text-black hover:border-b-2 font-light transition-all duration-500 ease-in-out ${isScrolled ? 'text-2xl' : 'text-3xl'}`}
                  href={`/#${title}`}
                >
                  {title}
                </a>
              ))}
              <div className={`transition-all ms-8 duration-500 ease-in-out ${isScrolled ? 'scale-85' : ''}`}>
                <CVButton/>
              </div>
            </div>
          </div>
        </Section>
      </nav>

      <motion.nav initial={false}
        animate={mobileOpen ? "open" : "closed"}
        variants={{
          open: {
            scaleY: 1,
            transition: {
              delayChildren: 0.3,
              staggerChildren: 0.1,
              ease: [0.12, 0, 0.29, 0]
            },
          },

          closed: {
            scaleY: 0,
            transition: {
              duration: .6,
              delay: 0.5,
              staggerChildren: 0.1,
              staggerDirection: -1,
              ease: [0.22, 1, 0.36, 1]
            },
          },
        }}
        className={`lg:hidden bg-primary origin-top fixed z-40 top-0 left-0 h-screen w-full overflow-hidden`}>
        <div className='flex flex-col justify-center items-center h-full'>
          {links.map((title, index) => (
            <div key={index} className='overflow-hidden'>
              <motion.a variants={{
                open: {
                  y: 0,
                },
                closed: {
                  y: 50,
                }
              }}

                className='text-secondary text-5xl text-center w-full block mt-6 font-primary-regular' href={`/#${title}`}>{title}</motion.a>
            </div>
          ))}
        </div>
      </motion.nav>
    </>
  )
}