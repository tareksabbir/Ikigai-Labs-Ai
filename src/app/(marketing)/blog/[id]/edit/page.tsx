"use client";

import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "convex/react";

import { useParams, useRouter } from "next/navigation";
import { useUser, RedirectToSignIn } from "@clerk/nextjs";

import Navbar from "@/features/landing/navbar";
import Footer from "@/features/landing/footer";
import { ArrowLeft, Loader2, Save, Sparkles } from "lucide-react";
import Link from "next/link";
import { Id } from "../../../../../../convex/_generated/dataModel";
import { api } from "../../../../../../convex/_generated/api";
import Image from "next/image";

const CATEGORIES = ["Engineering", "Product", "Company", "Guides"];

export default function EditBlogPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as Id<"blogs">;

  const { user, isLoaded, isSignedIn } = useUser();
  const blog = useQuery(api.blogs.getBlogById, { id });
  const updateBlog = useMutation(api.blogs.updateBlog);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "Engineering",
    author: "",
    image: "",
    featured: false,
    readTime: "5 min read",
  });

  useEffect(() => {
    if (blog) {
      setFormData({
        title: blog.title,
        excerpt: blog.excerpt,
        content: blog.content,
        category: blog.category,
        author: blog.author,
        image: blog.image,
        featured: blog.featured,
        readTime: blog.readTime,
      });
    }
  }, [blog]);

  if (!isLoaded || blog === undefined) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-white/20 animate-spin" />
      </div>
    );
  }

  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  const isAdmin = user?.emailAddresses?.some(
    (e) => e.emailAddress === "tareksabbir4599@gmail.com",
  );
  const isAuthor = user?.id === blog?.authorId;

  if (!isAdmin && !isAuthor && blog) {
    return (
      <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-medium mb-4">Unauthorized</h2>
        <p className="text-white/40 mb-8">
          You dont have permission to edit this article.
        </p>
        <Link href="/blog" className="px-6 py-3 bg-white text-black rounded-xl">
          Back to Feed
        </Link>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await updateBlog({
        id,
        ...formData,
      });
      router.push(`/blog/${id}`);
    } catch (error) {
      console.error(error);
      alert("Failed to update article");
    } finally {
      setIsSubmitting(false);
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
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6 w-[92%]">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-12 text-sm font-mono uppercase tracking-widest"
          >
            <ArrowLeft size={16} /> cancel edits
          </button>

          <header className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-medium mb-4 tracking-[-0.02em] leading-[1.02]">
              Edit Article
            </h1>
            <p className="text-white/40 font-light">
              Modify your research findings and insights.
            </p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Image Preview / URL Row */}
            <div className="space-y-4">
              <label className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] block">
                Cover Image URL
              </label>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="relative w-full md:w-64 aspect-video rounded-2xl overflow-hidden bg-white/3 border border-white/8">
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
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-3 flex-1 w-full">
                  <input
                    type="url"
                    placeholder="https://images.unsplash.com/..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white/20 transition-all text-sm font-light"
                    value={formData.image}
                    onChange={(e) =>
                      setFormData({ ...formData, image: e.target.value })
                    }
                    required
                  />
                  <p className="text-[10px] text-white/30 font-light leading-relaxed uppercase tracking-widest font-mono">
                    Update the high-impact cover image.
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
                    <option key={c} value={c} className="bg-neutral-900">
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">
                Short Excerpt
              </label>
              <textarea
                rows={3}
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
                className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 outline-none focus:border-white/20 transition-all text-sm font-light resize-none placeholder:text-white/10"
                value={formData.content}
                onChange={(e) =>
                  setFormData({ ...formData, content: e.target.value })
                }
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-white text-black rounded-xl font-medium hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 shadow-xl shadow-white/5"
            >
              {isSubmitting ? (
                <Loader2 size={20} className="animate-spin" />
              ) : (
                <>
                  Save Changes <Save size={18} />
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
