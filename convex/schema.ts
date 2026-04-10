import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  projects: defineTable({
    name: v.string(),
    ownerId: v.string(),
    importStatus: v.union(
      v.literal("importing"),
      v.literal("completed"),
      v.literal("failed"),
    ),
  }).index("by_owner", ["ownerId"]),
  blogs: defineTable({
    title: v.string(),
    excerpt: v.string(),
    content: v.string(),
    category: v.string(),
    author: v.string(),
    authorId: v.string(),
    image: v.string(),
    featured: v.boolean(),
    readTime: v.string(),
  }).index("by_category", ["category"]),
});
