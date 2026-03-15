"use client";

import React from "react";
import { Crosshair, Box, Lock, Zap, Code, Sparkles } from "lucide-react";

const benefits = [
  {
    title: "Full codebase understanding",
    description: "AI that understands your entire project, not just the current file.",
    icon: Crosshair,
  },
  {
    title: "Works out of the box",
    description: "Install once, start coding. Zero configuration required.",
    icon: Box,
  },
  {
    title: "Your code stays yours",
    description: "100% private by default. Your code never leaves your machine.",
    icon: Lock,
  },
  {
    title: "Instant responses",
    description: "Sub-50ms autocomplete and real-time AI. No lag, ever.",
    icon: Zap,
  },
  {
    title: "Every language you use",
    description: "50+ languages supported with the same precision.",
    icon: Code,
  },
  {
    title: "Refactor with confidence",
    description: "Change once, update everywhere. Zero broken imports.",
    icon: Sparkles,
  },
];

export default function Benefits() {
  return (
    <section className="py-24 bg-black text-white relative z-10">
      <div className="max-w-7xl mx-auto px-6 w-[92%]">
        {/* Header Section */}
        <div className="mb-16">
          <p
            className="text-white/40 text-sm font-medium mb-4"
            style={{ fontFamily: "var(--font-plex-mono, monospace)" }}
          >
            {"// Benefits"}
          </p>
          <h2 className="text-3xl md:text-4xl font-medium leading-[1.1] tracking-[-0.02em]">
            <span className="text-white">Ship faster.</span>{" "}
            <span className="text-white/40">Code better.</span>
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-[#111111] border border-white/5 hover:border-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-[#111111] flex items-center justify-center mb-8 border border-white/5 group-hover:border-white/10 transition-colors">
                <benefit.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-medium text-white mb-3 tracking-tight">
                {benefit.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed font-medium">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
