'use client';

import React, { useState, useEffect } from 'react';
import { Menu } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';
import { MenuItem } from '@/src/types/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationItemProps {
  item: MenuItem;
  isScrolled: boolean;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  item,
  isScrolled,
}) => {
  const pathname = usePathname();
  const isActive = pathname === item.path;
  const hasChildren = item.children && item.children.length > 0;
  const [mounted, setMounted] = useState(false);

  // Only render menu on client-side to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!hasChildren) {
    return (
      <Link
        href={item.path || '#'}
        className={`nav-item ${
          isScrolled ? 'text-gray-800' : 'text-white'
        } hover:text-gold ${isActive ? 'text-gold' : ''}`}
      >
        <span className="nav-link">{item.label}</span>
      </Link>
    );
  }

  // Return a simpler version during server-side rendering
  if (!mounted) {
    return (
      <div className={`nav-item ${
        isScrolled ? 'text-gray-800' : 'text-white'
      } hover:text-gold relative group`}>
        <span className="nav-button">
          <span className="nav-link">{item.label}</span>
          <ChevronDown
            className="w-4 h-4 transform transition-transform duration-300 group-hover:rotate-180"
            strokeWidth={1.5}
          />
        </span>
      </div>
    );
  }

  return (
    <Menu as="div" className="relative group">
      <Menu.Button
        className={`nav-item ${
          isScrolled ? 'text-gray-800' : 'text-white'
        } hover:text-gold`}
      >
        <span className="nav-button">
          <span className="nav-link">{item.label}</span>
          <ChevronDown
            className="w-4 h-4 transform transition-transform duration-300 group-hover:rotate-180"
            strokeWidth={1.5}
          />
        </span>
      </Menu.Button>

      <div className="mega-menu" data-menu={item.label.toLowerCase()}>
        <div className="mega-menu-container">
          <div className="mega-menu-grid">
            {item.children?.map((child) => (
              <div key={child.id} className="mega-menu-column">
                {child.children ? (
                  <>
                    <h3 className="mega-menu-title">{child.label}</h3>
                    <div className="space-y-1">
                      {child.children.map((subItem) => (
                        <Link
                          key={subItem.id}
                          href={subItem.path || '#'}
                          className="mega-menu-item"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={child.path || '#'}
                    className="mega-menu-item block text-center py-2 hover:text-gold transition-colors"
                  >
                    {child.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Menu>
  );
};