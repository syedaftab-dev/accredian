"use client";

import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { id: 1, name: 'Professionals Upskilled', value: 10000, suffix: '+', prefix: '' },
  { id: 2, name: 'Enterprise Partners', value: 500, suffix: '+', prefix: '' },
  { id: 3, name: 'Average ROI', value: 300, suffix: '%', prefix: '' },
  { id: 4, name: 'Completion Rate', value: 95, suffix: '%', prefix: '' },
];

function useCountUp(end: number, duration: number, shouldStart: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!shouldStart) return;
    let startTime: number | null = null;
    let animationFrame: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, shouldStart]);
  return count;
}

function StatItem({ stat, shouldAnimate }: { stat: typeof stats[0]; shouldAnimate: boolean }) {
  const count = useCountUp(stat.value, 2000, shouldAnimate);
  return (
    <div
      className={`flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l first:sm:border-l-0 group hover:bg-accent/30 transition-colors duration-300`}
    >
      <dt className="order-2 mt-2 text-sm font-medium leading-6 text-gray-500">
        {stat.name}
      </dt>
      <dd className="order-1 text-4xl font-bold tracking-tight text-primary group-hover:scale-110 transition-transform duration-300">
        {stat.prefix}{count.toLocaleString()}{stat.suffix}
      </dd>
    </div>
  );
}

export function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="bg-primary py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Trusted by industry leaders worldwide
          </h2>
          <p className="mt-3 text-xl text-blue-100 sm:mt-4">
            Delivering measurable impact and transforming organizations through world-class education.
          </p>
        </div>
      </div>
      <div className="mt-10 pb-1 sm:pb-4">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-primary" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <dl className="rounded-2xl bg-white shadow-xl sm:grid sm:grid-cols-4 overflow-hidden">
                {stats.map((stat) => (
                  <StatItem key={stat.id} stat={stat} shouldAnimate={isVisible} />
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
