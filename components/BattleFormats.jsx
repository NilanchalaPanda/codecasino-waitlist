"use client";

import { Code2, SkipForward, Timer, Zap } from "lucide-react";
import { useState } from "react";

export const BattleFormats = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const formats = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Jogger",
      duration: "15 mins",
      problems: "1",
      difficulty: "Easy/Medium/Hard",
      color: "cyan",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Sprinter",
      duration: "20 mins",
      problems: "2",
      difficulty: "Easy/Medium/Hard",
      color: "orange-accent",
    },
    {
      icon: <SkipForward className="h-8 w-8" />,
      title: "Pacer",
      duration: "30 mins",
      problems: "3",
      difficulty: "Easy/Medium/Hard",
      color: "cyan",
    },
    {
      icon: <Timer className="h-8 w-8" />,
      title: "Marathon",
      duration: "40 mins",
      problems: "5",
      difficulty: "Easy/Medium/Hard",
      color: "orange-accent",
    },
  ];

  return (
    <section id="formats" className="py-20 bg-background px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-4xl sm:text-5xl mb-4 text-center text-foreground">
          Battle Formats
        </h2>
        <p className="text-secondary text-center max-w-2xl mx-auto mb-12">
          Choose your preferred battle format and compete at your skill level.
          Each format offers unique challenges!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {formats.map((format, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`bg-gray-900 border-2 rounded-xl p-6 transition-all duration-300 cursor-pointer transform ${
                hoveredIndex === idx
                  ? "border-cyan shadow-xl shadow-cyan/30 scale-105 -translate-y-2"
                  : "border-gray-800 hover:border-gray-700"
              }`}
            >
              <div
                className={`bg-gray-800 rounded-lg p-3 mb-4 inline-block transition-colors ${
                  hoveredIndex === idx ? "text-cyan" : "text-gray-500"
                }`}
              >
                {format.icon}
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                {format.title}
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-mono">
                  <span className="text-secondary">Duration:</span>
                  <span
                    className={`font-bold ${
                      hoveredIndex === idx ? "text-orange-accent" : "text-cyan"
                    }`}
                  >
                    {format.duration}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm font-mono">
                  <span className="text-secondary">Problems:</span>
                  <span
                    className={`font-bold ${
                      hoveredIndex === idx ? "text-orange-accent" : "text-cyan"
                    }`}
                  >
                    {format.problems}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm font-mono">
                  <span className="text-secondary">Difficulty:</span>
                  <span
                    className={`font-bold text-xs ${
                      hoveredIndex === idx ? "text-orange-accent" : "text-cyan"
                    }`}
                  >
                    {format.difficulty}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
