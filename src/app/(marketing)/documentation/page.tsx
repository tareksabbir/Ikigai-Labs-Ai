"use client";

import Navbar from "@/features/landing/navbar";
import Footer from "@/features/landing/footer";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import Link from "next/link";


import { DOCS_GROUPS } from "@/data/documentation";


export default function DocumentationPage() {
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
              <span className="w-8 h-px bg-white/20" /> Technical Lab Manual
            </motion.div>
            <h1 className="text-4xl sm:text-5xl font-medium mb-6 tracking-[-0.02em] leading-[1.02]">
              The architecture of <br />
              <span className="text-white/40">modern investigation.</span>
            </h1>
            <p className="text-white/40 font-light text-lg max-w-lg leading-relaxed mb-10">
              Comprehensive guides, API references, and system overviews for the professional researcher.
            </p>

            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
              <input 
                type="text" 
                placeholder="Search the lab manual..."
                className="w-full bg-white/3 border border-white/8 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-white/20 transition-all text-sm font-light placeholder:text-white/10"
              />
            </div>
          </header>

          {/* Quick Links Banner */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
            {["Lab Quickstart", "API Reference", "System Status", "Changelog"].map((label) => (
              <button key={label} className="p-6 rounded-2xl bg-linear-to-b from-white/5 to-white/[0.01] border border-white/10 border-t-white/20 hover:bg-white/8 hover:border-white/30 transition-all duration-300 text-left group backdrop-blur-md shadow-2xl shadow-black/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">Resources</span>
                  <ArrowRight size={14} className="text-white/20 group-hover:text-white group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="text-sm font-medium">{label}</h3>
              </button>
            ))}
          </div>

          {/* Detailed Groups Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {DOCS_GROUPS.map((group, idx) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <div className="p-10 rounded-[2.5rem] bg-linear-to-b from-white/5 to-white/[0.01] border border-white/10 border-t-white/20 hover:bg-white/8 transition-all duration-500 backdrop-blur-md shadow-2xl shadow-black/50 h-full">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white/40 group-hover:text-white transition-colors">
                      <group.icon size={20} />
                    </div>
                    <h2 className="text-xl font-medium tracking-tight">{group.title}</h2>
                  </div>

                  <div className="space-y-4">
                    {group.items.map((item) => (
                      <Link 
                        key={item.label}
                        href={item.href}
                        className="flex items-center justify-between py-2 border-b border-white/5 text-white/40 hover:text-white transition-all group"
                      >
                        <span className="text-sm font-light">{item.label}</span>
                        <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Need help? */}
          <section className="mt-40 pt-20 border-t border-white/5 text-center">
            <h3 className="text-2xl font-medium mb-6">Cant find what you need?</h3>
            <p className="text-white/40 font-light mb-10 text-lg">
              Our investigator team is always online to help you with the trickiest research inquiries.
            </p>
            <div className="flex items-center justify-center gap-4">
              <button className="bg-white text-black px-8 py-4 rounded-xl font-medium hover:bg-neutral-200 transition-all text-sm">
                Join the Discord
              </button>
              <button className="bg-white/3 border border-white/8 text-white px-8 py-4 rounded-xl font-medium hover:bg-white/10 transition-all text-sm">
                Open Support Ticket
              </button>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
