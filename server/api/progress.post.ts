import { db, ensureSchema } from '../utils/db'
import { sql } from 'drizzle-orm'
import { z } from 'zod'
const schema = z.object({ minutes: z.number().int().min(0).max(1440).optional(), learned: z.number().int().min(0).optional(), mastered: z.number().int().min(0).optional() })
export default defineEventHandler(async (event) => { await ensureSchema(); const input = schema.parse(await readBody(event)); const current = (await db.execute(sql`SELECT * FROM progress WHERE id=1`)).rows[0] as any; await db.execute(sql`UPDATE progress SET minutes_today=${input.minutes ?? current.minutes_today}, learned=${input.learned ?? current.learned}, mastered=${input.mastered ?? current.mastered}, updated_at=NOW() WHERE id=1`); return (await db.execute(sql`SELECT * FROM progress WHERE id=1`)).rows[0] })
