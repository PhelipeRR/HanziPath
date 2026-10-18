import { db, ensureSchema } from '../utils/db'
import { sql } from 'drizzle-orm'
export default defineEventHandler(async()=>{await ensureSchema();return {version:1,exportedAt:new Date().toISOString(),progress:(await db.execute(sql`SELECT * FROM progress WHERE id=1`)).rows[0],settings:(await db.execute(sql`SELECT * FROM settings WHERE id=1`)).rows[0],flashcards:(await db.execute(sql`SELECT * FROM flashcard`)).rows,reviews:(await db.execute(sql`SELECT * FROM review ORDER BY created_at`)).rows,lessons:(await db.execute(sql`SELECT * FROM lesson_completion`)).rows}})
