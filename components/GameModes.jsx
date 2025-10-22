import { Flame, Gamepad2, Shield, Sparkles, Trophy, Users } from "lucide-react";

export const GameModes = () => {
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
