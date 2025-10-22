import { Code2, Crown, Swords, TrendingUp, Trophy, Users } from "lucide-react";

export const FeaturesSection = () => {
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
