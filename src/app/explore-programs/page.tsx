"use client";

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ArrowRight, Clock, Users, Star, Brain, BarChart3, BookOpen, Sparkles, Code, Database } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const programs = [
  { icon: Brain, title: 'Data Science & AI', duration: '6 months', learners: '12,000+', rating: '4.8', desc: 'Master ML, deep learning, and AI applications for enterprise.', color: 'bg-blue-50 text-blue-600' },
  { icon: BarChart3, title: 'Product Management', duration: '4 months', learners: '8,500+', rating: '4.9', desc: 'Build world-class products with data-driven strategies.', color: 'bg-purple-50 text-purple-600' },
  { icon: BookOpen, title: 'Business Analytics', duration: '3 months', learners: '10,000+', rating: '4.7', desc: 'Drive decisions with advanced analytics and visualization.', color: 'bg-green-50 text-green-600' },
  { icon: Sparkles, title: 'Generative AI', duration: '3 months', learners: '5,000+', rating: '4.9', desc: 'Harness LLMs, prompt engineering, and GenAI tools.', color: 'bg-amber-50 text-amber-600' },
  { icon: Code, title: 'Software Engineering', duration: '6 months', learners: '7,200+', rating: '4.8', desc: 'Full-stack development with modern frameworks.', color: 'bg-rose-50 text-rose-600' },
  { icon: Database, title: 'Data Engineering', duration: '5 months', learners: '4,800+', rating: '4.7', desc: 'Build scalable data pipelines and infrastructure.', color: 'bg-cyan-50 text-cyan-600' },
];

export default function ExploreProgramsPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-accent pt-20 pb-16">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center page-enter">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent rounded-full text-primary text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" /> Explore Programs
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Find the Perfect <span className="gradient-text">Program</span> for Your Team
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our curated collection of enterprise-grade programs designed to upskill your workforce.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
              {programs.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="group bg-white rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="p-6">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${p.color} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{p.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{p.desc}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                        <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{p.duration}</span>
                        <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" />{p.learners}</span>
                        <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 text-amber-500" />{p.rating}</span>
                      </div>
                      <Link href="/talk-to-expert">
                        <Button variant="outline" size="sm" className="w-full gap-1 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                          Learn More <ArrowRight className="h-3.5 w-3.5" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
