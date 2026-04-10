"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "convex/react";

import Navbar from "@/features/landing/navbar";
import Footer from "@/features/landing/footer";
import { useAuth } from "@clerk/nextjs";
import { Search, ArrowRight, Loader2, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Doc } from "../../../../convex/_generated/dataModel";
import { api } from "../../../../convex/_generated/api";

// ─── Data ─────────────────────────────────────────────────────────────────────

const CATEGORIES = ["All", "Engineering", "Product", "Company", "Guides"];

// ─── Components ──────────────────────────────────────────────────────────────

function BlogCard({ post, index }: { post: Doc<"blogs">; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="group relative flex flex-col bg-linear-to-b from-white/5 to-white/[0.01] border border-white/10 border-t-white/25 hover:border-white/30 hover:scale-[1.01] rounded-3xl overflow-hidden transition-all duration-500 backdrop-blur-md shadow-2xl shadow-black/50 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]"
    >
      <Link
        href={`/blog/${post._id}`}
        className="block aspect-16/10 overflow-hidden relative"
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </Link>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-white/80 uppercase tracking-widest">
            {post.category}
          </span>
          <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest whitespace-nowrap">
            {post.readTime}
          </span>
        </div>

        <h3 className="text-xl font-medium mb-3 group-hover:text-white transition-colors leading-tight">
          {post.title}
        </h3>

        <p className="text-white/40 text-sm font-light leading-relaxed mb-6 line-clamp-2">
          {post.excerpt}
        </p>

        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[11px] text-white/30 font-mono">
            <span>{post.author}</span>
          </div>
          <ArrowRight
            size={16}
            className="text-white/20 group-hover:text-white transition-all transform group-hover:translate-x-1"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function BlogPage() {
  const { userId } = useAuth();
  const isSignedIn = !!userId;
  const [activeCategory, setActiveCategory] = useState("All");
  const blogs = useQuery(api.blogs.getBlogs, { category: activeCategory });

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 w-[92%]">
          {/* ── HEADER ── */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 text-xs text-white/40 font-mono uppercase tracking-[0.3em] mb-4"
              >
                <span className="w-8 h-px bg-white/20" /> ikigai journal
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl font-medium mb-5 tracking-[-0.02em] leading-[1.02]"
              >
                Latest from <br />
                <span className="text-white/40">the research lab</span>
              </motion.h1>
            </div>

            {isSignedIn && (
              <Link
                href="/blog/new"
                className="w-fit flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-white/90 transition-all duration-200"
              >
                Post Article <Sparkles size={16} />
              </Link>
            )}
          </div>

          {/* ── FILTERS ── */}
          <div className="flex flex-wrap items-center gap-2 mb-12 py-2 border-y border-white/5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-white text-black shadow-lg shadow-white/5"
                    : "text-white/40 bg-white/3 border border-white/5 hover:text-white hover:bg-white/8"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* ── CONTENT ── */}
          {!blogs ? (
            <div className="h-100 flex items-center justify-center">
              <Loader2 className="w-8 h-8 text-white/20 animate-spin" />
            </div>
          ) : blogs.length === 0 ? (
            <div className="h-100 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-3xl bg-white/2 border border-white/8 flex items-center justify-center mb-6">
                <Search size={24} className="text-white/20" />
              </div>
              <h3 className="text-xl font-medium mb-2">No matches found</h3>
              <p className="text-white/40 font-light">
                Be the first to share your research with the world.
              </p>
            </div>
          ) : (
            <>
              {/* ── FEATURED POST ── */}
              {activeCategory === "All" &&
                blogs.find((b: Doc<"blogs">) => b.featured) && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12 group"
                  >
                    <Link
                      href={`/blog/${blogs.find((b: Doc<"blogs">) => b.featured)?._id}`}
                      className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] rounded-[2.5rem] overflow-hidden border border-white/10 border-t-white/25 hover:border-white/30 bg-linear-to-b from-white/5 to-white/[0.01] backdrop-blur-md hover:bg-white/8 transition-all duration-500 shadow-2xl shadow-black/50 hover:shadow-[0_0_60px_rgba(255,255,255,0.06)]"
                    >
                      <div className="relative aspect-16/10 lg:aspect-auto overflow-hidden">
                        <Image
                          src={
                            blogs.find((b: Doc<"blogs">) => b.featured)
                              ?.image || ""
                          }
                          alt={
                            blogs.find((b: Doc<"blogs">) => b.featured)
                              ?.title || "Featured post"
                          }
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                          priority
                        />
                        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/20 to-transparent hidden lg:block" />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent lg:hidden" />
                      </div>

                      <div className="p-8 md:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-3 text-[11px] text-emerald-400 font-mono mb-6 uppercase tracking-widest">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          Featured Story
                        </div>
                        <h2 className="text-3xl md:text-4xl font-medium mb-6 leading-tight group-hover:text-white transition-colors">
                          {blogs.find((b: Doc<"blogs">) => b.featured)?.title}
                        </h2>
                        <p className="text-white/40 text-sm md:text-base leading-relaxed font-light mb-8 max-w-md">
                          {blogs.find((b: Doc<"blogs">) => b.featured)?.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-[10px] font-mono mb-10 uppercase tracking-[0.2em] text-white/30">
                          <span>
                            {
                              blogs.find((b: Doc<"blogs">) => b.featured)
                                ?.author
                            }
                          </span>
                          <span className="w-1 h-1 rounded-full bg-white/20" />
                          <span>
                            {
                              blogs.find((b: Doc<"blogs">) => b.featured)
                                ?.readTime
                            }
                          </span>
                        </div>
                        <div className="w-fit flex items-center gap-2 bg-white text-black px-8 py-3.5 rounded-xl font-medium hover:bg-neutral-200 transition-all duration-200 shadow-xl shadow-white/5">
                          Read article <ArrowRight size={18} />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )}

              {/* ── GRID ── */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                  {blogs
                    .filter(
                      (p: Doc<"blogs">) =>
                        activeCategory !== "All" || !p.featured,
                    )
                    .map((post: Doc<"blogs">, idx: number) => (
                      <BlogCard key={post._id} post={post} index={idx} />
                    ))}
                </AnimatePresence>
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
