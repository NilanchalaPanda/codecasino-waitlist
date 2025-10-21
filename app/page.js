"use client";

import React, { useState, useEffect } from "react";
import {
  Swords,
  Trophy,
  Crown,
  Code2,
  Timer,
  Zap,
  SkipForward,
  UserRound,
  CodeXml,
  BarChart3,
  Users,
  Target,
  Gamepad2,
  Sparkles,
  TrendingUp,
  Mail,
  MessageCircle,
  Send,
  Check,
  ChevronDown,
  Star,
  Rocket,
  Shield,
  Flame,
} from "lucide-react";

// Space-style countdown component
const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate - now;

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

import { supabase } from "@/lib/supabaseClient";

const HeroSection = () => {
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
        <div className="mb-4 sm:mb-6 inline-block">
          <span className="px-4 py-2 bg-cyan/10 border border-cyan/30 rounded-full text-cyan text-[10px] sm:text-sm font-mono animate-pulse">
            🎰 Join the Waitlist - Get Early Access!
          </span>
        </div>

        <h1 className="font-display font-bold text-[34px] sm:text-6xl lg:text-7xl bg-clip-text bg-linear-to-r from-cyan via-cyan to-orange-accent animate-[pulse_3s_ease-in-out_infinite]">
          CodeCasino.tech
        </h1>

        <p className="text-lg sm:text-2xl mb-4 sm:mb-6 text-cyan font-display">
          Where Code Meets Competition
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

        {/* Only show Waitlist Count */}
        <div className="text-center mt-6">
          <div className="flex items-center justify-center gap-2">
            <UserRound size={22} />
            <span className="text-lg sm:text-xl font-mono text-cyan">
              {waitlistCount !== null ? waitlistCount.toLocaleString() : "—"}{" "}
              warriors joined
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

// About Section
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-900/50 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-4xl sm:text-5xl mb-6 text-center">
          <span className="text-cyan">LeetCode</span> +{" "}
          <span className="text-orange-accent">eSports</span> +{" "}
          <span className="text-cyan">Casino Thrill</span>
        </h2>
        <p className="text-secondary text-center max-w-3xl mx-auto mb-12 text-lg">
          CodeCasino transforms daily coding practice into a competitive,
          rewarding experience. Join real-time battles, stake VP or real money,
          climb ranks, and sharpen your coding skills.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 p-8 rounded-xl border border-cyan/30 hover:border-cyan transition-all hover:shadow-lg hover:shadow-cyan/20">
            <Target className="h-12 w-12 text-cyan mb-4" />
            <h3 className="font-display text-xl mb-3 text-foreground">
              Our Mission
            </h3>
            <p className="text-secondary text-sm">
              Help developers stay motivated and consistent in coding by
              blending learning, competition, and fun.
            </p>
          </div>
          <div className="bg-gray-800/50 p-8 rounded-xl border border-orange-accent/30 hover:border-orange-accent transition-all hover:shadow-lg hover:shadow-orange-accent/20">
            <Sparkles className="h-12 w-12 text-orange-accent mb-4" />
            <h3 className="font-display text-xl mb-3 text-foreground">
              Our Vision
            </h3>
            <p className="text-secondary text-sm">
              Become the global home for gamified technical learning, where
              coders grow through play.
            </p>
          </div>
          <div className="bg-gray-800/50 p-8 rounded-xl border border-cyan/30 hover:border-cyan transition-all hover:shadow-lg hover:shadow-cyan/20">
            <Flame className="h-12 w-12 text-cyan mb-4" />
            <h3 className="font-display text-xl mb-3 text-foreground">
              The Why
            </h3>
            <p className="text-secondary text-sm">
              Learning code should feel like a match, not a marathon —
              competitive, thrilling, and rewarding every time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Battle Formats with Interactive Cards
const BattleFormats = () => {
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

// Game Modes Section
const GameModes = () => {
  const modes = [
    {
      icon: <Trophy className="h-12 w-12" />,
      title: "Battle Royale",
      description:
        "100 players, escalating difficulty, bottom 20% eliminated every 15 mins. Final 10 share the prize pool!",
      tag: "Epic",
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Team Tournaments",
      description:
        "2v2 or 3v3 squad matches with shared timers, voice chat, and collaborative problem-solving.",
      tag: "Social",
    },
    {
      icon: <Flame className="h-12 w-12" />,
      title: "Streak Multipliers",
      description:
        "Daily login bonuses, win streak multipliers (1.2x → 2x), and visible 'hot streak' badges.",
      tag: "Rewards",
    },
    {
      icon: <Gamepad2 className="h-12 w-12" />,
      title: "Spectator Mode",
      description:
        "Watch top players live, bet VP on matches, and interact through Twitch-style chat.",
      tag: "Watch",
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Championship Leagues",
      description:
        "Bronze → Diamond tiers with monthly championships and promotion/relegation system.",
      tag: "Competitive",
    },
    {
      icon: <Sparkles className="h-12 w-12" />,
      title: "Power-Ups Store",
      description:
        "Use VP to buy +5 minutes, hints, skip problems, or peek at others' progress.",
      tag: "Strategy",
    },
  ];

  return (
    <section id="modes" className="py-20 bg-gray-900/50 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-4xl sm:text-5xl mb-4 text-center text-foreground">
          Game Modes <span className="text-cyan">2.0</span>
        </h2>
        <p className="text-secondary text-center max-w-2xl mx-auto mb-12">
          Experience coding battles like never before with innovative game modes
          designed for maximum engagement.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modes.map((mode, idx) => (
            <div
              key={idx}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-cyan transition-all duration-300 hover:shadow-lg hover:shadow-cyan/20 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-cyan group-hover:scale-110 transition-transform">
                  {mode.icon}
                </div>
                <span className="px-3 py-1 bg-orange-accent/20 text-orange-accent text-xs rounded-full font-mono">
                  {mode.tag}
                </span>
              </div>
              <h3 className="font-display text-xl mb-3 text-foreground group-hover:text-cyan transition-colors">
                {mode.title}
              </h3>
              <p className="text-secondary text-sm leading-relaxed">
                {mode.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Features Section
const FeaturesSection = () => {
  const features = [
    {
      icon: <Swords className="h-8 w-8" />,
      title: "Real-time Battles",
      desc: "Compete against developers worldwide in live coding challenges with instant feedback and rankings.",
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Skill-based Ranking",
      desc: "Climb through Bronze, Silver, Gold, Platinum, and Diamond tiers based on your performance.",
    },
    {
      icon: <Crown className="h-8 w-8" />,
      title: "Victory Points",
      desc: "Earn VP through victories and use them to unlock power-ups, themes, and exclusive content.",
    },
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Algorithm Mastery",
      desc: "Master data structures, algorithms, and problem-solving techniques through gamified challenges.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Friend Challenges",
      desc: "Tag friends, create private battles, and compete with your coding squad.",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Global Leaderboards",
      desc: "Track your progress with global, regional, and college-based rankings and statistics.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-background px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-4xl sm:text-5xl mb-4 text-center text-foreground">
          Why Choose <span className="text-cyan">CodeCasino</span>?
        </h2>
        <p className="text-secondary text-center max-w-2xl mx-auto mb-12">
          Experience coding like never before with our gamified platform
          designed for competitive programmers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-cyan transition-all duration-300 hover:shadow-lg hover:shadow-cyan/20 group"
            >
              <div className="bg-gray-800 rounded-lg p-3 mb-4 inline-block text-cyan group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="font-display text-xl mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-secondary text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WaitlistSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    suggestions: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.role) {
      alert("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.from("waitlist").insert([
      {
        name: formData.name,
        email: formData.email,
        role: formData.role,
        suggestions: formData.suggestions || null,
      },
    ]);

    setLoading(false);

    if (error) {
      console.error("Error adding to waitlist", error);
      alert("Something went wrong. Please try again.");
    } else {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <section id="waitlist" className="py-20 bg-gray-900/50 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-cyan/10 border-2 border-cyan rounded-2xl p-12">
            <div className="w-20 h-20 bg-cyan rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <Check className="h-10 w-10 text-gray-900" />
            </div>
            <h3 className="font-display text-3xl mb-4 text-cyan">
              You're on the list! 🎉
            </h3>
            <p className="text-secondary mb-6">
              Thank you for joining CodeCasino! We'll keep you updated on our
              launch and early access opportunities.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: "",
                  email: "",
                  role: "",
                  suggestions: "",
                });
              }}
              className="px-6 py-3 border-2 border-cyan text-cyan rounded-lg hover:bg-cyan hover:text-gray-900 transition-all"
            >
              Submit Another Response
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="py-20 bg-gray-900/50 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-xl sm:text-5xl mb-4 text-foreground">
            Join the <span className="text-cyan">Revolution</span>
          </h2>
          <p className="text-secondary">
            Be among the first to experience the future of competitive coding.
            Share your thoughts and help shape CodeCasino!
          </p>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl px-6 py-8 space-y-6">
          <div>
            <label className="block text-foreground font-mono mb-2 text-sm">
              Your Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-foreground placeholder-white/50 focus:border-cyan focus:outline-none transition-colors"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-foreground font-mono mb-2 text-sm">
              Email Address *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-foreground placeholder-white/50 focus:border-cyan focus:outline-none transition-colors"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-foreground font-mono mb-2 text-sm">
              I am a... *
            </label>
            <select
              value={formData.role}
              onChange={(e) =>
                setFormData({ ...formData, role: e.target.value })
              }
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-foreground placeholder-white/50 focus:border-cyan focus:outline-none transition-colors"
            >
              <option value="">Select your role</option>
              <option value="student">Student (16-25)</option>
              <option value="jobseeker">Job Seeker (21-30)</option>
              <option value="professional">
                Professional Developer (25-35)
              </option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-foreground font-mono mb-2 text-sm">
              Your Suggestions & Feedback
            </label>
            <textarea
              value={formData.suggestions}
              onChange={(e) =>
                setFormData({ ...formData, suggestions: e.target.value })
              }
              rows={5}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-foreground placeholder-white/50 focus:border-cyan focus:outline-none transition-colors resize-none"
              placeholder="What features would you like to see? Any improvements or ideas?"
            />
          </div>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full px-8 py-4 bg-cyan text-gray-900 font-bold rounded-lg hover:bg-orange-accent transition-all transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-cyan/50"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
                Processing...
              </>
            ) : (
              <>
                <Send size={20} /> Join Waitlist
              </>
            )}
          </button>
          <p className="text-xs text-secondary text-center">
            By joining, you agree to receive updates about CodeCasino. We
            respect your privacy.
          </p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/919324387339"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle size={20} /> Chat on WhatsApp
          </a>

          <a
            href="mailto:nilanchalpanda2003@gmail.com"
            className="px-6 py-3 border-2 border-cyan text-cyan font-bold rounded-lg hover:bg-cyan hover:text-gray-900 transition-all flex items-center justify-center gap-2"
          >
            <Mail size={20} /> Email Us
          </a>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
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

// Main App Component
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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Orbitron:wght@500;700&display=swap');

        :root {
          --background: #0d0d0d;
          --foreground: #f5f5f5;
          --color-cyan: #00d9ff;
          --color-orange-accent: #ffa500;
        }

        body {
          background: var(--background);
          color: var(--foreground);
        }

        .font-display {
          font-family: 'Orbitron', sans-serif;
        }

        .font-mono {
          font-family: 'JetBrains Mono', monospace;
        }

        html {
          scroll-behavior: smooth;
        }

        .text-secondary {
          color: #a0a0a0;
        }

        .bg-cyan {
          background-color: #00d9ff;
        }

        .text-cyan {
          color: #00d9ff;
        }

        .border-cyan {
          border-color: #00d9ff;
        }

        .bg-orange-accent {
          background-color: #ffa500;
        }

        .text-orange-accent {
          color: #ffa500;
        }

        .border-orange-accent {
          border-color: #ffa500;
        }

        .bg-gray-900 {
          background-color: #0d0d0d;
        }

        .bg-gray-800 {
          background-color: #1a1a1a;
        }

        .bg-gray-700 {
          background-color: #2a2a2a;
        }

        .border-gray-800 {
          border-color: #1a1a1a;
        }

        .border-gray-700 {
          border-color: #2a2a2a;
        }

        .shadow-cyan {
          --tw-shadow-color: #00d9ff;
        }

        .shadow-orange-accent {
          --tw-shadow-color: #ffa500;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
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
