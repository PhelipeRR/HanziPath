import { db, ensureSchema } from '../utils/db'
import { sql } from 'drizzle-orm'
import { z } from 'zod'
const schema = z.object({ card: z.string().min(1).max(20), rating: z.enum(['again', 'hard', 'good', 'easy']) })
const intervals = { again: 1, hard: 2, good: 4, easy: 8 }
export default defineEventHandler(async (event) => { await ensureSchema(); const input = schema.parse(await readBody(event)); const days = intervals[input.rating]; const next = new Date(Date.now() + days * 86400000).toISOString(); await db.execute(sql`INSERT INTO review (card, rating, interval_days, next_review) VALUES (${input.card}, ${input.rating}, ${days}, ${next})`); return { ok: true, nextReview: next, intervalDays: days } })
