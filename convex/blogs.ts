import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

/**
 * Create a new blog post.
 */
export const createBlog = mutation({
  args: {
    title: v.string(),
    excerpt: v.string(),
    content: v.string(),
    category: v.string(),
    author: v.string(),
    image: v.string(),
    featured: v.boolean(),
    readTime: v.string(),
    authorId: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthenticated");
    }

    const blogId = await ctx.db.insert("blogs", {
      ...args,
      authorId: identity.subject,
    });
    return blogId;
  },
});

/**
 * Fetch all blog posts, optionally filtered by category.
 */
export const getBlogs = query({
  args: {
    category: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    if (args.category && args.category !== "All") {
      const category = args.category;
      return await ctx.db
        .query("blogs")
        .withIndex("by_category", (q) => q.eq("category", category))
        .order("desc")
        .collect();
    }
    return await ctx.db.query("blogs").order("desc").collect();
  },
});

/**
 * Fetch a single blog post by its ID.
 */
export const getBlogById = query({
  args: { id: v.id("blogs") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

/**
 * Delete a blog post by its ID.
 */
export const deleteBlog = mutation({
  args: { id: v.id("blogs") },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthenticated");
    }

    const blog = await ctx.db.get(args.id);
    if (!blog) {
      throw new Error("Blog not found");
    }

    const isAdmin = identity.email === "tareksabbir4599@gmail.com";
    const isOwner = blog.authorId === identity.subject;

    if (!isAdmin && !isOwner) {
      throw new Error("Unauthorized: You can only delete your own posts.");
    }

    await ctx.db.delete(args.id);
  },
});

/**
 * Fetch all blog posts for a specific author.
 */
export const getBlogsByAuthor = query({
  args: { authorId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("blogs")
      .filter((q) => q.eq(q.field("authorId"), args.authorId))
      .order("desc")
      .collect();
  },
});

/**
 * Update an existing blog post.
 */
export const updateBlog = mutation({
  args: {
    id: v.id("blogs"),
    title: v.optional(v.string()),
    excerpt: v.optional(v.string()),
    content: v.optional(v.string()),
    category: v.optional(v.string()),
    author: v.optional(v.string()),
    image: v.optional(v.string()),
    featured: v.optional(v.boolean()),
    readTime: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args;
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthenticated");
    }

    const blog = await ctx.db.get(id);
    if (!blog) {
      throw new Error("Blog not found");
    }

    const isAdmin = identity.email === "tareksabbir4599@gmail.com";
    const isOwner = blog.authorId === identity.subject;

    if (!isAdmin && !isOwner) {
      throw new Error("Unauthorized: You can only edit your own posts.");
    }

    await ctx.db.patch(id, updates);
  },
});
