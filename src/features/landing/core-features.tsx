"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  X,
  Search,
  Settings,
  HelpCircle,
  Sparkles,
  ChevronDown,
  ChevronRight,
  File,
  ArrowUpRight,
} from "lucide-react";

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
            // Core features
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
              className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] rounded-xl sm:rounded-2xl overflow-hidden bg-[#0f0f0f] border border-white/[0.07] shadow-[0_0_80px_rgba(0,0,0,0.8)] origin-top"
            >
              {/* Left — editor + chat */}
              <div className="flex flex-col relative overflow-hidden border-b lg:border-b-0 lg:border-r border-white/[0.06]">
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
                  style={{ backgroundImage: "url('/hero.avif')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent pointer-events-none" />

                <div className="flex flex-col sm:flex-row pt-8 sm:pt-12 md:pt-16 pl-4 sm:pl-6 md:pl-10 relative z-10 min-h-0">
                  {/* Code Editor */}
                  <div className="bg-[#080808] flex-1 border-b sm:border-b-0 sm:border-r border-white/[0.06] flex flex-col rounded-tl-xl overflow-hidden shadow-xl min-w-0">
                    {/* Editor tab bar */}
                    <div className="flex items-center gap-2 border-b border-white/[0.06] px-2 sm:px-3 py-2 bg-[#0a0a0a] overflow-x-auto [&::-webkit-scrollbar]:hidden">
                      <div className="flex gap-1.5 mr-2 shrink-0">
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white/10" />
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white/10" />
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white/10" />
                      </div>
                      <div className="px-2 sm:px-2.5 py-1 bg-white/5 text-white/70 border border-white/10 rounded text-[10px] font-mono flex items-center gap-1.5 shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/70" />
                        auth.tsx
                      </div>
                      <div className="px-2 sm:px-2.5 py-1 text-white/30 text-[10px] font-mono hidden sm:block">
                        supabase.ts
                      </div>
                    </div>

                    <div className="p-3 sm:p-4 md:p-5 text-[10px] sm:text-[11px] md:text-[12px] leading-[1.85] flex-1 font-mono text-white/70 overflow-x-auto whitespace-pre">
                      <div>
                        <span className="text-white/30">const</span> [email, setEmail] = useState(
                        <span className="text-emerald-300/80">&apos;&apos;</span>)
                      </div>
                      <div>
                        <span className="text-white/30">const</span> [password, setPassword] = useState(
                        <span className="text-emerald-300/80">&apos;&apos;</span>)
                      </div>
                      <br />
                      <div className="text-white/25">{"// Action: Add password validation"}</div>
                      <div>
                        <span className="text-white/30">const</span> handleSignUp ={" "}
                        <span className="text-rose-400/80">async</span> () ={">"} {"{"}
                      </div>
                      <div>
                        {"  "}<span className="text-rose-400/60">if</span> (password.length {"<"}{" "}
                        <span className="text-orange-300/80">8</span>) {"{"}
                      </div>
                      <div>
                        {"    "}<span className="text-rose-400/60">throw new</span>{" "}
                        <span className="text-yellow-200/80">Error</span>(
                        <span className="text-emerald-300/70">&apos;Password must be 8+ chars&apos;</span>)
                      </div>
                      <div>{"  }"}</div>
                      <br />
                      <div>
                        {"  "}<span className="text-white/30">const</span> {"{ data, error }"} ={" "}
                        <span className="text-rose-400/60">await</span> supabase.auth.signUp({"{"}
                      </div>
                      <div>{"    "}email, password</div>
                      <div>{"  })"}</div>
                    </div>

                    {/* Terminal */}
                    <div className="border-t border-white/[0.06] bg-[#060606] p-3 sm:p-4 text-[10px] sm:text-[10.5px] font-mono">
                      <div className="flex items-center gap-2 sm:gap-3 mb-3 border-b border-white/[0.05] pb-2 overflow-x-auto [&::-webkit-scrollbar]:hidden">
                        <span className="text-white/70 border-b border-white/40 pb-px shrink-0">Terminal</span>
                        <span className="text-white/25 shrink-0">Output</span>
                        <span className="text-white/25 hidden sm:block shrink-0">Problems</span>
                        <button className="ml-auto text-white/20 shrink-0"><X size={11} /></button>
                      </div>
                      <div className="space-y-1.5 text-white/35">
                        <div className="flex justify-between gap-4">
                          <span className="truncate">→ Building module...</span>
                          <span className="text-emerald-400/80 shrink-0">✓ Done</span>
                        </div>
                        <div className="flex justify-between gap-4">
                          <span className="truncate">→ Resolving dependencies...</span>
                          <span className="text-emerald-400/80 shrink-0">✓ Done</span>
                        </div>
                        <div className="flex justify-between gap-4">
                          <span className="truncate">→ Type checking...</span>
                          <span className="text-yellow-400/80 shrink-0">⚠ 2 warnings</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* AI Sidebar */}
                  <div className="bg-[#080808] w-full sm:w-64 md:w-72 flex flex-col justify-between border-t sm:border-t-0 border-white/[0.06] p-3 sm:p-3.5">
                    <div className="flex flex-col gap-3 sm:gap-4 overflow-y-auto">
                      <div className="self-end bg-white/[0.06] rounded-xl rounded-br-sm px-3 py-2 text-[10px] sm:text-[11px] text-white/55 border border-white/[0.06] max-w-[80%]">
                        password validation
                      </div>

                      <div className="flex flex-col gap-2 text-[10px] sm:text-[11px] leading-[1.65] bg-white/[0.03] rounded-xl rounded-tl-sm p-3 border border-white/[0.05]">
                        <div className="flex items-center gap-1.5 text-white/90 font-medium">
                          <Sparkles size={11} className="text-white" />
                          <span>Exact</span>
                          <span className="ml-auto text-white/20 text-[9px]">4:38 PM</span>
                        </div>
                        <div className="text-white/45 leading-relaxed">
                          I&apos;ll create a secure auth system with email validation, password strength check (8+ chars), and Supabase integration.
                        </div>
                        <div className="mt-1 space-y-0.5">
                          <div className="text-white/25 text-[9.5px] mb-1">Generated</div>
                          <div className="flex items-center gap-1.5 text-white/55">
                            <span className="text-emerald-400/70">+</span> UserAuth.tsx{" "}
                            <span className="text-white/20 text-[9px]">new</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-white/55">
                            <span className="text-amber-400/70">~</span> lib/supabase.ts{" "}
                            <span className="text-white/20 text-[9px]">modified</span>
                          </div>
                        </div>
                        <div className="flex gap-2 mt-2">
                          <button className="bg-white/10 hover:bg-white/15 border border-white/10 rounded-lg px-2.5 sm:px-3 py-1.5 text-white/80 text-[10px] sm:text-[10.5px] flex items-center gap-1 transition-colors">
                            ✓ Apply
                          </button>
                          <button className="hover:bg-white/5 rounded-lg px-2.5 sm:px-3 py-1.5 text-white/30 text-[10px] sm:text-[10.5px] transition-colors">
                            ✕ Reject
                          </button>
                        </div>
                      </div>

                      <div className="self-end bg-white/[0.06] rounded-xl rounded-br-sm px-3 py-2 text-[10px] sm:text-[11px] text-white/55 border border-white/[0.06] max-w-[80%]">
                        Optimize the database queries
                      </div>

                      <div className="flex flex-col gap-1.5 text-[10px] sm:text-[11px] bg-white/[0.03] rounded-xl rounded-tl-sm p-3 border border-white/[0.05]">
                        <div className="flex items-center gap-1.5 text-white/90 font-medium">
                          <Sparkles size={11} className="text-white animate-pulse" />
                          <span>Exact</span>
                          <span className="ml-auto text-white/20 text-[9px]">4:39 PM</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/35 mt-1">
                          <div className="flex gap-0.5">
                            <span className="w-1 h-1 rounded-full bg-white/30 animate-bounce" style={{ animationDelay: "0ms" }} />
                            <span className="w-1 h-1 rounded-full bg-white/30 animate-bounce" style={{ animationDelay: "150ms" }} />
                            <span className="w-1 h-1 rounded-full bg-white/30 animate-bounce" style={{ animationDelay: "300ms" }} />
                          </div>
                          <span>Analyzing...</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 sm:mt-4 rounded-xl bg-white/[0.04] border border-white/[0.08] p-2.5 flex flex-col gap-2">
                      <input
                        type="text"
                        placeholder="Ask Exact..."
                        className="bg-transparent border-none outline-none text-white/70 placeholder:text-white/25 w-full px-1 text-[11px] sm:text-[11.5px]"
                      />
                      <div className="flex items-center justify-between px-1">
                        <div className="flex items-center gap-2 sm:gap-2.5 text-white/25">
                          <button className="hover:text-white/55 transition-colors"><Settings size={11} /></button>
                          <button className="hover:text-white/55 transition-colors"><Search size={11} /></button>
                          <button className="hover:text-white/55 transition-colors"><HelpCircle size={11} /></button>
                        </div>
                        <button className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center hover:bg-white/90 transition-colors">
                          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 19V5" /><path d="M5 12l7-7 7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
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
              className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] rounded-xl sm:rounded-2xl overflow-hidden bg-[#0f0f0f] border border-white/[0.07] shadow-[0_0_80px_rgba(0,0,0,0.8)] origin-top"
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
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
                  style={{ backgroundImage: "url('/hero.avif')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.05] via-transparent to-transparent pointer-events-none" />

                <div className="flex flex-col sm:flex-row w-full pt-8 sm:pt-12 md:pt-16 pl-4 sm:pl-6 md:pl-10 relative z-10">
                  {/* Explorer Sidebar */}
                  <div className="w-full sm:w-44 md:w-52 border-b sm:border-b-0 sm:border-r border-white/[0.06] bg-[#080808] p-3 text-[10px] sm:text-[11px] font-mono flex flex-col rounded-tl-xl overflow-hidden">
                    <div className="text-white/60 mb-3 sm:mb-4 px-2 flex items-center justify-between font-medium mt-1 text-[11px] sm:text-[11.5px]">
                      <span>Explorer</span>
                      <button className="text-white/25 hover:text-white/50 text-base leading-none">···</button>
                    </div>
                    <div className="flex flex-col gap-0.5 text-white/35">
                      <div className="flex items-center gap-1.5 px-2 py-1.5 rounded-md bg-white/[0.04] cursor-pointer">
                        <ChevronDown size={12} className="text-white/45 shrink-0" />
                        <span className="text-white/75 font-medium">cogs</span>
                      </div>
                      <div className="flex items-center gap-1.5 pl-6 pr-2 py-1.5 cursor-pointer hover:text-white/60 rounded-md hover:bg-white/[0.03] transition-colors">
                        <ChevronRight size={11} className="text-white/25 shrink-0" />
                        <span>components</span>
                      </div>
                      <div className="flex items-center gap-1.5 pl-6 pr-2 py-1.5 cursor-pointer hover:text-white/60 rounded-md hover:bg-white/[0.03] transition-colors">
                        <ChevronRight size={11} className="text-white/25 shrink-0" />
                        <span>utils</span>
                      </div>
                      <div className="flex items-center gap-2 px-2 py-1.5 mt-1 cursor-pointer hover:text-white/60 rounded-md hover:bg-white/[0.03] transition-colors">
                        <File size={10} className="text-white/25 shrink-0" />
                        <span>package.json</span>
                      </div>
                      <div className="flex items-center gap-2 px-2 py-1.5 cursor-pointer hover:text-white/60 rounded-md hover:bg-white/[0.03] transition-colors">
                        <File size={10} className="text-white/25 shrink-0" />
                        <span>README.md</span>
                      </div>
                    </div>
                  </div>

                  {/* Code + Ghost Text */}
                  <div className="flex-1 flex flex-col relative z-20 bg-[#080808] min-w-0">
                    {/* Tabs */}
                    <div className="flex items-center border-b border-white/[0.06] bg-[#080808] px-2 sm:px-3 py-2 gap-1.5 overflow-x-auto text-[10px] sm:text-[10.5px] font-mono [&::-webkit-scrollbar]:hidden">
                      <div className="px-2 sm:px-2.5 py-1.5 bg-white/[0.06] text-white/75 border border-white/10 rounded-md flex items-center gap-1.5 shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400/70" />
                        UserAuth.tsx
                        <X size={11} className="text-white/30 cursor-pointer hover:text-white/60 ml-0.5" />
                      </div>
                      <div className="px-2 sm:px-2.5 py-1.5 text-white/30 rounded-md items-center gap-1.5 hover:bg-white/[0.04] cursor-pointer hidden sm:flex shrink-0">
                        Database.ts
                      </div>
                      <div className="ml-auto px-3 text-white/40 font-semibold shrink-0 text-[10px] sm:text-[11px]">
                        Exact
                      </div>
                    </div>

                    {/* Code body */}
                    <div className="p-3 sm:p-4 md:p-5 text-[10px] sm:text-[11px] md:text-[12px] leading-[1.95] flex-1 font-mono text-white/60 overflow-x-auto whitespace-pre">
                      {[
                        { n: 1, code: (<><span className="text-rose-400/70">import</span> {"{ useState }"} <span className="text-rose-400/70">from</span> <span className="text-emerald-300/70">&apos;react&apos;</span></>) },
                        { n: 2, code: (<><span className="text-rose-400/70">import</span> {"{ supabase }"} <span className="text-rose-400/70">from</span> <span className="text-emerald-300/70">&apos;@/lib/supabase&apos;</span></>) },
                        { n: 3, code: null },
                        { n: 4, code: (<><span className="text-rose-400/70">export function</span> <span className="text-yellow-200/80">UserAuth</span>() {"{"}</>) },
                        { n: 5, code: (<>{"  "}<span className="text-white/30">const</span> [email, setEmail] = useState(<span className="text-emerald-300/70">&apos;&apos;</span>)</>) },
                        { n: 6, code: (<>{"  "}<span className="text-white/30">const</span> [password, setPassword] = useState(<span className="text-emerald-300/70">&apos;&apos;</span>)</>) },
                        { n: 7, code: null },
                        { n: 8, code: (<span className="text-white/25">{"  // AI suggestion: Add password validation"}</span>) },
                        { n: 9, code: (<>{"  "}<span className="text-white/30">const</span> handleSignUp = <span className="text-rose-400/70">async</span> () ={">"} {"{"}</>) },
                      ].map(({ n, code }) => (
                        <div key={n} className="flex">
                          <span className="w-5 sm:w-6 text-right text-white/15 select-none mr-3 sm:mr-5 shrink-0">{n}</span>
                          <span>{code}</span>
                        </div>
                      ))}

                      {/* Ghost text highlight block */}
                      <div className="relative">
                        <div className="absolute inset-x-[-4px] inset-y-0 bg-violet-500/[0.07] border border-violet-400/[0.12] rounded-md pointer-events-none" />
                        {[
                          { n: 10, code: (<span className="text-white/20">{"  // ▋ Ghost text suggestion:"}</span>) },
                          { n: 11, code: (<span className="text-white/30">{"    "}<span className="text-rose-400/40">if</span> (password.length {"<"} <span className="text-orange-300/40">8</span>) {"{"}</span>) },
                          { n: "", code: (<span className="text-white/30">{"      "}<span className="text-rose-400/40">throw new</span> <span className="text-yellow-200/40">Error</span>(<span className="text-emerald-300/30">&apos;Password must be 8+ chars&apos;</span>)</span>) },
                          { n: "", code: (<span className="text-white/30">{"    }"}</span>) },
                          { n: "", code: (<span className="text-white/30">{"    "}<span className="text-white/20">const</span> {"{ data, error }"} = <span className="text-rose-400/40">await</span> supabase.auth.signUp({"{"}</span>) },
                          { n: "", code: (<span className="text-white/30">{"      "}email, password</span>) },
                          { n: "", code: (<span className="text-white/30">{"    })"}</span>) },
                          { n: "", code: (<span className="text-white/30">{"  }"}</span>) },
                        ].map(({ n, code }, i) => (
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
                    </div>
                  </div>
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
              className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] rounded-xl sm:rounded-2xl overflow-hidden bg-[#0f0f0f] border border-white/[0.07] shadow-[0_0_80px_rgba(0,0,0,0.8)] origin-top"
            >
              {/* Left — terminal mockup */}
              <div className="bg-[#0a0a0a] flex flex-col relative overflow-hidden border-b lg:border-b-0 lg:border-r border-white/[0.06]">
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
                  style={{ backgroundImage: "url('/hero.avif')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/[0.05] via-transparent to-transparent pointer-events-none" />

                <div className="flex flex-col sm:flex-row pt-8 sm:pt-12 md:pt-12 pl-4 sm:pl-6 md:pl-10 h-full relative z-10">
                  {/* Editor */}
                  <div className="bg-[#060606] flex-1 border-b sm:border-b-0 sm:border-r border-white/[0.06] flex flex-col rounded-tl-xl overflow-hidden shadow-2xl min-w-0">
                    <div className="flex items-center gap-2 border-b border-white/[0.06] px-2 sm:px-3 py-2 bg-[#080808] overflow-x-auto [&::-webkit-scrollbar]:hidden">
                      <div className="flex gap-1.5 mr-2 shrink-0">
                        <div className="w-2 h-2 rounded-full bg-white/10" />
                        <div className="w-2 h-2 rounded-full bg-white/10" />
                        <div className="w-2 h-2 rounded-full bg-white/10" />
                      </div>
                      <div className="px-2 py-1 bg-white/[0.06] text-white/60 border border-white/[0.08] rounded text-[10px] font-mono flex items-center gap-1.5 shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400/70" />
                        UserAuth.tsx
                      </div>
                      <div className="px-2 py-1 text-white/25 text-[10px] font-mono hidden sm:block shrink-0">supabase.ts</div>
                    </div>

                    <div className="p-3 sm:p-4 md:p-5 text-[10px] sm:text-[11px] md:text-[11.5px] leading-[1.85] flex-1 font-mono text-white/35 overflow-hidden">
                      <div>{"const [email, setEmail] = useState('')"}</div>
                      <div>{"const [password, setPassword] = useState('')"}</div>
                      <br />
                      <div className="text-white/15">{"// AI suggestion: Add password validation"}</div>
                      <div>{"const handleSignUp = async () => {"}</div>
                      <div>{"  if (password.length < 8) {"}</div>
                      <div className="text-white/20">{"    throw new Error('Password must be 8+ chars')"}</div>
                      <div>{"  }"}</div>
                    </div>

                    {/* Terminal Panel */}
                    <div className="border-t border-white/[0.06] bg-[#040404] p-3 sm:p-4 text-[10px] sm:text-[10.5px] font-mono flex flex-col">
                      <div className="flex items-center gap-2 sm:gap-3 mb-3 border-b border-white/[0.05] pb-2 overflow-x-auto [&::-webkit-scrollbar]:hidden">
                        <span className="text-white/75 border-b border-white/40 pb-px shrink-0">Terminal</span>
                        <span className="text-white/25 shrink-0">Output</span>
                        <span className="text-white/25 hidden sm:block shrink-0">Debug</span>
                        <X size={11} className="ml-auto text-white/20 cursor-pointer hover:text-white/50 shrink-0" />
                      </div>

                      {/* AI suggestion banner */}
                      <div className="bg-sky-500/[0.06] border border-sky-500/[0.12] rounded-lg px-2.5 sm:px-3 py-2 mb-3 flex items-start gap-2">
                        <Sparkles size={10} className="text-sky-400/70 mt-0.5 shrink-0" />
                        <div>
                          <div className="text-sky-300/70 text-[10px] font-medium mb-0.5">Exact suggestion</div>
                          <div className="text-white/35 text-[10px] sm:text-[10.5px]">
                            Run{" "}
                            <span className="text-white/60 bg-white/[0.06] px-1 rounded font-mono text-[9px] sm:text-[10px]">npm run type-check</span>
                            {" "}to catch type errors before build
                          </div>
                        </div>
                      </div>

                      <div className="space-y-1.5 text-white/35">
                        <div className="flex justify-between gap-3">
                          <span className="truncate"><span className="text-white/20">$</span> Analyzing codebase...</span>
                          <span className="text-emerald-400/70 shrink-0">✓ Done</span>
                        </div>
                        <div className="flex justify-between gap-3">
                          <span className="truncate"><span className="text-white/20">$</span> Installing dependencies...</span>
                          <span className="text-emerald-400/70 shrink-0">✓ Done</span>
                        </div>
                        <div className="flex justify-between gap-3">
                          <span className="truncate"><span className="text-white/20">$</span> Running tests (14/16)...</span>
                          <span className="text-yellow-400/70 shrink-0">⚠ 2 failed</span>
                        </div>
                        <div className="flex items-center gap-2 mt-2 pt-2 border-t border-white/[0.04]">
                          <span className="text-white/20">$</span>
                          <span className="text-white/50">▋</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* AI Sidebar */}
                  <div className="bg-[#060606] w-full sm:w-56 md:w-60 flex flex-col p-3 sm:p-4 border-t sm:border-t-0 sm:border-l border-white/[0.06]">
                    <div className="self-end bg-white/[0.06] rounded-xl rounded-br-sm px-2.5 py-1.5 text-[10px] sm:text-[10.5px] text-white/50 mb-3 sm:mb-4 max-w-[85%] text-right">
                      fix the failing tests
                    </div>

                    <div className="bg-white/[0.03] rounded-xl rounded-tl-sm p-3 border border-white/[0.05] text-[10px] sm:text-[10.5px] space-y-2 sm:space-y-2.5">
                      <div className="flex items-center gap-1.5 text-white/80 font-medium">
                        <Sparkles size={11} className="text-white" />
                        <span>Exact</span>
                      </div>
                      <div className="text-white/40 leading-relaxed">
                        Found 2 issues in{" "}
                        <span className="text-white/60 font-mono text-[9px] sm:text-[10px] bg-white/[0.06] px-1 rounded">auth.test.ts</span>:
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex items-start gap-1.5 text-white/35">
                          <span className="text-red-400/70 shrink-0 mt-px">✕</span>
                          <span>Missing mock for supabase client</span>
                        </div>
                        <div className="flex items-start gap-1.5 text-white/35">
                          <span className="text-red-400/70 shrink-0 mt-px">✕</span>
                          <span>Async handler not awaited</span>
                        </div>
                      </div>
                      <div className="flex gap-2 pt-1">
                        <button className="bg-white/10 hover:bg-white/15 border border-white/10 rounded-lg px-2 sm:px-2.5 py-1.5 text-white/75 text-[10px] flex items-center gap-1 transition-colors">
                          ✓ Fix both
                        </button>
                        <button className="hover:bg-white/5 rounded-lg px-2 sm:px-2.5 py-1.5 text-white/30 text-[10px] transition-colors">
                          Explain
                        </button>
                      </div>
                    </div>

                    <div className="mt-auto pt-3 sm:pt-4 border-t border-white/[0.05]">
                      <div className="flex items-center justify-center gap-3 p-2 rounded-lg bg-white/[0.03]">
                        <HelpCircle size={11} className="text-white/20 hover:text-white/50 cursor-pointer transition-colors" />
                        <Settings size={11} className="text-white/20 hover:text-white/50 cursor-pointer transition-colors" />
                        <Search size={11} className="text-white/20 hover:text-white/50 cursor-pointer transition-colors" />
                        <Sparkles size={11} className="text-white/20 hover:text-white/50 cursor-pointer transition-colors" />
                      </div>
                    </div>
                  </div>
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