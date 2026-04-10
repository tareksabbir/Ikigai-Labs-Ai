"use client";

import React, { useState } from "react";
import { useQuery, useMutation } from "convex/react";

import { useParams, useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "@/features/landing/navbar";
import Footer from "@/features/landing/footer";
import {
  ArrowLeft,
  Clock,
  User,
  Share2,
  Twitter,
  Github,
  Loader2,
  Trash2,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Id } from "../../../../../convex/_generated/dataModel";
import { api } from "../../../../../convex/_generated/api";

export default function BlogDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as Id<"blogs">;

  const { user } = useUser();
  const blog = useQuery(api.blogs.getBlogById, { id });
  const deleteBlog = useMutation(api.blogs.deleteBlog);

  const [isDeleting, setIsDeleting] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const isAdmin = user?.emailAddresses?.some(
    (e) => e.emailAddress === "tareksabbir4599@gmail.com",
  );
  const isAuthor = user?.id === blog?.authorId;
  const canDelete = isAdmin || isAuthor;

  // Reading Progress Bar logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleDelete = async () => {
    if (!confirmDelete) {
      setConfirmDelete(true);
      setTimeout(() => setConfirmDelete(false), 3000); // Reset after 3 seconds
      return;
    }

    setIsDeleting(true);
    try {
      await deleteBlog({ id });
      router.push("/blog");
    } catch (error) {
      console.error("Failed to delete blog:", error);
      alert("Failed to delete the article.");
      setIsDeleting(false);
    }
  };

  if (!blog) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-white/20 animate-spin" />
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen selection:bg-white/10 selection:text-white">
      <Navbar />

      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white origin-left z-100"
        style={{ scaleX }}
      />

      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6 w-[92%]">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-12 text-sm font-mono uppercase tracking-widest group"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />{" "}
            back to research
          </Link>

          {/* ── HERO ── */}
          <header className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-white/80 uppercase tracking-widest">
                {blog.category}
              </span>
              <div className="flex items-center gap-2 text-[10px] font-mono text-white/30 uppercase tracking-widest">
                <Calendar size={12} />
                <span>Published Oct 2023</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-white/30 uppercase tracking-widest">
                <Clock size={12} />
                <span>{blog.readTime}</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-medium mb-8 leading-[1.02] tracking-[-0.02em]"
            >
              {blog.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center justify-between gap-8 pt-10 border-t border-white/8"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
                  <User size={24} className="text-white/20" />
                </div>
                <div>
                  <p className="text-base font-medium text-white">
                    {blog.author}
                  </p>
                  <p className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">
                    Principal Research Scientist
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {canDelete && (
                  <>
                    <button
                      onClick={handleDelete}
                      disabled={isDeleting}
                      className={`p-3 rounded-2xl border transition-all flex items-center gap-2 group ${
                        confirmDelete
                          ? "bg-red-500/10 border-red-500/50 text-red-500"
                          : "bg-white/3 border-white/5 hover:bg-red-500/5 hover:border-red-500/20 text-white/40 hover:text-red-400"
                      }`}
                    >
                      {isDeleting ? (
                        <Loader2 size={18} className="animate-spin" />
                      ) : confirmDelete ? (
                        <>
                          <Trash2 size={18} />
                          <span className="text-[10px] font-mono font-bold uppercase tracking-widest">
                            Confirm?
                          </span>
                        </>
                      ) : (
                        <Trash2 size={18} />
                      )}
                    </button>
                    <div className="w-px h-6 bg-white/10 mx-2" />
                  </>
                )}
                <button className="p-3 rounded-2xl bg-white/3 border border-white/5 hover:bg-white/8 transition-all text-white/40 hover:text-white">
                  <Twitter size={20} />
                </button>
                <button className="p-3 rounded-2xl bg-white/3 border border-white/5 hover:bg-white/8 transition-all text-white/40 hover:text-white">
                  <Github size={20} />
                </button>
                <button className="p-3 rounded-2xl bg-white/3 border border-white/5 hover:bg-white/8 transition-all text-white/40 hover:text-white">
                  <Share2 size={20} />
                </button>
              </div>
            </motion.div>
          </header>

          {/* ── COVER IMAGE ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative aspect-21/9 rounded-[2.5rem] overflow-hidden mb-24 border border-white/8 shadow-[0_0_100px_rgba(255,255,255,0.02)]"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
          </motion.div>

          {/* ── CONTENT ── */}
          <article className="max-w-3xl mx-auto">
            <div className="text-white/70 font-light leading-[1.8] text-xl space-y-12 whitespace-pre-wrap tracking-[-0.01em]">
              {blog.content}
            </div>
          </article>

          {/* ── CTA ── */}
          <footer className="mt-40 pt-20 border-t border-white/8">
            <div className="relative bg-white/2 border border-white/8 rounded-[3rem] p-12 md:p-20 text-center overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

              <h3 className="text-3xl md:text-5xl font-medium mb-6 tracking-tight">
                Stay optimized
              </h3>
              <p className="text-white/40 font-light mb-12 max-w-lg mx-auto text-lg leading-relaxed">
                Join 10,000+ researchers getting weekly deep-dives into AI
                optimization and systems research.
              </p>

              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto p-2 bg-white/3 border border-white/8 rounded-2xl backdrop-blur-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent border-none px-6 py-3 outline-none focus:ring-0 text-sm font-light text-white"
                />
                <button className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-neutral-200 transition-all text-sm whitespace-nowrap shadow-xl">
                  Join Newsletter
                </button>
              </form>
            </div>
          </footer>
        </div>
      </main>

      <Footer />
    </div>
  );
}
