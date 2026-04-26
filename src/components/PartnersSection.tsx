import React from 'react';

const partners = [
  "Microsoft", "Google", "Amazon", "Meta", "Netflix", "Adobe", "Salesforce", "Oracle"
];

export function PartnersSection() {
  return (
    <section className="py-12 border-b border-gray-100 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-wide text-gray-500 mb-8">
          Trusted by innovative teams worldwide
        </p>
        
        <div className="relative flex overflow-x-hidden group">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
          
          <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-4 group-hover:[animation-play-state:paused]">
            {partners.map((partner, index) => (
              <span key={index} className="text-2xl font-bold text-gray-300 mx-8 select-none hover:text-primary/40 transition-colors duration-300">
                {partner}
              </span>
            ))}
            {partners.map((partner, index) => (
              <span key={`dup-${index}`} className="text-2xl font-bold text-gray-300 mx-8 select-none hover:text-primary/40 transition-colors duration-300">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
