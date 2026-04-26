import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight, Database, BrainCircuit, Lightbulb, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const programs = [
  {
    id: 1,
    title: 'Data Science & AI',
    description: 'Equip your team with cutting-edge data skills to drive data-informed decisions and build scalable AI models.',
    icon: Database,
    color: 'bg-blue-100 text-blue-600',
    hoverBorder: 'hover:border-blue-300',
  },
  {
    id: 2,
    title: 'Product Management',
    description: 'Train your product teams to build user-centric products, manage roadmaps, and drive growth effectively.',
    icon: Lightbulb,
    color: 'bg-yellow-100 text-yellow-600',
    hoverBorder: 'hover:border-yellow-300',
  },
  {
    id: 3,
    title: 'Generative AI for Business',
    description: 'Transform your operations by leveraging LLMs and generative AI tools customized for your enterprise needs.',
    icon: BrainCircuit,
    color: 'bg-purple-100 text-purple-600',
    hoverBorder: 'hover:border-purple-300',
  },
  {
    id: 4,
    title: 'Business Analytics',
    description: 'Upskill your workforce to analyze trends, visualize data, and extract actionable business insights.',
    icon: TrendingUp,
    color: 'bg-green-100 text-green-600',
    hoverBorder: 'hover:border-green-300',
  },
];

export function ProgramsSection() {
  return (
    <section id="programs" className="py-16 sm:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tailored Programs for Enterprise Needs
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose from our specialized domains or let us build a custom curriculum designed specifically for your organization&apos;s goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
          {programs.map((program) => (
            <div
              key={program.id}
              className={`group bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-xl ${program.hoverBorder} transition-all duration-300 hover:-translate-y-1`}
            >
              <div className={`w-14 h-14 rounded-xl ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <program.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{program.title}</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">{program.description}</p>
              <Link
                href="/explore-programs"
                className="inline-flex items-center text-primary font-medium hover:text-primary-hover transition-colors duration-200 group/link"
              >
                View Curriculum
                <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/view-all-programs">
            <Button size="lg" className="px-8 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 gap-2">
              View All Programs <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
