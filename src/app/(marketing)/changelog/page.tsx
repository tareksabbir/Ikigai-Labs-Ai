"use client";

import React from "react";
import Navbar from "@/features/landing/navbar";
import Footer from "@/features/landing/footer";
import { motion } from "framer-motion";
import { Zap, Rocket, Bug, Sparkles, Cpu } from "lucide-react";

const UPDATES = [
  {
    version: "v1.2.0",
    date: "March 20, 2024",
    title: "Neural Interface Optimization",
    description: "Major performance overhaul for context-aware completions in large mono-repos.",
    type: "Feature",
    icon: Zap,
    changes: [
      "Reduced latency by 45% using local inference caching",
      "Improved multi-file reasoning for Go and Rust projects",
      "New 'Context-Lock' feature for pinning specific research files",
    ],
  },
  {
    version: "v1.1.5",
    date: "March 05, 2024",
    title: "The Terminal Rewrite",
    description: "A complete rebuild of the Predictive Terminal core for better shell integration.",
    type: "Improvement",
    icon: Cpu,
    changes: [
      "Support for custom ZSH aliases and oh-my-zsh themes",
      "Predictive fix suggestions now appear as ghost text",
      "Fixed a memory leak during long-running build processes",
    ],
  },
  {
    version: "v1.1.0",
    date: "February 12, 2024",
    title: "Collaborative Research v1",
    description: "Bringing multiplayer real-time collaboration to the Lab environment.",
    type: "Feature",
    icon: Rocket,
    changes: [
      "Real-time cursor tracking for up to 10 investigators",
      "Shared research notes with markdown support",
      "Integrated audio-context for quick debugging syncs",
    ],
  },
  {
    version: "v1.0.4",
    date: "January 28, 2024",
    title: "Bug Fix Session",
    description: "Hardening the platform and fixing community-reported edge cases.",
    type: "Patch",
    icon: Bug,
    changes: [
      "Fixed image optimization issues on high-DPI displays",
      "Resolved clerk auth redirect loops in specific Safari versions",
      "Cleaned up UI padding across the dashboard views",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 w-[92%]">
          
          <header className="mb-20 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 text-xs text-white/40 font-mono uppercase tracking-[0.3em] mb-4"
            >
              <span className="w-8 h-px bg-white/20" /> Lab Updates
            </motion.div>
            <h1 className="text-4xl sm:text-5xl font-medium mb-6 tracking-[-0.02em] leading-[1.02]">
              The evolution of <br />
              <span className="text-white/40">ikigai-labs</span>
            </h1>
            <p className="text-white/40 font-light text-lg max-w-lg leading-relaxed">
              Tracking every adjustment, optimization, and breakthrough in our quest to build the perfect research interface.
            </p>
          </header>

          <div className="space-y-12">
            {UPDATES.map((update, idx) => (
              <motion.div
                key={update.version}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative group grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8"
              >
                {/* Desktop Version/Date */}
                <div className="hidden lg:block pt-2">
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-emerald-400 uppercase tracking-widest block w-fit mb-3">
                    {update.version}
                  </span>
                  <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest leading-relaxed">
                    {update.date}
                  </p>
                </div>

                {/* Content Card */}
                <div className="bg-linear-to-b from-white/5 to-white/[0.01] border border-white/10 border-t-white/25 rounded-[2.5rem] p-8 md:p-12 hover:bg-white/8 hover:border-white/30 transition-all duration-500 backdrop-blur-md shadow-2xl shadow-black/50 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                    <update.icon size={120} strokeWidth={1} />
                  </div>

                  <div className="flex items-center gap-3 mb-6 lg:hidden">
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
                      {update.version}
                    </span>
                    <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
                      {update.date}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4 mb-8">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-medium mb-3 tracking-tight">
                        {update.title}
                      </h2>
                      <p className="text-white/40 font-light leading-relaxed max-w-2xl">
                        {update.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 max-w-xl">
                    {update.changes.map((change, i) => (
                      <div key={i} className="flex items-start gap-4 text-sm text-white/60 font-light border-l border-white/10 pl-6 py-1">
                        {change}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <footer className="mt-40 text-center">
            <div className="p-12 rounded-[3rem] bg-white text-black relative overflow-hidden group">
              <div className="relative z-10">
                <p className="text-[10px] font-mono uppercase tracking-[0.3em] mb-6 mb-4">Want more updates?</p>
                <h3 className="text-3xl md:text-5xl font-medium mb-10 tracking-tight leading-tight">
                  Follow the progress <br /> in real-time.
                </h3>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <button className="bg-black text-white px-8 py-4 rounded-xl font-medium hover:bg-neutral-900 transition-all shadow-2xl">
                    Join the Discord
                  </button>
                  <button className="bg-transparent border border-black/10 text-black px-8 py-4 rounded-xl font-medium hover:bg-black/5 transition-all">
                    Twitter @ikigaiLabs
                  </button>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>

      <Footer />
    </div>
  );
}
