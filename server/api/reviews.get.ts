import { db, ensureSchema } from '../utils/db'
import { sql } from 'drizzle-orm'
export default defineEventHandler(async () => { await ensureSchema(); return { cards: (await db.execute(sql`SELECT * FROM flashcard WHERE next_review <= NOW() AND mastered=false ORDER BY next_review LIMIT 20`)).rows, totals: (await db.execute(sql`SELECT COUNT(*)::int AS total, COUNT(*) FILTER (WHERE mastered)::int AS mastered, COALESCE(AVG(CASE WHEN rating <> 'again' THEN 1 ELSE 0 END),0)::float AS accuracy FROM review`)).rows[0] } })
