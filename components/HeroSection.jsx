// "use client";

// import { supabase } from "@/lib/supabaseClient";
// import { useEffect, useState } from "react";
// import { Countdown } from "./CountDown";
// import { ChevronDown, Rocket, Sparkles, UserRound } from "lucide-react";

// export const HeroSection = () => {
//   const [waitlistCount, setWaitlistCount] = useState(null);

//   // Fetch waitlist count from Supabase
//   useEffect(() => {
//     const fetchWaitlistCount = async () => {
//       const { count, error } = await supabase
//         .from("waitlist")
//         .select("*", { count: "exact", head: true });

//       if (error) {
//         console.error("Failed to fetch waitlist count:", error);
//       } else {
//         setWaitlistCount(count ?? 0);
//       }
//     };

//     fetchWaitlistCount();
//   }, []);

//   return (
//     <section className="flex flex-col items-center justify-center min-h-dvh text-center bg-background px-4 py-8 sm:py-12 relative overflow-hidden overflow-x-hidden">
//       {/* Animated Background */}
//       <div className="absolute inset-0 opacity-30 pointer-events-none overflow-hidden">
//         <div className="absolute top-20 left-10 w-40 h-40 sm:w-64 sm:h-64 bg-cyan rounded-full blur-3xl animate-pulse"></div>
//         <div
//           className="absolute bottom-20 right-10 w-60 h-60 sm:w-96 sm:h-96 bg-orange-accent rounded-full blur-3xl animate-pulse"
//           style={{ animationDelay: "1s" }}
//         ></div>
//       </div>

//       {/* Countdown */}
//       <div className="relative z-10 w-full max-w-4xl mb-6 sm:mb-8">
//         <h2 className="font-display text-xl sm:text-3xl mb-2 text-cyan">
//           Launching in
//         </h2>
//         <Countdown />
//       </div>

//       {/* Hero Content */}
//       <div className="relative z-10 px-4 w-full max-w-4xl">
//         <div className="mb-4 sm:mb-6 inline-block">
//           <span className="px-4 py-2 bg-cyan/10 border border-cyan/30 rounded-full text-cyan text-[10px] sm:text-sm font-mono animate-pulse">
//             🎰 Join the Waitlist - Get Early Access!
//           </span>
//         </div>

//         <h1 className="font-display font-bold text-[34px] sm:text-6xl lg:text-7xl bg-clip-text bg-linear-to-r from-cyan via-cyan to-orange-accent">
//           Battle to Earn
//         </h1>

//         <p className="text-lg sm:text-2xl mb-4 sm:mb-6 text-cyan font-display">
//           Battle coders in real-time and earn rewards
//         </p>

//         {/* Call-to-Actions */}
//         <div className="flex flex-wrap gap-3 sm:gap-4 justify-center mb-12 sm:mb-16">
//           <a
//             href="#waitlist"
//             className="px-6 sm:px-8 py-3 sm:py-4 bg-cyan text-gray-900 text-sm sm:text-base font-bold rounded-lg hover:bg-orange-accent transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-cyan/50"
//           >
//             <Rocket size={18} /> Join Waitlist
//           </a>
//           <a
//             href="#features"
//             className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-cyan text-cyan text-sm sm:text-base font-bold rounded-lg hover:bg-cyan hover:text-gray-900 transition-all transform hover:scale-105 flex items-center gap-2"
//           >
//             <Sparkles size={18} /> Explore Features
//           </a>
//         </div>

//         {/* Only show Waitlist Count */}
//         <div className="text-center mt-6">
//           <div className="flex items-center justify-center gap-2">
//             <UserRound size={22} />
//             <span className="text-lg sm:text-xl font-mono text-cyan">
//               {waitlistCount !== null ? waitlistCount.toLocaleString() : "—"}{" "}
//               warriors joined
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <a href="#about" className="absolute bottom-6 sm:bottom-8 animate-bounce">
//         <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8 text-cyan" />
//       </a>
//     </section>
//   );
// };

"use client";

import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";
import { Countdown } from "./CountDown";
import { ChevronDown, Rocket, Sparkles, UserRound, Zap } from "lucide-react"; // Imported Zap for the new badge

// Define the maximum number of guaranteed coupon spots
const MAX_COUPON_SPOTS = 100;

export const HeroSection = () => {
  const [waitlistCount, setWaitlistCount] = useState(null);

  // Fetch waitlist count from Supabase
  useEffect(() => {
    const fetchWaitlistCount = async () => {
      const { count, error } = await supabase
        .from("waitlist")
        .select("*", { count: "exact", head: true });

      if (error) {
        console.error("Failed to fetch waitlist count:", error);
      } else {
        setWaitlistCount(count ?? 0);
      }
    };

    fetchWaitlistCount();
  }, []);

  // Calculate remaining spots
  const remainingSpots =
    waitlistCount !== null
      ? Math.max(0, MAX_COUPON_SPOTS - waitlistCount)
      : null;

  return (
    <section className="flex flex-col items-center justify-center min-h-dvh text-center bg-background px-4 py-8 sm:py-12 relative overflow-hidden overflow-x-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 sm:w-64 sm:h-64 bg-cyan rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-60 h-60 sm:w-96 sm:h-96 bg-orange-accent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Countdown */}
      <div className="relative z-10 w-full max-w-4xl mb-6 sm:mb-8">
        <h2 className="font-display text-xl sm:text-3xl mb-2 text-cyan">
          Launching in
        </h2>
        <Countdown />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-4 w-full max-w-4xl">
        {/* 1. New Super Attention Grabber */}
        <div className="mb-4 inline-block">
          <span className="px-3 py-1 bg-orange-accent/20 border border-orange-accent/50 rounded-full text-orange-accent text-xs sm:text-sm font-bold flex items-center gap-1 shadow-md shadow-orange-accent/30 animate-pulse">
            <Zap size={14} /> FIRST 100 GET GUATANTEED COUPON
          </span>
        </div>
        <h1 className="font-display font-bold text-[34px] sm:text-6xl lg:text-7xl bg-clip-text bg-linear-to-r from-cyan via-cyan to-orange-accent">
          Battle to Earn
        </h1>
        <p className="text-lg sm:text-2xl mb-4 sm:mb-6 text-cyan font-display">
          Battle coders in real-time and earn rewards
        </p>
        {/* Call-to-Actions */}
        <div className="flex flex-wrap gap-3 sm:gap-4 justify-center mb-12 sm:mb-16">
          <a
            href="#waitlist"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-cyan text-gray-900 text-sm sm:text-base font-bold rounded-lg hover:bg-orange-accent transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-cyan/50"
          >
            <Rocket size={18} /> Join Waitlist
          </a>
          <a
            href="#features"
            className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-cyan text-cyan text-sm sm:text-base font-bold rounded-lg hover:bg-cyan hover:text-gray-900 transition-all transform hover:scale-105 flex items-center gap-2"
          >
            <Sparkles size={18} /> Explore Features
          </a>
        </div>

        {/* 2. Updated Waitlist Count to Show Urgency */}
        <div className="text-center mt-6">
          <div className="flex items-center justify-center gap-2">
            <UserRound size={22} />
            <span className="text-lg sm:text-xl font-mono text-cyan">
              <span className="font-bold text-orange-accent">
                ONLY{" "}
                {remainingSpots !== null
                  ? remainingSpots.toLocaleString()
                  : "—"}{" "}
              </span>
              Spots Left!
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="#about" className="absolute bottom-6 sm:bottom-8 animate-bounce">
        <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8 text-cyan" />
      </a>
    </section>
  );
};
