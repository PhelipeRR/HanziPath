import { db, ensureSchema } from '../utils/db'
import { sql } from 'drizzle-orm'
export default defineEventHandler(async () => { await ensureSchema(); return (await db.execute(sql`SELECT * FROM progress WHERE id=1`)).rows[0] })
