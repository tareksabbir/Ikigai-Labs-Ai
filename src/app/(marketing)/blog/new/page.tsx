"use client";

import React, { useState } from "react";
import { useMutation } from "convex/react";

import { useRouter } from "next/navigation";
import { useUser, RedirectToSignIn } from "@clerk/nextjs";
import Navbar from "@/features/landing/navbar";
import Footer from "@/features/landing/footer";
import { ArrowLeft, Loader2, Sparkles, Send } from "lucide-react";
import Link from "next/link";
import { api } from "../../../../../convex/_generated/api";
import Image from "next/image";

const CATEGORIES = ["Engineering", "Product", "Company", "Guides"];

export default function NewBlogPage() {
  const router = useRouter();
  const createBlog = useMutation(api.blogs.createBlog);

  const { user, isLoaded, isSignedIn } = useUser();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "Engineering",
    author: user?.fullName || "",
    image: "",
    featured: false,
    readTime: "5 min read",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      alert("You must be logged in to post.");
      return;
    }

    if (!formData.image.startsWith("http")) {
      alert("Please provide a valid image URL.");
      return;
    }

    setIsSubmitting(true);
    try {
      await createBlog({
        ...formData,
        authorId: user.id,
      });
      router.push("/blog");
    } catch (error) {
      console.error("Failed to create blog:", error);
      alert("Something went wrong. Check the console.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6 w-[92%]">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-12 text-sm font-mono uppercase tracking-widest"
          >
            <ArrowLeft size={16} /> back to blog
          </Link>

          <header className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-medium mb-4 tracking-[-0.02em] leading-[1.02]">
              Post to the Lab
            </h1>
            <p className="text-white/40 font-light">
              Share your insights with the researcher community.
            </p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Image Preview / URL Row */}
            <div className="space-y-4">
              <label className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] block">
                Cover Image URL
              </label>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="relative w-full md:w-64 aspect-video rounded-2xl overflow-hidden bg-white/3 border border-white/8 group">
                  {formData.image ? (
                    <Image
                      src={formData.image}
                      alt="Preview"
                      fill
                      className="object-cover"
                      unoptimized // ← external URL (unsplash etc) এর জন্য দরকার
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-white/20">
                      <Sparkles size={32} strokeWidth={1} className="mb-2" />
                      <span className="text-[10px] font-mono tracking-widest uppercase text-center px-4">
                        Enter URL to preview
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-3 flex-1 w-full">
                  <input
                    type="url"
                    placeholder="https://images.unsplash.com/..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white/20 transition-all text-sm font-light placeholder:text-white/10"
                    value={formData.image}
                    onChange={(e) =>
                      setFormData({ ...formData, image: e.target.value })
                    }
                    required
                  />
                  <p className="text-[10px] text-white/30 font-light leading-relaxed uppercase tracking-widest font-mono">
                    High-impact cover image for the research article.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">
                  Title
                </label>
                <input
                  type="text"
                  placeholder="The Future of AI Labs"
                  className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 outline-none focus:border-white/20 transition-all text-sm font-light placeholder:text-white/10"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">
                  Author Name
                </label>
                <input
                  type="text"
                  placeholder="Researcher Name"
                  className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 outline-none focus:border-white/20 transition-all text-sm font-light placeholder:text-white/10"
                  value={formData.author}
                  onChange={(e) =>
                    setFormData({ ...formData, author: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">
                  Category
                </label>
                <select
                  className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 outline-none focus:border-white/20 transition-all text-sm font-light appearance-none select-none"
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                >
                  {CATEGORIES.map((c) => (
                    <option
                      key={c}
                      value={c}
                      className="bg-neutral-900 border-none"
                    >
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">
                  Read Time
                </label>
                <input
                  type="text"
                  placeholder="5 min read"
                  className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 outline-none focus:border-white/20 transition-all text-sm font-light placeholder:text-white/10"
                  value={formData.readTime}
                  onChange={(e) =>
                    setFormData({ ...formData, readTime: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">
                Short Excerpt
              </label>
              <textarea
                rows={3}
                placeholder="A brief summary of your research..."
                className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 outline-none focus:border-white/20 transition-all text-sm font-light resize-none placeholder:text-white/10"
                value={formData.excerpt}
                onChange={(e) =>
                  setFormData({ ...formData, excerpt: e.target.value })
                }
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">
                Main Content
              </label>
              <textarea
                rows={10}
                placeholder="The detailed research findings..."
                className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 outline-none focus:border-white/20 transition-all text-sm font-light resize-none placeholder:text-white/10"
                value={formData.content}
                onChange={(e) =>
                  setFormData({ ...formData, content: e.target.value })
                }
                required
              />
            </div>

            <div className="flex items-center gap-3 py-4">
              <input
                id="featured"
                type="checkbox"
                className="w-4 h-4 rounded border-white/10 bg-white/5 accent-emerald-400"
                checked={formData.featured}
                onChange={(e) =>
                  setFormData({ ...formData, featured: e.target.checked })
                }
              />
              <label
                htmlFor="featured"
                className="text-sm text-white/40 font-light select-none"
              >
                Highlight as Featured Story
              </label>
            </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-white text-black rounded-xl font-medium hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-white/5"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    Publish Article <Send size={18} />
                  </>
                )}
              </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
