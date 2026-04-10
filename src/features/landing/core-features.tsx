"use client";

import React, { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import EditorWindow from "@/features/landing/components/editor-window";
import TerminalPanel from "@/features/landing/components/terminal-panel";
import AISidebar from "@/features/landing/components/ai-sidebar";
import FileExplorer from "@/features/landing/components/file-explorer";
import { 
  CARD1_EDITOR, 
  CARD1_TERMINAL, 
  CARD1_AI_CHAT, 
  CARD2_EDITOR_LINES, 
  CARD2_GHOST_LINES, 
  CARD3_EDITOR, 
  CARD3_TERMINAL, 
  CARD3_AI_CHAT 
} from "@/data/features";




export default function CoreFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ── Card 1 ──
  const scale1 = useTransform(scrollYProgress, [0, 0.33, 0.66], [1, 0.93, 0.88]);
  const opacity1 = useTransform(scrollYProgress, [0.33, 0.55], [1, 0.45]);
  const y1 = useTransform(scrollYProgress, [0, 0.33, 0.66], [0, -6, -12]);

  // ── Card 2 ──
  const scale2 = useTransform(scrollYProgress, [0.33, 0.66, 1], [1, 0.93, 0.88]);
  const y2 = useTransform(scrollYProgress, [0.33, 0.66, 1], [0, -6, -12]);

  // ── Card 3 ──
  const scale3 = useTransform(scrollYProgress, [0.66, 1], [1, 0.93]);
  const y3 = useTransform(scrollYProgress, [0.66, 1], [0, -6]);

  return (
    <section
      className="py-16 sm:py-20 md:py-24 bg-black text-white relative z-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full sm:w-[95%] lg:w-[92%] relative">

        {/* ── Header ── */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <p
            className="text-white/35 text-xs font-medium mb-4 sm:mb-5 tracking-widest uppercase"
            style={{ fontFamily: "var(--font-plex-mono, monospace)" }}
          >
           Core features
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-[1.08] tracking-[-0.03em]">
            <span className="text-white">Code with precision.</span>
            <br />
            <span className="text-white/30">Ship with confidence.</span>
          </h2>

        </div>

        {/* ── Sticky stack ── */}
        <div className="relative">

          {/* ════════════════════════════
              CARD 1 — Context-perfect AI chat
          ════════════════════════════ */}
          <div className="sticky top-16 sm:top-20 z-10 mb-[40vh] sm:mb-[45vh]">
            <motion.div
              style={{ scale: scale1, opacity: opacity1, y: y1 }}
              className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] rounded-xl sm:rounded-2xl overflow-hidden bg-[#0f0f0f] border border-white/[0.07] hover:border-white/20 shadow-[0_0_80px_rgba(0,0,0,0.8)] hover:shadow-[0_0_80px_rgba(255,255,255,0.05)] transition-all duration-500 origin-top"
            >
              {/* Left — editor + chat */}
              <div className="flex flex-col relative overflow-hidden border-b lg:border-b-0 lg:border-r border-white/[0.06]">
                <Image
                  src="/hero.avif"
                  alt="Feature showcase 1"
                  fill
                  className="absolute inset-0 object-cover object-center pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent pointer-events-none" />

                <div className="flex flex-col sm:flex-row pt-8 sm:pt-12 md:pt-16 pl-4 sm:pl-6 md:pl-10 relative z-10 min-h-0">
                  {/* Code Editor */}
                  <EditorWindow fileName="auth.tsx" otherFile="supabase.ts">
                    {CARD1_EDITOR}
                    
                    {/* Nested Terminal within EditorWindow for Card 1 */}
                    <TerminalPanel className="mt-8 -mx-3 sm:-mx-4 md:-mx-5 -mb-3 sm:-mb-4 md:-mb-5 border-l-0 border-r-0 border-b-0">
                      {CARD1_TERMINAL}
                    </TerminalPanel>

                  </EditorWindow>

                  {/* AI Sidebar */}
                  <AISidebar>
                    {CARD1_AI_CHAT}
                  </AISidebar>

                </div>
              </div>

              {/* Right — description */}
              <div className="p-8 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-center items-start bg-[#0f0f0f] relative overflow-hidden">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-emerald-500/[0.04] rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/[0.02] rounded-full blur-[80px] pointer-events-none" />
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                  className="relative z-10"
                >
                  <div className="inline-flex items-center gap-2 bg-white/[0.05] border border-white/[0.08] rounded-full px-3 py-1 text-[10.5px] text-white/40 mb-5 sm:mb-6 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/70" />
                    01 / AI Chat
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-[28px] lg:text-[30px] font-medium text-white mb-3 sm:mb-4 leading-[1.2] tracking-[-0.02em]">
                    Context-perfect<br />AI chat
                  </h3>
                  <p className="text-white/40 text-[13px] sm:text-[14px] md:text-[15px] leading-[1.7] font-light max-w-xs mb-6 sm:mb-8">
                    Ask once, get exactly what you need. Exact understands your entire codebase and gives precise answers with line-level references.
                  </p>
                  <button className="group flex items-center gap-2 bg-white text-black font-medium text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg hover:bg-white/90 transition-all duration-200">
                    Try AI chat
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* ════════════════════════════
              CARD 2 — Precision Autocomplete
          ════════════════════════════ */}
          <div className="sticky top-[3.5rem] sm:top-[4.5rem] z-20 mb-[40vh] sm:mb-[45vh]">
            <motion.div
              style={{ scale: scale2, y: y2 }}
              className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] rounded-xl sm:rounded-2xl overflow-hidden bg-[#0f0f0f] border border-white/[0.07] hover:border-white/20 shadow-[0_0_80px_rgba(0,0,0,0.8)] hover:shadow-[0_0_80px_rgba(255,255,255,0.05)] transition-all duration-500 origin-top"
            >
              {/* Left — description */}
              <div className="p-8 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-center items-start bg-[#0f0f0f] relative overflow-hidden border-b lg:border-b-0 lg:border-r border-white/[0.06]">
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-violet-500/[0.04] rounded-full blur-[120px] pointer-events-none" />
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                  className="relative z-10"
                >
                  <div className="inline-flex items-center gap-2 bg-white/[0.05] border border-white/[0.08] rounded-full px-3 py-1 text-[10.5px] text-white/40 mb-5 sm:mb-6 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400/70" />
                    02 / Autocomplete
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-[28px] lg:text-[30px] font-medium text-white mb-3 sm:mb-4 leading-[1.2] tracking-[-0.02em]">
                    Precision<br />autocomplete
                  </h3>
                  <p className="text-white/40 text-[13px] sm:text-[14px] md:text-[15px] leading-[1.7] font-light max-w-xs mb-6 sm:mb-8">
                    Stop choosing between 10 suggestions. Exact gives you one perfect completion that matches your code style and intent.
                  </p>
                  <button className="group flex items-center gap-2 bg-white text-black font-medium text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg hover:bg-white/90 transition-all duration-200">
                    See it in action
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </button>
                </motion.div>
              </div>

              {/* Right — explorer + ghost text */}
              <div className="bg-[#0a0a0a] flex flex-col relative overflow-hidden">
                <Image
                  src="/hero.avif"
                  alt="Feature showcase 2"
                  fill
                  className="absolute inset-0 object-cover object-center pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.05] via-transparent to-transparent pointer-events-none" />

                <div className="flex flex-col sm:flex-row w-full pt-8 sm:pt-12 md:pt-16 pl-4 sm:pl-6 md:pl-10 relative z-10">
                  {/* Explorer Sidebar */}
                  <FileExplorer />

                  {/* Code + Ghost Text */}
                  <EditorWindow fileName="UserAuth.tsx" otherFile="Database.ts" dotColor="bg-violet-400/70">
                    {CARD2_EDITOR_LINES.map(({ n, code }) => (
                      <div key={n} className="flex">
                        <span className="w-5 sm:w-6 text-right text-white/15 select-none mr-3 sm:mr-5 shrink-0">{n}</span>
                        <span>{code}</span>
                      </div>
                    ))}


                    {/* Ghost text highlight block */}
                    <div className="relative">
                      <div className="absolute inset-x-[-4px] inset-y-0 bg-violet-500/[0.07] border border-violet-400/[0.12] rounded-md pointer-events-none" />
                      {CARD2_GHOST_LINES.map(({ n, code }, i) => (
                        <div key={i} className="flex relative z-10">
                          <span className="w-5 sm:w-6 text-right text-white/15 select-none mr-3 sm:mr-5 shrink-0">{n}</span>
                          <span>{code}</span>
                        </div>
                      ))}


                      {/* Tab to accept hint */}
                      <div className="absolute right-1 sm:right-3 top-1 flex items-center gap-1.5 bg-white/[0.06] border border-white/10 rounded px-1.5 sm:px-2 py-0.5 text-[8px] sm:text-[9.5px] text-white/35 font-mono">
                        <kbd className="bg-white/10 rounded px-0.5 sm:px-1 py-px text-[7px] sm:text-[8px]">Tab</kbd>
                        to accept
                      </div>
                    </div>
                  </EditorWindow>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ════════════════════════════
              CARD 3 — AI-powered terminal
          ════════════════════════════ */}
          <div className="sticky top-[3.5rem] sm:top-[4.5rem] z-30">
            <motion.div
              style={{ scale: scale3, y: y3 }}
              className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] rounded-xl sm:rounded-2xl overflow-hidden bg-[#0f0f0f] border border-white/[0.07] hover:border-white/20 shadow-[0_0_80px_rgba(0,0,0,0.8)] hover:shadow-[0_0_80px_rgba(255,255,255,0.05)] transition-all duration-500 origin-top"
            >
              {/* Left — terminal mockup */}
              <div className="bg-[#0a0a0a] flex flex-col relative overflow-hidden border-b lg:border-b-0 lg:border-r border-white/[0.06]">
                <Image
                  src="/hero.avif"
                  alt="Feature showcase 3"
                  fill
                  className="absolute inset-0 object-cover object-center pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/[0.05] via-transparent to-transparent pointer-events-none" />

                <div className="flex flex-col sm:flex-row pt-8 sm:pt-12 md:pt-12 pl-4 sm:pl-6 md:pl-10 h-full relative z-10">
                  {/* Editor */}
                  <EditorWindow fileName="UserAuth.tsx" otherFile="supabase.ts" dotColor="bg-sky-400/70">
                    {CARD3_EDITOR}


                    {/* Terminal Panel */}
                    <TerminalPanel 
                      tabs={["Terminal", "Output", "Debug"]}
                      className="mt-8 -mx-3 sm:-mx-4 md:-mx-5 -mb-3 sm:-mb-4 md:-mb-5 border-l-0 border-r-0 border-b-0"
                    >
                      {CARD3_TERMINAL}
                    </TerminalPanel>

                  </EditorWindow>

                  {/* AI Sidebar */}
                  <AISidebar className="sm:border-l" placeholder="Ask Exact...">
                    {CARD3_AI_CHAT}
                  </AISidebar>

                </div>
              </div>

              {/* Right — description */}
              <div className="p-8 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-center items-start bg-[#0f0f0f] relative overflow-hidden">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-sky-500/[0.04] rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/[0.02] rounded-full blur-[80px] pointer-events-none" />
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                  className="relative z-10"
                >
                  <div className="inline-flex items-center gap-2 bg-white/[0.05] border border-white/[0.08] rounded-full px-3 py-1 text-[10.5px] text-white/40 mb-5 sm:mb-6 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400/70" />
                    03 / Terminal
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-[28px] lg:text-[30px] font-medium text-white mb-3 sm:mb-4 leading-[1.2] tracking-[-0.02em]">
                    AI-powered<br />terminal
                  </h3>
                  <p className="text-white/40 text-[13px] sm:text-[14px] md:text-[15px] leading-[1.7] font-light max-w-xs mb-6 sm:mb-8">
                    Debug smarter with instant error detection, suggested fixes, and command optimization. Let Exact handle the terminal heavy lifting.
                  </p>
                  <button className="group flex items-center gap-2 bg-white text-black font-medium text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg hover:bg-white/90 transition-all duration-200">
                    Explore terminal
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}