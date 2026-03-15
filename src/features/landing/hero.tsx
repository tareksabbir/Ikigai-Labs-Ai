"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  AI_BULLETS,
  CODE_LINES,
  SIDEBAR_ITEMS,
  TERMINAL_LINES,
  TOKEN_COLOR,
  WINDOW_TABS,
} from "@/data/hero-data";

// ── Framer Motion variants ──────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.85, delay: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const cursorBlink: Variants = {
  animate: {
    opacity: [1, 0, 1],
    transition: { duration: 0.8, repeat: Infinity, ease: "linear" as const },
  },
};

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [chatText, setChatText] = useState("");
  const [typing, setTyping] = useState(false);
  const chatFull = "Add user authentication with email and password validation";
  const ivRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setMounted(true);
    const t = setTimeout(() => {
      setTyping(true);
      let i = 0;
      ivRef.current = setInterval(() => {
        i++;
        setChatText(chatFull.slice(0, i));
        if (i >= chatFull.length) clearInterval(ivRef.current!);
      }, 38);
    }, 1100);
    return () => {
      clearTimeout(t);
      if (ivRef.current) clearInterval(ivRef.current);
    };
  }, []);

  return (
    <div className="bg-black  text-white overflow-hidden relative ">
      {/* ── HERO TEXT ── */}
      <div className="relative z-10 flex flex-col items-center pt-16 pb-0 w-[92%] max-w-7xl mx-auto px-6 mt-32">
        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="text-center leading-[1.02] tracking-[-0.02em] text-white max-w-4xl mb-5 px-4 text-4xl sm:text-5xl md:text-5xl"
        >
          Code with <span className=" font-semibold">ikigai</span> precision.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.25}
          className="text-center text-white/50 text-sm md:text-base font-light leading-[1.7] max-w-lg mb-10 px-4"
        >
          The AI-native code editor that gets it exactly right.
          <br className="hidden sm:block" />
          No approximation. No bloat. Just perfect code, every time.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="flex flex-col sm:flex-row gap-3.5 mb-12 w-full sm:w-auto px-6 sm:px-0"
        >
          <button className="bg-white text-[#080808] text-sm font-medium px-6 py-3 rounded-lg hover:opacity-85 hover:-translate-y-px transition-all duration-200 w-full sm:w-auto">
            Download for macOS
          </button>
          <button className="bg-transparent text-white/65 border border-white/15 text-sm px-6 py-3 rounded-lg hover:border-white/35 hover:text-white hover:-translate-y-px transition-all duration-200 w-full sm:w-auto">
            Discover product
          </button>
        </motion.div>

        {/* ── PRODUCT SHOWCASE ── */}
        <motion.div
          variants={scaleUp}
          initial="hidden"
          animate="visible"
          className="relative w-full rounded-2xl overflow-hidden border border-white/10 p-4 sm:p-8 md:p-12 lg:pt-20 lg:pb-16 lg:px-24"
          style={{
            backgroundImage: `url("/hero.avif")`,
            backgroundSize: "cover",
            backgroundPosition: "center 35%",
            backgroundRepeat: "no-repeat",
            boxShadow: "0 40px 100px rgba(0,0,0,0.8)",
          }}
        >
          {/* Dark vignette edges */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 50%, rgba(0,0,0,0.45) 100%)",
            }}
          />

          {/* ── Editor window ── */}
          <div className="relative z-10 rounded-xl overflow-hidden border border-white/[0.14] shadow-[0_8px_60px_rgba(0,0,0,0.85)]">
            {/* Title bar */}
            <div className="bg-[#1c1c1e] border-b border-white/8 px-3.5 py-2 flex items-center">
              <div className="flex gap-1.5">
                <span className="w-2.75 h-2.75 rounded-full bg-[#ff5f57]" />
                <span className="w-2.75 h-2.75 rounded-full bg-[#febc2e]" />
                <span className="w-2.75 h-2.75 rounded-full bg-[#28c840]" />
              </div>
              <span
                className="flex-1 text-center text-[12px] text-white/45"
                style={{ fontFamily: "var(--font-plex-mono, monospace)" }}
              >
                Ikigai Labs
              </span>
            </div>

            {/* Tab bar */}
            <div
              className="bg-[#161b22] border-b border-white/[0.07] px-3 py-1.5 flex items-center gap-1 overflow-x-auto [&::-webkit-scrollbar]:hidden"
              style={{ scrollbarWidth: "none" }}
            >
              {WINDOW_TABS.map((tab, i) => (
                <span
                  key={tab}
                  className={`px-3 py-1 rounded text-[11px] cursor-pointer transition-colors shrink-0 ${
                    i === 0
                      ? "bg-white/8 text-white/85"
                      : "text-white/35 hover:text-white/65"
                  }`}
                  style={{ fontFamily: "var(--font-plex-mono, monospace)" }}
                >
                  {tab}
                </span>
              ))}
            </div>

            {/* Three-column body */}
            <div
              className="grid grid-cols-1 md:grid-cols-[150px_1fr] lg:grid-cols-[150px_1fr_230px]"
              style={{ minHeight: 290 }}
            >
              {/* Sidebar */}
              <div className="hidden md:block bg-[#0f1117] border-r border-white/[0.07] py-3">
                <p
                  className="text-white/25 px-3 pb-2 text-[10px] uppercase tracking-[0.08em]"
                  style={{ fontFamily: "var(--font-plex-mono, monospace)" }}
                >
                  Explorer
                </p>
                {SIDEBAR_ITEMS.map(({ label, indent, active }) => (
                  <div
                    key={label}
                    className={`flex items-center py-0.75 pr-2 cursor-pointer hover:bg-white/4 transition-colors text-[11px] ${indent} ${
                      active
                        ? "text-white/85"
                        : "text-white/40 hover:text-white/70"
                    }`}
                    style={{ fontFamily: "var(--font-plex-mono, monospace)" }}
                  >
                    {label}
                  </div>
                ))}
              </div>

              {/* Code editor */}
              <div
                className="bg-[#0d1117] lg:border-r border-white/[0.07] py-3 overflow-x-auto [&::-webkit-scrollbar]:hidden"
                style={{ scrollbarWidth: "none" }}
              >
                <div className="min-w-max">
                  {CODE_LINES.map((line) => (
                    <div
                      key={line.num}
                      className="flex text-[11px] leading-[1.75] px-3 hover:bg-white/3 transition-colors"
                      style={{ fontFamily: "var(--font-plex-mono, monospace)" }}
                    >
                      <span className="w-5 text-right mr-4 text-white/15 select-none shrink-0">
                        {line.num}
                      </span>
                      <span>
                        {line.tokens.map((tok, i) => (
                          <span
                            key={i}
                            style={{ color: TOKEN_COLOR[tok.t] ?? "#eeffff" }}
                          >
                            {tok.v}
                          </span>
                        ))}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI chat */}
              <div className="hidden lg:flex bg-[#0d1117] p-2.5 flex-col gap-2">
                <div
                  className="flex items-center gap-1.5 text-[10.5px] text-white/30 pb-2 border-b border-white/6"
                  style={{ fontFamily: "var(--font-plex-mono, monospace)" }}
                >
                  <span className="text-emerald-300 text-xs">✦</span> Ikigai
                  Labs AI Assistant
                </div>

                <div className="bg-white/5 border border-white/[0.07] rounded-lg px-2 py-1.5 text-[10.5px] text-white/55 leading-normal">
                  Hi, I&apos;m your AI coding assistant. What would you like to
                  work on?
                </div>

                <AnimatePresence>
                  {mounted && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="bg-emerald-300/8 border border-emerald-300/[0.14] rounded-lg px-2 py-1.5 text-[10.5px] text-white/70 leading-normal"
                    >
                      {chatText}
                      {typing && chatText.length < chatFull.length && (
                        <motion.span
                          variants={cursorBlink}
                          animate="animate"
                          className="opacity-50"
                        >
                          |
                        </motion.span>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="text-[10px] text-white/45 leading-[1.6]">
                  <p
                    className="text-white/28 mb-1"
                    style={{ fontFamily: "var(--font-plex-mono, monospace)" }}
                  >
                    ✦ Ikigai
                  </p>
                  I&apos;ll create a secure auth system with:
                  {AI_BULLETS.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 1.4 + i * 0.12,
                        duration: 0.35,
                        ease: "easeOut",
                      }}
                      className="flex items-start gap-1 mt-0.5"
                    >
                      <span className="text-emerald-300 shrink-0">→</span>
                      {item}
                    </motion.div>
                  ))}
                  <p
                    className="text-white/20 mt-1.5 mb-0.5"
                    style={{ fontFamily: "var(--font-plex-mono, monospace)" }}
                  >
                    Generated:
                  </p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.85, duration: 0.4 }}
                    className="flex gap-1 text-emerald-300"
                  >
                    <span>→</span>+ UserAuth.tsx (new)
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.0, duration: 0.4 }}
                    className="flex gap-1 text-emerald-300/55"
                  >
                    <span>→</span>+ lib/supabase.ts (modified)
                  </motion.div>
                </div>

                <div className="flex gap-1.5">
                  <button
                    className="px-2 py-0.5 rounded text-[10px] border bg-emerald-300/10 border-emerald-300/20 text-emerald-300 hover:bg-emerald-300/20 transition-colors"
                    style={{ fontFamily: "var(--font-plex-mono, monospace)" }}
                  >
                    ✓ Apply changes
                  </button>
                  <button
                    className="px-2 py-0.5 rounded text-[10px] border bg-white/4 border-white/10 text-white/50 hover:bg-white/10 transition-colors"
                    style={{ fontFamily: "var(--font-plex-mono, monospace)" }}
                  >
                    ✕ Reject
                  </button>
                </div>

                <div
                  className="text-[10px] text-white/28 px-0.5 mt-1"
                  style={{ fontFamily: "var(--font-plex-mono, monospace)" }}
                >
                  Optimize the database queries
                </div>

                <div className="flex items-center bg-white/5 border border-white/9 rounded-lg px-2 py-1.5 gap-1.5 mt-auto">
                  <input
                    readOnly
                    placeholder="Ask Ikigai..."
                    className="flex-1 bg-transparent border-none outline-none text-[10px] text-white/40 placeholder:text-white/20"
                  />
                  <button className="w-4 h-4 rounded-full bg-white/15 text-white/60 text-[9px] flex items-center justify-center hover:bg-white/25 transition-colors">
                    ↑
                  </button>
                </div>
              </div>
            </div>

            {/* Terminal strip */}
            <div className="hidden sm:block bg-[#0a0c10] border-t border-white/[0.07]">
              <div className="flex items-center gap-3 px-3 py-1 border-b border-white/5">
                {["Terminal", "Output"].map((t, i) => (
                  <span
                    key={t}
                    className={`text-[10.5px] pb-0.5 cursor-pointer ${i === 0 ? "text-white/70 border-b border-white/40" : "text-white/30 hover:text-white/55"}`}
                    style={{ fontFamily: "var(--font-plex-mono, monospace)" }}
                  >
                    {t}
                  </span>
                ))}
                <button className="ml-auto text-white/25 hover:text-white/50 text-xs">
                  ✕
                </button>
              </div>
              <div
                className="px-3 py-2 flex flex-col gap-0.5"
                style={{ fontFamily: "var(--font-plex-mono, monospace)" }}
              >
                {TERMINAL_LINES.map(({ text, status, color }, i) => (
                  <motion.div
                    key={text}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.9 + i * 0.15,
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                    className="flex items-center justify-between text-[10.5px]"
                  >
                    <span className="text-emerald-400/60">+ </span>
                    <span className="text-white/40 flex-1 ml-1">{text}</span>
                    <span className={`${color} ml-4`}>{status}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          {/* /editor window */}
        </motion.div>
        {/* /landscape frame */}
      </div>
    </div>
  );
}
