"use client";

import React from "react";
import Navbar from "@/features/landing/navbar";
import Footer from "@/features/landing/footer";
import { motion } from "framer-motion";
import { useUser, RedirectToSignIn } from "@clerk/nextjs";
import { useQuery } from "convex/react";

import {
  LayoutDashboard,
  FileText,
  Settings,
  PlusCircle,
  TrendingUp,
  Users,
  ArrowRight,
  BookOpen,
  Loader2,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { api } from "../../../../convex/_generated/api";

export default function DashboardPage() {
  const { user, isLoaded, isSignedIn } = useUser();
  const blogs = useQuery(api.blogs.getBlogsByAuthor, {
    authorId: user?.id || "",
  });

  if (!isLoaded) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-white/20 animate-spin" />
      </div>
    );
  }

  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  const stats = [
    {
      label: "Total Articles",
      value: blogs?.length || 0,
      icon: FileText,
      color: "text-emerald-400",
    },
    {
      label: "Total Views",
      value: "1.2k",
      icon: TrendingUp,
      color: "text-blue-400",
    },
    { label: "Comments", value: "48", icon: Users, color: "text-purple-400" },
  ];

  const quickActions = [
    {
      title: "Write Article",
      href: "/blog/new",
      icon: PlusCircle,
      desc: "Create a new research post",
    },
    {
      title: "Manage Content",
      href: "/dashboard/blogs",
      icon: BookOpen,
      desc: "Edit or delete existing posts",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
      desc: "Update your profile and preferences",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 w-[92%]">
          <header className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-4xl sm:text-5xl font-medium mb-2 tracking-[-0.02em] leading-[1.02]">
                Dashboard
              </h1>
              <p className="text-white/40 font-light text-lg">
                Welcome back,{" "}
                <span className="text-white font-medium">
                  {user?.firstName || "Researcher"}
                </span>
                . Heres your research overview.
              </p>
            </div>
            <Link
              href="/blog/new"
              className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:bg-neutral-200 transition-all flex items-center gap-2 w-fit shadow-lg shadow-white/5"
            >
              <PlusCircle size={18} /> New Article
            </Link>
          </header>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-linear-to-b from-white/5 to-white/[0.01] border border-white/10 border-t-white/20 relative group overflow-hidden backdrop-blur-md shadow-2xl shadow-black/50 hover:bg-white/8 hover:border-white/30 transition-all duration-500"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <stat.icon size={80} strokeWidth={1} />
                </div>
                <div
                  className={`p-3 rounded-2xl bg-white/5 w-fit mb-6 ${stat.color}`}
                >
                  <stat.icon size={24} />
                </div>
                <p className="text-white/40 text-sm font-mono uppercase tracking-[0.2em] mb-2">
                  {stat.label}
                </p>
                <p className="text-5xl font-medium tracking-tighter">
                  {stat.value}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Quick Actions */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-xl font-medium mb-6 flex items-center gap-2">
                <LayoutDashboard size={20} className="text-white/40" /> Quick
                Actions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {quickActions.map((action) => (
                  <Link
                    key={action.title}
                    href={action.href}
                    className="p-6 rounded-[2rem] bg-linear-to-b from-white/5 to-white/[0.01] border border-white/10 border-t-white/20 hover:bg-white/8 hover:border-white/30 transition-all duration-500 group relative overflow-hidden backdrop-blur-md shadow-2xl shadow-black/50"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                        <action.icon size={20} />
                      </div>
                      <ArrowRight
                        size={18}
                        className="text-white/20 group-hover:text-white group-hover:translate-x-1 transition-all"
                      />
                    </div>
                    <h3 className="text-lg font-medium mb-1">{action.title}</h3>
                    <p className="text-white/30 text-sm font-light">
                      {action.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Activity / Side Info */}
            <div className="space-y-6">
              <h2 className="text-xl font-medium mb-6">Recent Post Preview</h2>
              {blogs && blogs.length > 0 ? (
                <div className="p-6 rounded-[2rem] bg-linear-to-b from-white/5 to-white/[0.01] border border-white/10 border-t-white/20 relative overflow-hidden group shadow-2xl shadow-black/50 backdrop-blur-md hover:bg-white/8 transition-all duration-500">
                  <Image
                    src={blogs[0].image}
                    alt={blogs[0].title}
                    fill
                    className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity object-cover grayscale"
                  />
                  <div className="relative z-10">
                    <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block mb-4">
                      Latest Draft
                    </span>
                    <h3 className="text-xl font-medium mb-3 line-clamp-2 leading-tight">
                      {blogs[0].title}
                    </h3>
                    <Link
                      href={`/blog/${blogs[0]._id}`}
                      className="text-sm text-white hover:underline flex items-center gap-1"
                    >
                      View Live <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="p-12 rounded-[2rem] border border-dashed border-white/10 flex flex-col items-center justify-center text-center">
                  <FileText size={32} className="text-white/10 mb-4" />
                  <p className="text-white/30 text-sm">
                    No articles found.
                    <br />
                    Start writing today!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
