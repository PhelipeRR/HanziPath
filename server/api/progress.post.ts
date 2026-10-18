import db from '../utils/db'
import { z } from 'zod'
const schema = z.object({ minutes: z.number().int().min(0).max(1440).optional(), learned: z.number().int().min(0).optional(), mastered: z.number().int().min(0).optional() })
export default defineEventHandler(async (event) => { const input = schema.parse(await readBody(event)); const current = db.prepare('SELECT * FROM progress WHERE id=1').get() as any; const next = { minutes: input.minutes ?? current.minutes_today, learned: input.learned ?? current.learned, mastered: input.mastered ?? current.mastered }; db.prepare('UPDATE progress SET minutes_today=?, learned=?, mastered=?, updated_at=? WHERE id=1').run(next.minutes, next.learned, next.mastered, new Date().toISOString()); return db.prepare('SELECT * FROM progress WHERE id=1').get() })
