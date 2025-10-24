import { Flame, Sparkles, Target } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-900/50 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-4xl sm:text-5xl mb-6 text-center text-cyan font-semibold">
          Tired of coding feeling like a chore?
        </h2>
        <p className="text-secondary text-center max-w-3xl mx-auto mb-12 text-lg">
          Join real-time battles, stake VP or real money, climb ranks, and
          sharpen your coding skills.
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
              competitive and rewarding every time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
