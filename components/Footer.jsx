import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-6">
          <h3 className="font-display text-3xl text-cyan mb-2">
            CodeNEarn
          </h3>
          <p className="text-secondary text-sm">
            Where coders don't just solve — they compete, win, and level up.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
          <a
            href="#about"
            className="text-secondary hover:text-cyan transition-colors"
          >
            <span className="text-cyan opacity-90">[</span>About
            <span className="text-cyan opacity-90">]</span>
          </a>
          <a
            href="#features"
            className="text-secondary hover:text-cyan transition-colors"
          >
            <span className="text-cyan opacity-90">[</span>Features
            <span className="text-cyan opacity-90">]</span>
          </a>
          <a
            href="#formats"
            className="text-secondary hover:text-cyan transition-colors"
          >
            <span className="text-cyan opacity-90">[</span>Battle Formats
            <span className="text-cyan opacity-90">]</span>
          </a>
          <a
            href="#waitlist"
            className="text-secondary hover:text-cyan transition-colors"
          >
            <span className="text-cyan opacity-90">[</span>Join Waitlist
            <span className="text-cyan opacity-90">]</span>
          </a>
        </div>
        <p className="text-secondary text-xs">
          © 2025 CodeNEarn. Concept by{" "}
          <span className="text-cyan underline">
            <a href="https://www.linkedin.com/in/nilanchal-panda/">Nxl</a>
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};
