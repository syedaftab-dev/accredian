"use client";

import React from 'react';
import Link from 'next/link';

const navItems = [
  { name: 'Programs', href: '#programs' },
  { name: 'CAT Framework', href: '#how-it-works' },
  { name: 'Advisory Board', href: '#advisory' },
  { name: 'FAQs', href: '#faqs' },
];

export function SubNavbar() {
  return (
    <div className="sticky top-16 z-40 w-full bg-accent/50 backdrop-blur-sm border-b border-gray-200 hidden md:block">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-12 h-12">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors py-2 border-b-2 border-transparent hover:border-primary"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
