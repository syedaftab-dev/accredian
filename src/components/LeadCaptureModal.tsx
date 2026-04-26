"use client";

import React, { useState } from 'react';
import { Button } from './ui/Button';
import { X } from 'lucide-react';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LeadCaptureModal({ isOpen, onClose }: LeadCaptureModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setTimeout(() => {
          onClose();
          setStatus('idle');
          setFormData({ name: '', email: '', company: '', phone: '' });
        }, 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-white rounded-xl shadow-2xl p-6 md:p-8 animate-in fade-in zoom-in duration-200">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-5 w-5" />
        </button>

        {status === 'success' ? (
          <div className="text-center py-8">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
              <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Thank you!</h3>
            <p className="text-gray-600">Our enterprise expert will contact you shortly.</p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Request a Demo</h2>
            <p className="text-sm text-gray-600 mb-6">Learn how Accredian can transform your organization's skills.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input 
                  type="text" id="name" name="name" required
                  value={formData.name} onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Work Email *</label>
                <input 
                  type="email" id="email" name="email" required
                  value={formData.email} onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
                <input 
                  type="text" id="company" name="company" required
                  value={formData.company} onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  placeholder="Acme Inc."
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input 
                  type="tel" id="phone" name="phone"
                  value={formData.phone} onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              {status === 'error' && (
                <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
              )}

              <Button type="submit" className="w-full" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Submitting...' : 'Submit Request'}
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
