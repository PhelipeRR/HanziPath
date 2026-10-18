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
  await db.execute(sql`CREATE TABLE IF NOT EXISTS flashcard (card VARCHAR(20) PRIMARY KEY, pinyin VARCHAR(40) NOT NULL, meaning VARCHAR(120) NOT NULL, repetitions INTEGER NOT NULL DEFAULT 0, ease REAL NOT NULL DEFAULT 2.5, interval_days INTEGER NOT NULL DEFAULT 0, next_review TIMESTAMPTZ NOT NULL DEFAULT NOW(), mastered BOOLEAN NOT NULL DEFAULT FALSE)`)
  await db.execute(sql`CREATE TABLE IF NOT EXISTS settings (id INTEGER PRIMARY KEY CHECK (id=1), display_name VARCHAR(80) NOT NULL DEFAULT 'Phelipe', daily_minutes INTEGER NOT NULL DEFAULT 30, daily_new_characters INTEGER NOT NULL DEFAULT 5, max_reviews INTEGER NOT NULL DEFAULT 20, show_pinyin BOOLEAN NOT NULL DEFAULT TRUE, theme VARCHAR(20) NOT NULL DEFAULT 'system', updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW())`)
  await db.execute(sql`INSERT INTO progress (id) VALUES (1) ON CONFLICT (id) DO NOTHING`)
  await db.execute(sql`INSERT INTO settings (id) VALUES (1) ON CONFLICT (id) DO NOTHING`)
  await db.execute(sql`INSERT INTO flashcard (card,pinyin,meaning) VALUES ('你','nǐ','você'),('好','hǎo','bom; bem'),('我','wǒ','eu; mim') ON CONFLICT (card) DO NOTHING`)
  initialized = true
}
