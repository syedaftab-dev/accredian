"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { SubNavbar } from "@/components/SubNavbar";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { PartnersSection } from "@/components/PartnersSection";
import { ProgramsSection } from "@/components/ProgramsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { LeadCaptureModal } from "@/components/LeadCaptureModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <SubNavbar />
      
      <main>
        <div onClick={(e) => {
          const target = e.target as HTMLElement;
          if (target.tagName === 'BUTTON' && (target.innerText.includes('Talk to an Expert') || target.innerText.includes('Try for free'))) {
            setIsModalOpen(true);
          }
        }}>
          <HeroSection />
        </div>
        <PartnersSection />
        <StatsSection />
        <ProgramsSection />
        <HowItWorksSection />
        <FAQSection />
      </main>

      <Footer />

      <LeadCaptureModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
