import React from 'react';
import { BookOpen, Rocket, Target, TrendingUp } from 'lucide-react';

const steps = [
  {
    id: 1,
    name: 'Consultation & Needs Analysis',
    description: 'We meet with your leadership to understand your skill gaps, business goals, and current technical maturity.',
    icon: Target,
  },
  {
    id: 2,
    name: 'Custom Curriculum Design',
    description: 'Our experts design a tailored learning path, combining theoretical concepts with real-world projects relevant to your industry.',
    icon: BookOpen,
  },
  {
    id: 3,
    name: 'Cohort-Based Training',
    description: 'Your team learns together in guided cohorts led by industry practitioners, ensuring high engagement and completion rates.',
    icon: Rocket,
  },
  {
    id: 4,
    name: 'Impact Measurement',
    description: 'We track progress through assessments and capstone projects, providing actionable ROI metrics on skill acquisition.',
    icon: TrendingUp,
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              How the Accredian Enterprise Framework Works
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We don&apos;t just provide courses; we provide a complete end-to-end transformation framework known as CAT (Curriculum, Application, Transformation) to ensure lasting impact.
            </p>
            
            <div className="space-y-6">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.id} className="flex group">
                    <div className="flex-shrink-0 mr-4 flex flex-col items-center">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent text-primary font-bold border border-primary/20 group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      {index < steps.length - 1 && (
                        <div className="w-0.5 h-full bg-gray-200 mt-2 group-hover:bg-primary/30 transition-colors duration-300" />
                      )}
                    </div>
                    <div className="pb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-200">{step.name}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="mt-16 lg:mt-0 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent to-primary/5 rounded-3xl transform rotate-3 scale-105"></div>
            <div className="relative bg-white rounded-3xl border border-gray-100 shadow-xl p-8 h-full min-h-[400px] flex items-center justify-center">
               <div className="text-center">
                   <h3 className="text-2xl font-bold text-gray-300 mb-8">CAT Framework</h3>
                   <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-gray-400">
                       <div className="p-5 border-2 border-dashed rounded-xl hover:border-primary hover:text-primary hover:bg-accent transition-all duration-300 cursor-default group">
                         <BookOpen className="h-8 w-8 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                         <span className="font-medium">Curriculum</span>
                       </div>
                       <span className="text-xl rotate-90 sm:rotate-0">➔</span>
                       <div className="p-5 border-2 border-dashed rounded-xl hover:border-primary hover:text-primary hover:bg-accent transition-all duration-300 cursor-default group">
                         <Rocket className="h-8 w-8 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                         <span className="font-medium">Application</span>
                       </div>
                       <span className="text-xl rotate-90 sm:rotate-0">➔</span>
                       <div className="p-5 border-2 border-primary rounded-xl text-primary bg-accent cursor-default group hover:shadow-lg transition-all duration-300">
                         <TrendingUp className="h-8 w-8 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                         <span className="font-medium">Transformation</span>
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
