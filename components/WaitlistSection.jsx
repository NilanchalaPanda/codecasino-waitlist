"use client";

import { supabase } from "@/lib/supabaseClient";
import { Mail, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

export const WaitlistSection = () => {
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
