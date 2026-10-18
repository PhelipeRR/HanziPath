import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'
import { sql } from 'drizzle-orm'

export const db = drizzle(neon(process.env.DATABASE_URL || 'postgresql://missing:missing@localhost/missing'))
let initialized = false
export async function ensureSchema() {
  if (!process.env.DATABASE_URL) throw createError({ statusCode: 503, statusMessage: 'DATABASE_URL não configurada no ambiente.' })
  if (initialized) return
  await db.execute(sql`CREATE TABLE IF NOT EXISTS progress (id INTEGER PRIMARY KEY, minutes_today INTEGER NOT NULL DEFAULT 0, streak INTEGER NOT NULL DEFAULT 0, learned INTEGER NOT NULL DEFAULT 0, mastered INTEGER NOT NULL DEFAULT 0, completed_lessons INTEGER NOT NULL DEFAULT 0, updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW())`)
  await db.execute(sql`CREATE TABLE IF NOT EXISTS lesson_completion (lesson_id INTEGER PRIMARY KEY, completed_at TIMESTAMPTZ NOT NULL DEFAULT NOW())`)
  await db.execute(sql`CREATE TABLE IF NOT EXISTS review (id SERIAL PRIMARY KEY, card VARCHAR(20) NOT NULL, rating VARCHAR(10) NOT NULL, interval_days INTEGER NOT NULL, next_review TIMESTAMPTZ NOT NULL, created_at TIMESTAMPTZ NOT NULL DEFAULT NOW())`)
  await db.execute(sql`INSERT INTO progress (id) VALUES (1) ON CONFLICT (id) DO NOTHING`)
  initialized = true
}
