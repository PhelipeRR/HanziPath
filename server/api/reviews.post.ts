import db from '../utils/db'
import { z } from 'zod'
const schema = z.object({ card: z.string().min(1).max(20), rating: z.enum(['again', 'hard', 'good', 'easy']) })
const intervals = { again: 1, hard: 2, good: 4, easy: 8 }
export default defineEventHandler(async (event) => { const input = schema.parse(await readBody(event)); const days = intervals[input.rating]; const next = new Date(Date.now() + days * 86400000).toISOString(); db.prepare('INSERT INTO review (card, rating, interval_days, next_review, created_at) VALUES (?, ?, ?, ?, ?)').run(input.card, input.rating, days, next, new Date().toISOString()); return { ok: true, nextReview: next, intervalDays: days } })
