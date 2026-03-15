"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "@/features/landing/navbar";
import Footer from "@/features/landing/footer";
import { Sparkles, Code2, Users2, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";

// ─── Data ─────────────────────────────────────────────────────────────────────

const VALUES = [
  {
    icon: Code2,
    title: "Precision Engineering",
    description:
      "Every line of code and every pixel is crafted with obsessive attention to detail. We believe precision is the foundation of excellence.",
    color: "emerald",
  },
  {
    icon: Sparkles,
    title: "AI-First Approach",
    description:
      "We don't just add AI; we build with it. Integrating cutting-edge intelligence into the developer workflow to augment human creativity.",
    color: "violet",
  },
  {
    icon: Users2,
    title: "Human Centric",
    description:
      "Technology is only as good as the problems it solves for people. Our focus is on empowering engineers to do their best work.",
    color: "sky",
  },
];

const STATS = [
  { display: "12k+", label: "Developers" },
  { display: "98%", label: "Satisfaction" },
  { display: "3×", label: "Faster shipping" },
  { display: "40+", label: "Integrations" },
];

const TIMELINE = [
  {
    year: "2022",
    title: "The idea",
    body: "Two engineers tired of losing flow to tooling friction sketch out what a truly AI-native IDE would look like.",
  },
  {
    year: "2023",
    title: "First build",
    body: "Alpha ships to 200 hand-picked developers. Context-aware completions and predictive terminal debut.",
  },
  {
    year: "2024",
    title: "Seed round",
    body: "$4.2M raised. Team grows to 14. Public beta opens — 8,000 sign-ups in the first week.",
  },
  {
    year: "Now",
    title: "Scaling up",
    body: "12k+ active developers, 40+ integrations, and a v2 editor rewrite underway. Just getting started.",
  },
];

// ─── Animated counter ─────────────────────────────────────────────────────────

function Counter({ display }: { display: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {display}
    </motion.span>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-white selection:text-black">
      <Navbar />

      <main className="pt-32 pb-24 overflow-hidden">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="mb-28">
          <div className="max-w-7xl mx-auto px-6 w-[92%]">

            {/* Title + subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-10"
            >
              <h1 className="text-4xl md:text-6xl font-medium leading-[1.08] tracking-tight mb-4">
                Meet ikigai-labs
              </h1>
              <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-2xl font-light">
                ikigai-labs builds the tools that give engineers superpowers — bridging
                human creativity with artificial intelligence through context-perfect interfaces.
              </p>
            </motion.div>

            {/* Full-width image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden mb-14 group"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.02]"
                style={{ backgroundImage: "url('/hero.avif')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              {/* Launch video button */}
              <div className="absolute bottom-7 left-7">
                <button className="inline-flex items-center gap-3 bg-black/70 hover:bg-black/90 backdrop-blur-md border border-white/10 text-white text-sm font-medium px-5 py-3 rounded-full transition-all duration-300">
                  <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                      <path d="M1 1L9 6L1 11V1Z" fill="black" />
                    </svg>
                  </span>
                  launch video
                </button>
              </div>
            </motion.div>

            {/* Two-column text */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24"
            >
              <p className="text-2xl md:text-3xl font-medium leading-snug">
                We launched ikigai-labs with a vision of &ldquo;AI-Native Development&rdquo;, where AI doesn&apos;t just autocomplete — it understands your intent and acts before friction appears.
              </p>
              <p className="text-white/45 leading-relaxed font-light text-sm md:text-base self-end">
                Born from years of frustration with tools that slow engineers down, we saw how even the best developers lost hours to context-switching and tooling overhead. In 2022, we set out to build the IDE we always wanted — one that stays in sync with how engineers actually think. Today, we&apos;re pioneering a new class of developer tooling: editors and terminals that know your codebase better than any tool has before.
              </p>
            </motion.div>

          </div>
        </section>

        {/* ── STATS ────────────────────────────────────────────────────────── */}
        <section className="mb-32">
          <div className="max-w-7xl mx-auto px-6 w-[92%]">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/[0.06] border border-white/[0.06] rounded-3xl overflow-hidden">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="px-8 py-10 bg-white/[0.01] hover:bg-white/[0.03] transition-colors"
                >
                  <div className="text-4xl md:text-5xl font-medium tracking-tight mb-2">
                    <Counter display={stat.display} />
                  </div>
                  <div className="text-white/30 text-[11px] uppercase tracking-widest font-mono">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      

        {/* ── TIMELINE ─────────────────────────────────────────────────────── */}
        <section className="mb-36">
          <div className="max-w-7xl mx-auto px-6 w-[92%]">

            {/* Header row: label + title left, count right */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-end justify-between mb-16 pb-6 border-b border-white/[0.06]"
            >
              <div>
                <span className="text-white/30 text-[11px] uppercase tracking-widest font-mono block mb-4">Our journey</span>
                <h2 className="text-4xl md:text-5xl font-medium">How we got here.</h2>
              </div>
              <span className="font-mono text-[11px] text-white/20 hidden md:block">
                {TIMELINE.length} milestones
              </span>
            </motion.div>

            {/* Cards in a 2×2 grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.05] rounded-2xl overflow-hidden">
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative bg-[#080808] p-10 group hover:bg-white/[0.03] transition-colors duration-300 flex flex-col justify-between min-h-[220px]"
                >
                  {/* Year badge */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-[11px] text-white/25 uppercase tracking-widest border border-white/[0.08] rounded-full px-3 py-1">
                      {item.year}
                    </span>
                    <span className="font-mono text-[11px] text-white/[0.1] group-hover:text-white/25 transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-medium mb-3 group-hover:text-white transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-white/40 leading-relaxed font-light text-sm">{item.body}</p>
                  </div>

                  {/* Bottom accent line that grows on hover */}
                  <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-emerald-500/50 to-transparent transition-all duration-500" />
                </motion.div>
              ))}
            </div>

          </div>
        </section>
  {/* ── MISSION ──────────────────────────────────────────────────────── */}
        <section
          className="mb-36 py-24 border-y border-white/[0.05]"
          style={{ background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.01) 50%, transparent)" }}
        >
          <div className="max-w-7xl mx-auto px-6 w-[92%]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px w-8 bg-white/20" />
                  <span className="text-white/30 text-[11px] uppercase tracking-widest font-mono">Why we exist</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-medium mb-8 leading-snug">
                  Focus on what matters.<br />
                  <span className="text-white/30">Let AI handle the rest.</span>
                </h2>
                <div className="space-y-5 text-white/50 leading-relaxed font-light">
                  <p>
                    Coding has become increasingly complex. From managing state transitions
                    to debugging terminal outputs, the friction between thought and
                    execution is at an all-time high.
                  </p>
                  <p>
                    We started ikigai-labs to remove that friction. By building a
                    code editor that understands your intent and a terminal that
                    suggests fixes before you even see the error, we&apos;re allowing
                    developers to stay in the &ldquo;flow&rdquo; longer.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 mt-10">
                  {["Intent-aware editor", "Predictive terminal", "Zero-config setup"].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-white/40 border border-white/[0.08] rounded-full px-4 py-1.5 bg-white/[0.02] hover:border-white/20 hover:text-white/60 transition-all cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-black relative shadow-2xl group">
                  <div
                    className="absolute inset-0 bg-cover bg-center  transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: "url('/hero.avif')" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  {/* Floating badge */}
                  <div className="absolute top-8 right-8 bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-mono text-white/40">Active builders</span>
                    </div>
                    <p className="text-xl font-medium">12,000+</p>
                  </div>

                  <div className="absolute bottom-10 left-10">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-5xl font-mono text-white/10">01</span>
                      <div className="h-px w-12 bg-white/20" />
                    </div>
                    <p className="text-xl font-medium">Built for builders.</p>
                  </div>
                </div>

                {/* Decorative dots */}
                <div
                  className="absolute -bottom-8 -left-8 w-36 h-36 opacity-15 pointer-events-none"
                  style={{ backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)", backgroundSize: "18px 18px" }}
                />
                <div
                  className="absolute -top-6 -right-6 w-28 h-28 opacity-10 pointer-events-none"
                  style={{ backgroundImage: "radial-gradient(circle, rgba(52,211,153,1) 1.5px, transparent 1.5px)", backgroundSize: "16px 16px" }}
                />
              </motion.div>
            </div>
          </div>
        </section>
        {/* ── CORE VALUES ──────────────────────────────────────────────────── */}
        <section className="mb-36">
          <div className="max-w-7xl mx-auto px-6 w-[92%]">

            {/* Header: title left, short description right */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-16 pb-6 border-b border-white/[0.06]"
            >
              <div>
                <span className="text-white/30 text-[11px] uppercase tracking-widest font-mono block mb-4">What guides us</span>
                <h2 className="text-4xl md:text-5xl font-medium">Our Core Principles</h2>
              </div>
              <p className="text-white/35 font-light text-sm leading-relaxed lg:text-right">
                The philosophies that guide every decision we make and every product we ship.
              </p>
            </motion.div>

            {/* Full-width stacked rows */}
            <div className="space-y-px">
              {VALUES.map((value, idx) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] gap-8 items-center px-8 py-10 rounded-2xl hover:bg-white/[0.03] border border-transparent hover:border-white/[0.06] transition-all duration-300"
                >
                  {/* Index + icon */}
                  <div className="flex items-center gap-5 md:flex-col md:items-start md:gap-3">
                    <span className="font-mono text-[11px] text-white/20 group-hover:text-white/40 transition-colors">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-${value.color}-500/10 border border-${value.color}-500/20 text-${value.color}-400 group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon size={18} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-medium group-hover:text-white transition-colors duration-200">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/40 leading-relaxed font-light text-sm">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 w-[92%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-[40px] overflow-hidden bg-white px-8 py-24 text-center flex flex-col items-center text-black"
          >
            <div
              className="absolute inset-0 opacity-[0.80] pointer-events-none"
              style={{ backgroundImage: "url('/hero.avif')", backgroundSize: "cover", backgroundPosition: "center" }}
            />
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-3xl bg-black/[0.06] border border-black/[0.08] flex items-center justify-center mb-8">
                <Rocket className="text-black" size={32} />
              </div>
              <p className="text-black text-[11px] uppercase tracking-widest font-mono mb-6">Ready to level up?</p>
              <h2 className="text-4xl md:text-6xl font-medium text-black mb-10 tracking-tight leading-[1.05]">
                Want to see what <br />
                <span className="text-black/75">we&apos;re building?</span>
              </h2>
              <Link
                href="/"
                className="group inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-black/80 transition-all duration-300 shadow-2xl"
              >
                Explore the platform
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </section>

      </main>

      <Footer />
    </div>
  );
}