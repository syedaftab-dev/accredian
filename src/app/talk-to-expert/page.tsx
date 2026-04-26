"use client";

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MessageCircle, Phone, Mail, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const expertiseAreas = [
  'Data Science & ML', 'AI & Deep Learning', 'Product Management',
  'Business Analytics', 'Generative AI', 'Custom Solutions',
];

export default function TalkToExpertPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Our expert will get back to you within 24 hours. (Demo)');
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <section className="relative overflow-hidden py-20">
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-0 w-80 h-80 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="page-enter">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent rounded-full text-primary text-sm font-medium mb-6">
                  <Sparkles className="h-4 w-4" /> Expert Consultation
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                  Talk to Our <span className="gradient-text block">Learning Experts</span>
                </h1>
                <p className="text-lg text-gray-600 mb-10">Get personalized guidance on the best learning path for your team.</p>
                <div className="space-y-4 mb-10">
                  {[
                    { icon: Phone, title: 'Call Us', desc: '+1 (555) 123-4567' },
                    { icon: Mail, title: 'Email Us', desc: 'enterprise@accredian.com' },
                    { icon: Clock, title: 'Response Time', desc: 'Within 24 hours' },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-primary/20 transition-all duration-300">
                        <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center"><Icon className="h-5 w-5 text-primary" /></div>
                        <div><p className="text-sm font-semibold text-gray-900">{item.title}</p><p className="text-sm text-gray-500">{item.desc}</p></div>
                      </div>
                    );
                  })}
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Our Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {expertiseAreas.map((area) => (
                    <span key={area} className="px-3 py-1.5 bg-accent text-primary text-xs font-medium rounded-full">{area}</span>
                  ))}
                </div>
              </div>
              <div className="page-enter" style={{ animationDelay: '0.2s' }}>
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sticky top-24">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center"><MessageCircle className="h-5 w-5 text-white" /></div>
                    <div><h2 className="text-lg font-bold text-gray-900">Send a Message</h2><p className="text-xs text-gray-500">We&apos;ll get back to you shortly</p></div>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div><label htmlFor="expert-name" className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label><input id="expert-name" type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" placeholder="John Doe" /></div>
                    <div><label htmlFor="expert-email" className="block text-sm font-medium text-gray-700 mb-1.5">Work Email</label><input id="expert-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" placeholder="john@company.com" /></div>
                    <div><label htmlFor="expert-phone" className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label><input id="expert-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" placeholder="+1 (555) 000-0000" /></div>
                    <div><label htmlFor="expert-msg" className="block text-sm font-medium text-gray-700 mb-1.5">Message</label><textarea id="expert-msg" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none" placeholder="Tell us about your needs..." /></div>
                    <Button type="submit" variant="primary" size="lg" className="w-full gap-2 shadow-lg shadow-primary/20">Send Message <ArrowRight className="h-4 w-4" /></Button>
                  </form>
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
