"use client";

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Calendar, Clock, Video, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM',
  '02:00 PM', '03:00 PM', '04:00 PM',
];

const benefits = [
  'Personalized learning strategy for your team',
  'Custom curriculum tailored to your industry',
  'ROI analysis and implementation roadmap',
  'Flexible scheduling and pricing options',
];

export default function ScheduleCallPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [teamSize, setTeamSize] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Call scheduled! Our team will send you a confirmation email. (Demo)');
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <section className="relative overflow-hidden py-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="page-enter">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent rounded-full text-primary text-sm font-medium mb-6">
                  <Sparkles className="h-4 w-4" /> Free Consultation
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                  Schedule a <span className="gradient-text block">Discovery Call</span>
                </h1>
                <p className="text-lg text-gray-600 mb-10">
                  Book a 30-minute call with our enterprise learning consultants to discuss your team&apos;s training needs.
                </p>

                <div className="space-y-4 mb-10">
                  {benefits.map((b) => (
                    <div key={b} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">{b}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-6 p-5 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Video className="h-5 w-5 text-primary" />
                    <span>Video Call</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>30 Minutes</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>Mon – Fri</span>
                  </div>
                </div>
              </div>

              <div className="page-enter" style={{ animationDelay: '0.2s' }}>
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sticky top-24">
                  <h2 className="text-xl font-bold text-gray-900 mb-1">Book Your Slot</h2>
                  <p className="text-sm text-gray-500 mb-6">Pick a time that works for you</p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div><label htmlFor="sc-name" className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label><input id="sc-name" type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" placeholder="John Doe" /></div>
                    <div><label htmlFor="sc-email" className="block text-sm font-medium text-gray-700 mb-1.5">Work Email</label><input id="sc-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" placeholder="john@company.com" /></div>
                    <div><label htmlFor="sc-company" className="block text-sm font-medium text-gray-700 mb-1.5">Company</label><input id="sc-company" type="text" value={company} onChange={(e) => setCompany(e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" placeholder="Acme Inc." /></div>
                    <div>
                      <label htmlFor="sc-team" className="block text-sm font-medium text-gray-700 mb-1.5">Team Size</label>
                      <select id="sc-team" value={teamSize} onChange={(e) => setTeamSize(e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all">
                        <option value="">Select team size</option>
                        <option value="1-10">1 – 10</option>
                        <option value="11-50">11 – 50</option>
                        <option value="51-200">51 – 200</option>
                        <option value="200+">200+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedSlot(slot)}
                            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 border ${
                              selectedSlot === slot
                                ? 'bg-primary text-white border-primary shadow-md'
                                : 'bg-white text-gray-600 border-gray-200 hover:border-primary/30'
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>

                    <Button type="submit" variant="primary" size="lg" className="w-full gap-2 shadow-lg shadow-primary/20 mt-2">
                      Schedule Call <ArrowRight className="h-4 w-4" />
                    </Button>
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
