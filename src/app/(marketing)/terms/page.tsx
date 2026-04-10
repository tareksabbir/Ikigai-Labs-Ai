"use client";

import React from "react";
import Navbar from "@/features/landing/navbar";
import Footer from "@/features/landing/footer";
import { motion } from "framer-motion";
import { Shield, Lock, Scale, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

const SECTIONS = [
  { id: "terms", title: "Terms of Service", icon: Scale },
  { id: "privacy", title: "Privacy Policy", icon: Lock },
  { id: "data", title: "Data Management", icon: Shield },
  { id: "compliance", title: "Compliance", icon: FileText },
];

export default function TermsPage() {
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
              <span className="w-8 h-px bg-white/20" /> Legal Framework
            </motion.div>
            <h1 className="text-4xl sm:text-5xl font-medium mb-6 tracking-[-0.02em] leading-[1.02]">
              The rules of our <br />
              <span className="text-white/40">shared investigation.</span>
            </h1>
            <p className="text-white/40 font-light text-lg max-w-lg leading-relaxed">
              Transparency, security, and mutual trust are the bedrock of the ikigai-labs ecosystem.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-20">
            {/* Sticky Sidebar Navigation */}
            <aside className="hidden lg:block">
              <div className="sticky top-40 space-y-2">
                {SECTIONS.map((section) => (
                  <button
                    key={section.id}
                    className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/2 border border-white/5 text-white/40 hover:text-white hover:bg-white/5 transition-all text-left group"
                  >
                    <section.icon size={18} />
                    <span className="text-sm font-medium tracking-tight">{section.title}</span>
                  </button>
                ))}
              </div>
            </aside>

            {/* Legal Content */}
            <div className="space-y-32">
              {/* Terms Section */}
              <section id="terms" className="max-w-3xl">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest border border-emerald-400/20 px-3 py-1 rounded-full">Section 01</span>
                  <h2 className="text-3xl font-medium tracking-tight">Terms of Service</h2>
                </div>
                <div className="space-y-8 text-white/60 font-light leading-relaxed text-lg">
                  <p>
                    By accessing or using the ikigai-labs platform (&ldquo;the Lab&rdquo;), you agree to be bound by these Terms of Service. If you do not agree to these terms, you must immediately cease all research activities within the platform.
                  </p>
                  <p>
                    The Lab is a collaborative research environment. Users are granted a non-exclusive, non-transferable license to use our neural interface tools for individual or professional development purposes. Redistribution of core laboratory architecture is strictly prohibited.
                  </p>
                  <h3 className="text-xl font-medium text-white mb-4">User Responsibilities</h3>
                  <p>
                    Investigators are responsible for maintaining the security of their lab credentials and all data transmitted to the Inference API. You agree not to use the Lab for any malicious intent, including the training of malicious neural networks or unauthorized system penetration.
                  </p>
                </div>
              </section>

              {/* Privacy Section */}
              <section id="privacy" className="max-w-3xl">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-[10px] font-mono text-sky-400 uppercase tracking-widest border border-sky-400/20 px-3 py-1 rounded-full">Section 02</span>
                  <h2 className="text-3xl font-medium tracking-tight">Privacy Policy</h2>
                </div>
                <div className="space-y-8 text-white/60 font-light leading-relaxed text-lg">
                  <p>
                    Your research is yours. We do not use user-submitted code or datasets to train our global models unless explicitly opted-in through a Research Partnership Agreement.
                  </p>
                  <p>
                    We collect minimal telemetry data (e.g., latency metrics and error logs) to maintain the stability of the Lab infrastructure. All data is encrypted at rest and in transit via industry-standard protocols.
                  </p>
                </div>
              </section>

              {/* Data Management Section */}
              <section id="data" className="max-w-3xl">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-[10px] font-mono text-violet-400 uppercase tracking-widest border border-violet-400/20 px-3 py-1 rounded-full">Section 03</span>
                  <h2 className="text-3xl font-medium tracking-tight">Data Management</h2>
                </div>
                <div className="space-y-8 text-white/60 font-light leading-relaxed text-lg">
                  <p>
                    ikigai-labs provides investigators with tools to export their research data at any time. We maintain a strict &ldquo;Zero-Lock&rdquo; policy, ensuring your findings are never trapped within our ecosystem.
                  </p>
                  <p>
                    Deleted research content is purged from our systems within 14 days of the deletion request, unless legal retention requirements dictate otherwise.
                  </p>
                </div>
              </section>

              {/* Footer Links */}
              <footer className="pt-20 border-t border-white/5 flex flex-wrap gap-12">
                <div>
                  <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest mb-4">Last Updated</p>
                  <p className="text-sm font-medium">March 15, 2024</p>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest mb-4">Legal Contact</p>
                  <p className="text-sm font-medium">legal@ikigai-labs.ai</p>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest mb-4">Jurisdiction</p>
                  <p className="text-sm font-medium">Palo Alto, CA</p>
                </div>
              </footer>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
