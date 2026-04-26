import React from 'react';
import Link from 'next/link';
import { Button } from './ui/Button';

export function Footer() {
  return (
    <footer className="bg-secondary text-gray-300 py-12 sm:py-16 border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-white tracking-tight">Accredian</span>
            </Link>
            <p className="text-sm text-gray-400 mb-6">
              Empowering organizations to build future-ready teams through tailored enterprise learning solutions.
            </p>
            <Link href="/schedule-call">
              <Button variant="primary" size="sm">Schedule a Call</Button>
            </Link>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Programs</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/explore-programs" className="hover:text-white transition-colors">Data Science & AI</Link></li>
              <li><Link href="/explore-programs" className="hover:text-white transition-colors">Product Management</Link></li>
              <li><Link href="/explore-programs" className="hover:text-white transition-colors">Business Analytics</Link></li>
              <li><Link href="/explore-programs" className="hover:text-white transition-colors">Generative AI</Link></li>
              <li><Link href="/view-all-programs" className="hover:text-white transition-colors font-medium text-primary">View All Programs →</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about-us" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/talk-to-expert" className="hover:text-white transition-colors">Talk to an Expert</Link></li>
              <li><Link href="/schedule-call" className="hover:text-white transition-colors">Schedule a Call</Link></li>
              <li><Link href="/login" className="hover:text-white transition-colors">Login</Link></li>
              <li><Link href="/try-for-free" className="hover:text-white transition-colors">Try for Free</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>Email: enterprise@accredian.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Location: San Francisco, CA</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Accredian. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
