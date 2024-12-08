'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Section {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  sections: Section[];
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0.1,
    });

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth',
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <nav className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto scrollbar-hide">
      <h4 className="text-lg font-semibold mb-4">Table des matières</h4>
      <ul className="space-y-2">
        {sections.map((section) => (
          <motion.li
            key={section.id}
            whileHover={{ x: 4 }}
            className="relative"
          >
            <a
              href={`#${section.id}`}
              onClick={(e) => handleClick(e, section.id)}
              className={`block py-1 pl-4 border-l-2 text-sm transition-colors duration-200 ${
                activeSection === section.id
                  ? 'border-gold text-gold font-medium'
                  : 'border-gray-200 text-gray-600 hover:text-gold hover:border-gold'
              }`}
            >
              {section.title}
            </a>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};