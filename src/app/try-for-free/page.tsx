"use client";

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Check, ArrowRight, Sparkles, Zap, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const features = [
  'Access to 5 premium courses',
  'Interactive learning modules',
  'AI-powered learning assistant',
  'Certificate of completion',
  'Community forum access',
  '7-day free trial, no credit card',
];

const benefits = [
  { icon: Zap, title: 'Instant Access', desc: 'Start learning immediately with our on-demand platform.' },
  { icon: Shield, title: 'Risk Free', desc: 'Full refund within 7 days if you\'re not satisfied.' },
  { icon: Users, title: 'Peer Network', desc: 'Connect with 50,000+ learners and industry experts.' },
];

export default function TryForFreePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your interest! This is a demo page.');
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Info */}
              <div className="page-enter">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent rounded-full text-primary text-sm font-medium mb-6">
                  <Sparkles className="h-4 w-4" /> Start for Free
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                  Experience Premium
                  <span className="gradient-text block">Learning Today</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Get instant access to our most popular programs. No credit card required. 
                  Cancel anytime during your free trial.
                </p>

                <ul className="space-y-3 mb-10">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-gray-700">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {benefits.map((b) => {
                    const Icon = b.icon;
                    return (
                      <div key={b.title} className="p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-primary/20 hover:shadow-sm transition-all duration-300">
                        <Icon className="h-5 w-5 text-primary mb-2" />
                        <p className="text-sm font-semibold text-gray-900">{b.title}</p>
                        <p className="text-xs text-gray-500 mt-1">{b.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right: Form */}
              <div className="page-enter" style={{ animationDelay: '0.2s' }}>
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Create Your Account</h2>
                  <p className="text-sm text-gray-500 mb-6">Join 50,000+ professionals learning with Accredian</p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                      <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="try-email" className="block text-sm font-medium text-gray-700 mb-1.5">Work Email</label>
                      <input
                        id="try-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5">Company</label>
                      <input
                        id="company"
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                        placeholder="Acme Inc."
                      />
                    </div>
                    <Button type="submit" variant="primary" size="lg" className="w-full gap-2 shadow-lg shadow-primary/20 mt-2">
                      Start Free Trial <ArrowRight className="h-4 w-4" />
                    </Button>
                  </form>

                  <p className="mt-4 text-center text-xs text-gray-400">
                    By signing up, you agree to our Terms of Service and Privacy Policy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
