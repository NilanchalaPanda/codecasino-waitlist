"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

import { Footer } from "@/components/Footer";
import { WaitlistSection } from "@/components/WaitlistSection";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { BattleFormats } from "@/components/BattleFormats";
import { GameModes } from "@/components/GameModes";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Toaster } from "react-hot-toast";

export default function CodeCasinoLanding() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-mono">
      <Toaster />
      <HeroSection />
      <AboutSection />
      <BattleFormats />
      <GameModes />
      <FeaturesSection />
      <WaitlistSection />
      <Footer />
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 p-4 bg-cyan text-gray-900 rounded-full shadow-lg hover:bg-orange-accent transition-all transform hover:scale-110 z-50"
        >
          <ChevronDown className="h-6 w-6 rotate-180" />
        </button>
      )}
    </div>
  );
}
