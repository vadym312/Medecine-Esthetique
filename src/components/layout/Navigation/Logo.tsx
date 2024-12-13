'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  isScrolled: boolean;
}

export const Logo: React.FC<LogoProps> = ({ isScrolled }) => (
  <Link
    href="/"
    className={`text-xl font-light ${isScrolled ? 'text-black' : 'text-white'}`}
  >
    <Image src='https://medecine-esthetique.net/wp-content/uploads/2023/07/dr-elard-paris-medecine-esthetique-2048x430.png' width={186} height={39} className="w-44 h-10" style={isScrolled ? { filter: "brightness(0%) contrast(100%) saturate(100%) blur(0px) hue-rotate(0deg)" } : {}} alt='logo' />
  </Link>
);