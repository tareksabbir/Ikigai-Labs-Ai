"use client";

import React from "react";
import Navbar from "@/features/landing/navbar";
import Footer from "@/features/landing/footer";
import { motion } from "framer-motion";
import { Github, Twitter, Users, MessageSquare, Globe, ArrowUpRight } from "lucide-react";
import Link from "next/link";

// High-fidelity Discord SVG for a premium look
const DiscordIcon = ({ size = 24 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1971.3728.2914a.077.077 0 01-.0066.1277 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
  </svg>
);

const COMMUNITY_CARDS = [
  {
    title: "Discord Lab",
    description: "Join 8,000+ engineers for real-time debugging syncs and early access to research builds.",
    stats: "8.2k Researchers",
    icon: DiscordIcon,
    href: "#",
    color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
  },
  {
    title: "Twitter / X",
    description: "Following the latest breakthroughs and system optimizations in the AI research sphere.",
    stats: "15.4k Followers",
    icon: Twitter,
    href: "#",
    color: "text-sky-400 bg-sky-500/10 border-sky-500/20",
  },
  {
    title: "GitHub Core",
    description: "Contribute to our open core and explore the underlying architecture of ikigai interfaces.",
    stats: "2.5k Stars",
    icon: Github,
    href: "#",
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
];

const MEMBER_ROLES = [
  { label: "Principal Investigators", count: "14", desc: "Core contributors managing infrastructure." },
  { label: "Community Advocates", count: "42", desc: "Helping new researchers on-board into the lab." },
  { label: "Beta Subjects", count: "1,200", desc: "Testing early experimental neural interfaces." },
];

export default function CommunityPage() {
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
              <span className="w-8 h-px bg-white/20" /> The Researcher Network
            </motion.div>
            <h1 className="text-4xl sm:text-5xl font-medium mb-6 tracking-[-0.02em] leading-[1.02]">
              Connected by research, <br />
              <span className="text-white/40">powered by community.</span>
            </h1>
            <p className="text-white/40 font-light text-lg max-w-lg leading-relaxed">
              Join a global network of engineers and researchers building the next generation of AI-native interfaces.
            </p>
          </header>

          {/* Social Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {COMMUNITY_CARDS.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative h-full"
              >
                <Link href={card.href} className="block h-full">
                  <div className="h-full p-10 bg-linear-to-b from-white/5 to-white/[0.01] border border-white/10 border-t-white/25 rounded-[2.5rem] hover:bg-white/8 hover:border-white/30 transition-all duration-500 backdrop-blur-md shadow-2xl shadow-black/50 flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-8">
                      <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center group-hover:scale-105 transition-transform ${card.color}`}>
                        <card.icon size={26} />
                      </div>
                      <ArrowUpRight size={18} className="text-white/20 group-hover:text-white transition-all transform group-hover:translate-x-1" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-medium mb-3 tracking-tight">{card.title}</h2>
                      <p className="text-white/40 font-light text-sm leading-relaxed mb-8">
                        {card.description}
                      </p>
                      <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
                        <Users size={12} />
                        {card.stats}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Role Stats Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/8 border border-white/8 rounded-[3rem] overflow-hidden">
            {MEMBER_ROLES.map((role, i) => (
              <motion.div
                key={role.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-black p-12 text-center group hover:bg-white/1 transition-colors"
              >
                <p className="text-5xl font-medium mb-4 tracking-tighter group-hover:scale-105 transition-transform">{role.count}</p>
                <h3 className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] mb-4">
                  {role.label}
                </h3>
                <p className="text-white/40 font-light text-sm">
                  {role.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Newsletter / CTA */}
          <section className="mt-40">
            <div className="relative bg-white/2 border border-white/8 rounded-[3rem] p-12 md:p-24 text-center overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
              
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-medium mb-6 tracking-tight leading-tight">Stay optimized.</h2>
                <p className="text-white/40 font-light mb-12 text-lg leading-relaxed">
                  Get the latest research insights and lab updates delivered <br className="hidden md:block" /> weekly to your neural interface (email).
                </p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto p-2 bg-white/3 border border-white/8 rounded-2xl backdrop-blur-md">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-transparent border-none px-6 py-3 outline-none focus:ring-0 text-sm font-light text-white"
                  />
                  <button className="bg-white text-black px-8 py-4 rounded-xl font-medium hover:bg-neutral-200 transition-all text-sm whitespace-nowrap shadow-xl">
                    Join Newsletter
                  </button>
                </form>
              </motion.div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
