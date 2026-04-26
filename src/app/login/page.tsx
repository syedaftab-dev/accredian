"use client";

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Eye, EyeOff, Lock, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('This is a demo login page. No actual authentication is performed.');
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Navbar />
      <main className="flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md page-enter">
          {/* Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary/20">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
              <p className="mt-2 text-sm text-gray-500">Sign in to access your Accredian dashboard</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-12 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Remember + Forgot */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                  <span className="text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-primary hover:text-primary-hover font-medium transition-colors">
                  Forgot password?
                </a>
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full gap-2 shadow-lg shadow-primary/20">
                Sign In <ArrowRight className="h-4 w-4" />
              </Button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-500">
              Don't have an account?{' '}
              <Link href="/try-for-free" className="text-primary hover:text-primary-hover font-medium transition-colors">
                Try for Free
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
