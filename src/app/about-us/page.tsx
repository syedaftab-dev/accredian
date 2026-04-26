"use client";

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Users, Target, Award, Globe, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const values = [
  { icon: Target, title: 'Mission-Driven', desc: 'We are committed to democratizing quality education and making it accessible to organizations worldwide.' },
  { icon: Users, title: 'People First', desc: 'Our learners and partners are at the heart of everything we do. We build solutions that empower.' },
  { icon: Award, title: 'Excellence', desc: 'We maintain the highest standards in curriculum design, delivery, and learner outcomes.' },
  { icon: Globe, title: 'Global Impact', desc: 'Our programs serve enterprises across 30+ countries, transforming teams at scale.' },
];

const stats = [
  { value: '500+', label: 'Enterprise Clients' },
  { value: '50,000+', label: 'Learners Trained' },
  { value: '95%', label: 'Completion Rate' },
  { value: '30+', label: 'Countries Served' },
];

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-accent pt-20 pb-24">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
          </div>
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center page-enter">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent rounded-full text-primary text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" /> About Accredian
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Transforming Enterprise
              <span className="gradient-text block">Learning at Scale</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              We partner with organizations worldwide to build future-ready teams through cutting-edge, 
              customized training programs in Data Science, AI, and Product Management.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-white border-y border-gray-100">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 stagger-children">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-primary">{stat.value}</p>
                  <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Core Values</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do and every solution we build.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div
                    key={v.title}
                    className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{v.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Transform Your Team?</h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Join 500+ enterprises that trust Accredian to build their future-ready workforce.
            </p>
            <Link href="/schedule-call">
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100 gap-2">
                Schedule a Call <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
