'use client';

import React from 'react';
import Link from 'next/link';

interface LogoProps {
  isScrolled: boolean;
}

export const Logo: React.FC<LogoProps> = ({ isScrolled }) => (
  <Link
    href="/"
    className={`text-xl font-light ${isScrolled ? 'text-black' : 'text-white'}`}
  >
    Dr. ELARD
  </Link>
);