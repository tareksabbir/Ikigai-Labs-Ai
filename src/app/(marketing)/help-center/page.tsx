"use client";

import React from "react";
import Navbar from "@/features/landing/navbar";
import Footer from "@/features/landing/footer";
import { motion } from "framer-motion";
import { HelpCircle, MessageSquare, Mail, Search, ArrowRight, LifeBuoy, FileText, Settings, Shield } from "lucide-react";
import Link from "next/link";

const FAQ_CATEGORIES = [
  {
    title: "Account & Billing",
    icon: Settings,
    desc: "Manage your research subscription, lab seats, and data exports.",
    questions: ["How do I upgrade my plan?", "Can I add more investigators?", "Lab data ownership policy"],
  },
  {
    title: "Technical Support",
    icon: HelpCircle,
    desc: "Troubleshoot interface issues and system performance.",
    questions: ["Editor latency optimization", "Context engine troubleshooting", "Fixing terminal ghosting"],
  },
  {
    title: "Data Security",
    icon: Shield,
    desc: "Understand how we protect your research and codebase.",
    questions: ["Is my code used for training?", "On-premise deployment", "Compliance standards"],
  },
  {
    title: "Lab Features",
    icon: FileText,
    desc: "Deep dives into using specific ikigai tools.",
    questions: ["Mastering neural completion", "Using predictive terminal", "Custom Lab plugins"],
  },
];

export default function HelpCenterPage() {
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
              <span className="w-8 h-px bg-white/20" /> Research Support
            </motion.div>
            <h1 className="text-4xl sm:text-5xl font-medium mb-6 tracking-[-0.02em] leading-[1.02]">
              How can the lab <br />
              <span className="text-white/40">assist you today?</span>
            </h1>
            <p className="text-white/40 font-light text-lg max-w-lg leading-relaxed mb-10">
              Browse our knowledge base or connect with a lead investigator for personalized support.
            </p>

            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
              <input 
                type="text" 
                placeholder="Search troubleshooting guides..."
                className="w-full bg-white/3 border border-white/8 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-white/20 transition-all text-sm font-light placeholder:text-white/10"
              />
            </div>
          </header>

          {/* Quick Support Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="p-8 md:p-12 rounded-[2.5rem] bg-white text-black group relative overflow-hidden">
              <div className="relative z-10">
                <MessageSquare className="mb-6 opacity-30" size={32} />
                <h3 className="text-2xl font-medium mb-2 tracking-tight">Direct Support</h3>
                <p className="text-black/60 font-light mb-8 max-w-xs">
                  Connect with a specialized investigator for real-time problem solving.
                </p>
                <button className="bg-black text-white px-8 py-3 rounded-xl font-medium hover:bg-neutral-900 transition-all text-sm">
                  Join Discord Lab
                </button>
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-black/5 rounded-full" />
            </div>

            <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/5 border border-white/8 group">
              <Mail className="mb-6 text-white/20" size={32} />
              <h3 className="text-2xl font-medium mb-2 tracking-tight">Inquiry Portal</h3>
              <p className="text-white/40 font-light mb-8 max-w-xs">
                Open a research ticket and we&apos;ll get back to you within 4 hours.
              </p>
              <button className="bg-white/10 border border-white/10 text-white px-8 py-3 rounded-xl font-medium hover:bg-white/20 transition-all text-sm">
                Open Ticket
              </button>
            </div>
          </div>

          {/* FAQ Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FAQ_CATEGORIES.map((cat, idx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-10 rounded-[2.5rem] bg-white/2 border border-white/8 hover:bg-white/4 transition-all group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white/40 group-hover:text-white transition-colors">
                    <cat.icon size={22} />
                  </div>
                  <h2 className="text-xl font-medium tracking-tight">{cat.title}</h2>
                </div>
                <p className="text-white/40 font-light text-sm leading-relaxed mb-10">
                  {cat.desc}
                </p>
                <div className="space-y-4">
                  {cat.questions.map((q) => (
                    <Link 
                      key={q}
                      href="#"
                      className="flex items-center justify-between py-2 border-b border-white/5 text-xs font-mono text-white/40 hover:text-white transition-all group/link"
                    >
                      <span className="uppercase tracking-widest">{q}</span>
                      <ArrowRight size={12} className="opacity-0 group-hover/link:opacity-100 -translate-x-2 group-hover/link:translate-x-0 transition-all" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
