import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
export const createTask = mutation({
  args: { title: v.string(), description: v.string(), completed: v.boolean() },
  async handler(ctx, args) {
    return await ctx.db.insert("tasks", { ...args });
  },
});

export const getTasks = query({
  async handler(ctx) {
    return await ctx.db.query("tasks").collect();
  },
});
