import Database from 'better-sqlite3'
import { join } from 'node:path'
import { mkdirSync } from 'node:fs'

const dataDir = join(process.cwd(), 'data')
mkdirSync(dataDir, { recursive: true })
const db = new Database(process.env.DATABASE_URL?.replace('./', '') || join(dataDir, 'hanzipath.sqlite'))
db.pragma('journal_mode = WAL')
db.exec(`CREATE TABLE IF NOT EXISTS progress (id INTEGER PRIMARY KEY CHECK (id = 1), minutes_today INTEGER NOT NULL DEFAULT 0, streak INTEGER NOT NULL DEFAULT 0, learned INTEGER NOT NULL DEFAULT 0, mastered INTEGER NOT NULL DEFAULT 0, completed_lessons INTEGER NOT NULL DEFAULT 0, updated_at TEXT NOT NULL); CREATE TABLE IF NOT EXISTS lesson_completion (lesson_id INTEGER PRIMARY KEY, completed_at TEXT NOT NULL); CREATE TABLE IF NOT EXISTS review (id INTEGER PRIMARY KEY AUTOINCREMENT, card TEXT NOT NULL, rating TEXT NOT NULL, interval_days INTEGER NOT NULL, next_review TEXT NOT NULL, created_at TEXT NOT NULL);`)
db.prepare(`INSERT OR IGNORE INTO progress (id, updated_at) VALUES (1, ?)`).run(new Date().toISOString())
export default db
