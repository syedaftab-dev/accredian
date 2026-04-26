"use client";

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ArrowRight, Clock, Users, Star, Search, Filter, Brain, BarChart3, BookOpen, Sparkles, Code, Database, Briefcase, Shield } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const categories = ['All', 'Data & AI', 'Product', 'Engineering', 'Business', 'Security'];

const allPrograms = [
  { icon: Brain, title: 'Data Science & AI', category: 'Data & AI', duration: '6 months', learners: '12,000+', rating: '4.8', level: 'Advanced', desc: 'Master ML, deep learning, and AI applications.' },
  { icon: BarChart3, title: 'Product Management', category: 'Product', duration: '4 months', learners: '8,500+', rating: '4.9', level: 'Intermediate', desc: 'Build world-class products with data-driven strategies.' },
  { icon: BookOpen, title: 'Business Analytics', category: 'Business', duration: '3 months', learners: '10,000+', rating: '4.7', level: 'Beginner', desc: 'Drive decisions with analytics and visualization.' },
  { icon: Sparkles, title: 'Generative AI', category: 'Data & AI', duration: '3 months', learners: '5,000+', rating: '4.9', level: 'Advanced', desc: 'Harness LLMs, prompt engineering, and GenAI.' },
  { icon: Code, title: 'Full-Stack Development', category: 'Engineering', duration: '6 months', learners: '7,200+', rating: '4.8', level: 'Intermediate', desc: 'Modern web development with React and Node.js.' },
  { icon: Database, title: 'Data Engineering', category: 'Engineering', duration: '5 months', learners: '4,800+', rating: '4.7', level: 'Advanced', desc: 'Build scalable data pipelines and infrastructure.' },
  { icon: Briefcase, title: 'Digital Marketing', category: 'Business', duration: '3 months', learners: '6,300+', rating: '4.6', level: 'Beginner', desc: 'Master SEO, SEM, and growth marketing strategies.' },
  { icon: Shield, title: 'Cybersecurity', category: 'Security', duration: '4 months', learners: '3,900+', rating: '4.8', level: 'Advanced', desc: 'Protect enterprise systems from modern threats.' },
];

const levelColors: Record<string, string> = {
  Beginner: 'bg-green-100 text-green-700',
  Intermediate: 'bg-amber-100 text-amber-700',
  Advanced: 'bg-red-100 text-red-700',
};

export default function ViewAllProgramsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = allPrograms.filter((p) => {
    const matchesCat = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Navbar />
      <main>
        <section className="bg-white border-b border-gray-100 py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center page-enter">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">
              All <span className="gradient-text">Programs</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Explore our complete catalog of enterprise learning programs.
            </p>
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                placeholder="Search programs..."
              />
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
              <Filter className="h-4 w-4 text-gray-500 flex-shrink-0" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    activeCategory === cat ? 'bg-primary text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:border-primary/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">No programs found. Try a different filter.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filtered.map((p) => {
                  const Icon = p.icon;
                  return (
                    <div key={p.title} className="group bg-white rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 p-6 flex gap-5">
                      <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-base font-bold text-gray-900 truncate">{p.title}</h3>
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${levelColors[p.level]}`}>{p.level}</span>
                        </div>
                        <p className="text-sm text-gray-500 mb-3">{p.desc}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 text-xs text-gray-400">
                            <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{p.duration}</span>
                            <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" />{p.learners}</span>
                            <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 text-amber-500" />{p.rating}</span>
                          </div>
                          <Link href="/talk-to-expert"><Button variant="ghost" size="sm" className="gap-1 text-primary">Details <ArrowRight className="h-3.5 w-3.5" /></Button></Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
