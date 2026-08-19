import { v } from "convex/values";
import { mutation, query } from "convex/server";

export const create = mutation({
  args: {
    userId: v.id("users"),
    paymentId: v.string(),
    amount: v.number(),
    currency: v.string(),
    status: v.string(),
    description: v.optional(v.string()),
    paymentMethod: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    return await ctx.db.insert("payments", {
      ...args,
      createdAt: now,
      updatedAt: now,
    });
  },
});

export const updateStatus = mutation({
  args: {
    paymentId: v.string(),
    status: v.string(),
  },
  handler: async (ctx, args) => {
    const payment = await ctx.db
      .query("payments")
      .filter((q) => q.eq("paymentId", args.paymentId))
      .first();

    if (payment) {
      await ctx.db.patch(payment._id, {
        status: args.status,
        updatedAt: Date.now(),
      });
    }
  },
});

export const getByUserId = query({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("payments")
      .filter((q) => q.eq("userId", args.userId))
      .order("desc")
      .collect();
  },
});

export const getByPaymentId = query({
  args: { paymentId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("payments")
      .filter((q) => q.eq("paymentId", args.paymentId))
      .first();
  },
});