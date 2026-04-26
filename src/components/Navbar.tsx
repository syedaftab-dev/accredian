"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './ui/Button';
import { Menu, X, ChevronDown, Sparkles, GraduationCap, BookOpen, BarChart3, Brain } from 'lucide-react';

const courseItems = [
  { name: 'Data Science & AI', href: '/explore-programs', icon: Brain, desc: 'Master machine learning & AI' },
  { name: 'Product Management', href: '/explore-programs', icon: BarChart3, desc: 'Build world-class products' },
  { name: 'Business Analytics', href: '/explore-programs', icon: BookOpen, desc: 'Drive data-driven decisions' },
  { name: 'Generative AI', href: '/explore-programs', icon: Sparkles, desc: 'Harness the power of GenAI' },
];

const navLinks = [
  { name: 'About Us', href: '/about-us' },
  { name: 'Explore Programs', href: '/explore-programs' },
  { name: 'View All Programs', href: '/view-all-programs' },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const coursesRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (coursesRef.current && !coursesRef.current.contains(event.target as Node)) {
        setIsCoursesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsCoursesOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-md border-b border-gray-100'
          : 'bg-white/80 backdrop-blur-md border-b border-gray-200'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
            <GraduationCap className="h-5 w-5 text-white" />
          </div>
          <span className="text-2xl font-bold text-primary tracking-tight">Accredian</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {/* Courses Dropdown */}
          <div ref={coursesRef} className="relative">
            <button
              onClick={() => setIsCoursesOpen(!isCoursesOpen)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isCoursesOpen
                  ? 'text-primary bg-accent'
                  : 'text-gray-700 hover:text-primary hover:bg-gray-50'
              }`}
            >
              Courses
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  isCoursesOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Dropdown Panel */}
            {isCoursesOpen && (
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden animate-slide-down">
                <div className="p-2">
                  {courseItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-accent transition-colors duration-150 group"
                      >
                        <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-150">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{item.name}</p>
                          <p className="text-xs text-gray-500">{item.desc}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <div className="bg-gray-50 px-4 py-3 border-t border-gray-100">
                  <Link
                    href="/view-all-programs"
                    className="text-sm font-medium text-primary hover:text-primary-hover transition-colors flex items-center gap-1"
                  >
                    View all programs →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Nav Links */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`nav-link-underline px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                pathname === link.href
                  ? 'text-primary bg-accent'
                  : 'text-gray-700 hover:text-primary hover:bg-gray-50'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/talk-to-expert"
            className="nav-link-underline px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-all duration-200"
          >
            Talk to an Expert
          </Link>

          <Link
            href="/schedule-call"
            className="nav-link-underline px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-all duration-200"
          >
            Schedule a Call
          </Link>
        </div>

        {/* Desktop Right Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/login"
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200 rounded-lg hover:bg-gray-50"
          >
            Login
          </Link>
          <Link href="/try-for-free">
            <Button variant="primary" size="sm" className="shadow-md hover:shadow-lg transition-shadow duration-200">
              Try for Free
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none transition-colors duration-200"
          >
            <span className="sr-only">Open main menu</span>
            <div className="relative w-6 h-6">
              <X
                className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'
                }`}
              />
              <Menu
                className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 shadow-inner">
          <div className="space-y-1 px-4 pt-3 pb-4">
            {/* Mobile Courses Accordion */}
            <div>
              <button
                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Courses
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isCoursesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isCoursesOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pl-4 space-y-1 mt-1">
                  {courseItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-accent hover:text-primary transition-colors"
                      >
                        <Icon className="h-4 w-4" />
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Mobile Nav Links */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-primary bg-accent'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/talk-to-expert"
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
            >
              Talk to an Expert
            </Link>
            <Link
              href="/schedule-call"
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
            >
              Schedule a Call
            </Link>
            <Link
              href="/login"
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
            >
              Login
            </Link>

            <div className="pt-2 px-3">
              <Link href="/try-for-free" className="block">
                <Button variant="primary" className="w-full">
                  Try for Free
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
