"use client";

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What is Accredian Enterprise?",
    answer: "Accredian Enterprise provides tailored learning and upskilling solutions for organizations to build future-ready data, AI, and product teams."
  },
  {
    question: "Can we customize the curriculum?",
    answer: "Yes, our learning paths are fully customizable. We work closely with your leadership to map the curriculum to your specific business objectives and skill gaps."
  },
  {
    question: "What is the typical duration of a program?",
    answer: "Program durations vary depending on the depth of the curriculum, ranging from intensive 2-week workshops to comprehensive 6-month academies."
  },
  {
    question: "How do you measure success?",
    answer: "We measure success through completion rates, capstone project evaluations, and post-training impact assessments to ensure a positive ROI on your learning investment."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-gray-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent rounded-full text-primary text-sm font-medium mb-4">
            <HelpCircle className="h-4 w-4" /> FAQs
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Have questions? We&apos;re here to help.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white border rounded-xl overflow-hidden transition-all duration-300 ${
                openIndex === index 
                  ? 'border-primary/30 shadow-md shadow-primary/5' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none group"
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                <span className={`font-semibold transition-colors duration-200 ${
                  openIndex === index ? 'text-primary' : 'text-gray-900 group-hover:text-primary'
                }`}>
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-all duration-300 ${
                  openIndex === index ? 'bg-primary/10 rotate-180' : 'bg-gray-100 group-hover:bg-accent'
                }`}>
                  <ChevronDown className={`h-4 w-4 transition-colors duration-200 ${
                    openIndex === index ? 'text-primary' : 'text-gray-500'
                  }`} />
                </div>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600 leading-relaxed border-t border-gray-100 pt-4">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
