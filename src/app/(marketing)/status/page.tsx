"use client";

import React from "react";
import Navbar from "@/features/landing/navbar";
import Footer from "@/features/landing/footer";
import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, Clock, Globe, Database, Cpu, Activity, LayoutDashboard, ShieldCheck } from "lucide-react";

const SERVICES = [
  { name: "Public Website", status: "Operational", icon: Globe, uptime: "99.99%" },
  { name: "Lab Dashboard", status: "Operational", icon: LayoutDashboard, uptime: "99.98%" },
  { name: "Inference API", status: "Operational", icon: Cpu, uptime: "99.95%" },
  { name: "Vector Database", status: "Operational", icon: Database, uptime: "100%" },
  { name: "Auth Services", status: "Operational", icon: ShieldCheck, uptime: "99.99%" },
  { name: "Real-time Sync", status: "Operational", icon: Activity, uptime: "99.97%" },
];

const INCIDENTS = [
  { date: "March 12, 2024", title: "API Latency Spike", status: "Resolved", duration: "14 mins" },
  { date: "February 28, 2024", title: "Dashboard Maintenance", status: "Scheduled", duration: "2 hours" },
  { date: "January 15, 2024", title: "Search Index Optimization", status: "Resolved", duration: "45 mins" },
];

export default function StatusPage() {
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
              <span className="w-8 h-px bg-white/20" /> System Monitoring
            </motion.div>
            <h1 className="text-4xl sm:text-5xl font-medium mb-6 tracking-[-0.02em] leading-[1.02]">
              All systems are <br />
              <span className="text-emerald-400">fully operational.</span>
            </h1>
            <p className="text-white/40 font-light text-lg max-w-lg leading-relaxed">
               ikigai-labs infrastructure is distributed across 12 global regions for maximum resilience.
            </p>
          </header>

          {/* Main Status Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-10 rounded-[3rem] bg-emerald-500/5 border border-emerald-500/20 flex flex-col md:flex-row items-center justify-between gap-8 mb-20 relative overflow-hidden"
          >
            <div className="flex items-center gap-6 relative z-10">
              <div className="w-16 h-16 rounded-3xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <CheckCircle2 size={32} />
              </div>
              <div>
                <h2 className="text-xl font-medium mb-1 tracking-tight uppercase">System Normal</h2>
                <p className="text-emerald-400/60 text-xs font-mono uppercase tracking-widest">Global Status: Healthy</p>
              </div>
            </div>
            <div className="flex items-center gap-12 relative z-10 px-8 py-4 border-l border-emerald-500/10">
              <div>
                <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-1">Last Update</p>
                <p className="text-sm font-medium">1 minute ago</p>
              </div>
              <div className="hidden sm:block">
                <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-1">Global Uptime</p>
                <p className="text-sm font-medium">99.98% (30d)</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-linear-to-r from-emerald-500/5 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-8 rounded-[2.5rem] bg-linear-to-b from-white/5 to-white/[0.01] border border-white/10 border-t-white/25 hover:bg-white/8 hover:border-white/30 transition-all duration-500 backdrop-blur-md shadow-2xl shadow-black/50 flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white/20 group-hover:text-white/40 transition-colors">
                    <service.icon size={20} />
                  </div>
                  <h3 className="text-sm font-medium">{service.name}</h3>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 justify-end mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">{service.status}</span>
                  </div>
                  <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">{service.uptime}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Incident Log */}
          <section className="max-w-4xl">
            <h2 className="text-2xl font-medium mb-10 flex items-center gap-4 tracking-tight">
              <Clock size={24} className="text-white/20" /> Incident Log
            </h2>
            <div className="space-y-4">
              {INCIDENTS.map((incident, i) => (
                <motion.div
                  key={incident.title}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col md:flex-row md:items-center justify-between p-8 rounded-3xl bg-white/2 border border-white/5 hover:border-white/10 transition-all"
                >
                  <div className="mb-4 md:mb-0">
                    <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest block mb-2">{incident.date}</span>
                    <h3 className="text-lg font-medium">{incident.title}</h3>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="text-right hidden sm:block">
                      <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest mb-1">Duration</p>
                      <p className="text-sm font-light text-white/40">{incident.duration}</p>
                    </div>
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-widest border ${
                      incident.status === "Resolved" 
                        ? "bg-emerald-500/5 border-emerald-500/20 text-emerald-400" 
                        : "bg-sky-500/5 border-sky-500/20 text-sky-400"
                    }`}>
                      {incident.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
