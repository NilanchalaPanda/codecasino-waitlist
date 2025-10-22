"use client";

import { useEffect, useState } from "react";

export const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const targetDate = new Date("2025-11-20T00:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        return;
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      setDays(d);
      setHours(h);
      setMinutes(m);
      setSeconds(s);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 w-full max-w-2xl mx-auto">
      <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border-2 border-cyan text-center">
        <div className="text-2xl sm:text-3xl font-bold text-cyan">{days}</div>
        <div className="text-xs sm:text-sm text-secondary">Days</div>
      </div>
      <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border-2 border-cyan text-center">
        <div className="text-2xl sm:text-3xl font-bold text-cyan">{hours}</div>
        <div className="text-xs sm:text-sm text-secondary">Hours</div>
      </div>
      <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border-2 border-cyan text-center">
        <div className="text-2xl sm:text-3xl font-bold text-cyan">
          {minutes}
        </div>
        <div className="text-xs sm:text-sm text-secondary">Minutes</div>
      </div>
      <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border-2 border-cyan text-center">
        <div className="text-2xl sm:text-3xl font-bold text-cyan">
          {seconds}
        </div>
        <div className="text-xs sm:text-sm text-secondary">Seconds</div>
      </div>
    </div>
  );
};
