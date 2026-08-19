import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Users table
  users: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    createdAt: v.number(),
  }),

  // Payments table for Mercado Pago
  payments: defineTable({
    userId: v.id("users"),
    paymentId: v.string(), // Mercado Pago payment ID
    amount: v.number(),
    currency: v.string(),
    status: v.string(), // pending, approved, rejected, refunded
    description: v.optional(v.string()),
    paymentMethod: v.optional(v.string()),
    createdAt: v.number(),
    updatedAt: v.number(),
  }),

  // Notifications table
  notifications: defineTable({
    userId: v.id("users"),
    title: v.string(),
    message: v.string(),
    type: v.string(), // payment, system, promotion
    read: v.boolean(),
    createdAt: v.number(),
  }),
});