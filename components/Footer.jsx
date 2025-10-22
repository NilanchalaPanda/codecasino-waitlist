import { Star } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-6">
          <h3 className="font-display text-3xl text-cyan mb-2">
            CodeCasino.tech
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
            About
          </a>
          <a
            href="#features"
            className="text-secondary hover:text-cyan transition-colors"
          >
            Features
          </a>
          <a
            href="#formats"
            className="text-secondary hover:text-cyan transition-colors"
          >
            Battle Formats
          </a>
          <a
            href="#waitlist"
            className="text-secondary hover:text-cyan transition-colors"
          >
            Join Waitlist
          </a>
        </div>
        <div className="flex justify-center gap-4 mb-8">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star
              key={i}
              className="h-5 w-5 text-orange-accent fill-orange-accent"
            />
          ))}
        </div>
        <p className="text-secondary text-xs">
          © 2025 CodeCasino. Concept by Nxl. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
