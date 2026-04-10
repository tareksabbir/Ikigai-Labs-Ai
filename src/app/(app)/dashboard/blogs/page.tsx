/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import Navbar from "@/features/landing/navbar";
import Footer from "@/features/landing/footer";
import { motion, AnimatePresence } from "framer-motion";
import { useUser, RedirectToSignIn } from "@clerk/nextjs";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import {
  Edit3,
  Trash2,
  ExternalLink,
  Search,
  Plus,
  Loader2,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function BlogManagementPage() {
  const { user, isLoaded, isSignedIn } = useUser();
  const blogs = useQuery(api.blogs.getBlogsByAuthor, {
    authorId: user?.id || "",
  });
  const deleteBlog = useMutation(api.blogs.deleteBlog);

  const [searchTerm, setSearchTerm] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);

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

  const filteredBlogs = blogs?.filter(
    (b) =>
      b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleDelete = async (id: any) => {
    try {
      await deleteBlog({ id });
      setDeletingId(null);
    } catch (error) {
      console.error(error);
      alert("Failed to delete post");
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 w-[92%]">
          <header className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-white/40 mb-2">
                <Link
                  href="/dashboard"
                  className="hover:text-white transition-colors"
                >
                  Dashboard
                </Link>
                <span>/</span>
                <span className="text-white">Content</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-medium tracking-[-0.02em] leading-[1.02]">
                Research Articles
              </h1>
            </div>
            <Link
              href="/blog/new"
              className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:bg-neutral-200 transition-all flex items-center gap-2 w-fit"
            >
              <Plus size={18} /> New Post
            </Link>
          </header>

          {/* Search and Filters */}
          <div className="mb-8 relative max-w-md">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20"
              size={18}
            />
            <input
              type="text"
              placeholder="Filter by title or category..."
              className="w-full bg-linear-to-b from-white/5 to-white/[0.01] border border-white/10 border-t-white/20 rounded-2xl py-3 pl-12 pr-4 outline-none focus:border-white/30 transition-all text-sm font-light backdrop-blur-md shadow-2xl shadow-black/50"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="bg-linear-to-b from-white/5 to-white/[0.01] border border-white/10 border-t-white/25 rounded-[2.5rem] overflow-hidden backdrop-blur-md shadow-2xl shadow-black/50">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/5">
                    <th className="px-8 py-6 text-[10px] font-mono text-white/30 uppercase tracking-widest">
                      Article
                    </th>
                    <th className="px-8 py-6 text-[10px] font-mono text-white/30 uppercase tracking-widest">
                      Category
                    </th>
                    <th className="px-8 py-6 text-[10px] font-mono text-white/30 uppercase tracking-widest text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/3">
                  {!blogs ? (
                    <tr>
                      <td colSpan={3} className="px-8 py-20 text-center">
                        <Loader2
                          size={24}
                          className="animate-spin text-white/20 mx-auto"
                        />
                      </td>
                    </tr>
                  ) : filteredBlogs?.length === 0 ? (
                    <tr>
                      <td
                        colSpan={3}
                        className="px-8 py-20 text-center text-white/30 font-light"
                      >
                        No articles found.
                      </td>
                    </tr>
                  ) : (
                    filteredBlogs?.map((blog) => (
                      <tr
                        key={blog._id}
                        className="group hover:bg-white/5 transition-colors border-b border-white/[0.02] last:border-0"
                      >
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 overflow-hidden shrink-0 relative">
                              <Image
                                src={blog.image}
                                width={48}
                                height={48}
                                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                                alt={blog.title}
                              />
                            </div>
                            <div>
                              <p className="font-medium mb-1 truncate max-w-xs">
                                {blog.title}
                              </p>
                              <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
                                {blog.readTime}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-8 py-6">
                          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-white/60 uppercase tracking-widest">
                            {blog.category}
                          </span>
                        </td>
                        <td className="px-8 py-6 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Link
                              href={`/blog/${blog._id}`}
                              className="p-2.5 rounded-xl bg-white/3 border border-white/5 hover:bg-white/8 transition-all text-white/40 hover:text-white"
                              title="View Live"
                            >
                              <ExternalLink size={16} />
                            </Link>
                            <Link
                              href={`/blog/${blog._id}/edit`}
                              className="p-2.5 rounded-xl bg-white/3 border border-white/5 hover:bg-white/8 transition-all text-white/40 hover:text-white"
                              title="Edit Article"
                            >
                              <Edit3 size={16} />
                            </Link>
                            <button
                              onClick={() => setDeletingId(blog._id)}
                              className="p-2.5 rounded-xl bg-white/3 border border-white/5 hover:bg-red-500/10 hover:border-red-500/20 transition-all text-white/40 hover:text-red-400"
                              title="Delete Article"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {deletingId && (
          <div className="fixed inset-0 z-200 flex items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setDeletingId(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-neutral-900 border border-white/10 p-8 md:p-12 rounded-[2.5rem] max-w-md w-full text-center shadow-2xl"
            >
              <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center text-red-500 mx-auto mb-8">
                <AlertTriangle size={32} />
              </div>
              <h2 className="text-2xl font-medium mb-4">Delete Article?</h2>
              <p className="text-white/40 font-light mb-10 leading-relaxed">
                This action is permanent and cannot be undone. All research
                findings and content will be lost.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setDeletingId(null)}
                  className="py-4 bg-white/5 hover:bg-white/10 rounded-2xl font-medium transition-all text-sm"
                >
                  Keep it
                </button>
                <button
                  onClick={() => handleDelete(deletingId)}
                  className="py-4 bg-red-500 text-white rounded-2xl font-medium hover:bg-red-600 transition-all text-sm shadow-xl shadow-red-500/10"
                >
                  Delete Forever
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
