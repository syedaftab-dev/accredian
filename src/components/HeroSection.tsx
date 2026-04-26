import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-accent/30 to-white pt-16 md:pt-24 pb-32">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:mx-auto lg:col-span-6 lg:text-left flex flex-col justify-center page-enter">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent rounded-full text-primary text-sm font-medium mb-6 w-fit mx-auto lg:mx-0">
              <Sparkles className="h-4 w-4" /> Enterprise Learning Platform
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Empower your workforce with</span>{' '}
              <span className="block gradient-text xl:inline">Next-Gen Skills</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Transform your organization with tailored enterprise learning solutions. We build customized training programs to upskill your teams in Data, AI, and Product Management.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 flex flex-col sm:flex-row gap-4">
              <Link href="/talk-to-expert">
                <Button size="lg" className="w-full sm:w-auto gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-shadow duration-300">
                  Talk to an Expert <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/explore-programs">
                <Button variant="outline" size="lg" className="w-full sm:w-auto hover:bg-accent transition-colors duration-300">
                  Explore Programs
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative mt-12 sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center page-enter" style={{ animationDelay: '0.3s' }}>
            <div className="relative mx-auto w-full rounded-2xl shadow-2xl lg:max-w-md overflow-hidden">
              <div className="relative block w-full overflow-hidden rounded-2xl bg-white border border-gray-100 aspect-[4/3] flex items-center justify-center p-8">
                <div className="w-full h-full bg-gradient-to-br from-accent to-primary/5 rounded-xl flex items-center justify-center border border-primary/10">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-float">
                      <ArrowRight className="h-10 w-10 text-primary" />
                    </div>
                    <p className="text-gray-600 font-medium">Enterprise Learning Platform</p>
                    <p className="text-sm text-gray-400 mt-1">Trusted by 500+ companies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
