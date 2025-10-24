import { Code2, Crown, Swords, TrendingUp, Trophy, Users } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: <Swords className="h-6 w-6" />,
      title: "Compete in Real-Time",
      desc: "Battle other coders worldwide in live challenges that test your logic, speed, and precision.",
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Earn as You Play",
      desc: "Win coding duels, collect rewards, and cash in your skills — because skill deserves payoff.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Challenge Friends & Teams",
      desc: "Create private battles, host coding matches, and build your own competitive community.",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Climb the Ranks",
      desc: "Level up through tiers, unlock badges, and prove your mastery on global leaderboards.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-background px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-4xl sm:text-5xl mb-4 text-center text-foreground">
          Why Choose <span className="text-cyan">CodeNEarn</span>?
        </h2>
        <p className="text-secondary text-center max-w-2xl mx-auto mb-12">
          Experience coding like never before with our gamified platform
          designed for competitive programmers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-cyan transition-all duration-300 shadow-lg shadow-gray-900 group"
            >
              <div className="flex flex-row items-center gap-x-4">
                <div className="bg-gray-800 rounded-lg p-3 mb-4 inline-block text-cyan group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="font-display text-xl mb-3 text-foreground">
                  {feature.title}
                </h3>
              </div>
              <p className="text-secondary text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};