import { db, ensureSchema } from '../utils/db'
import { sql } from 'drizzle-orm'
import { z } from 'zod'
const schema=z.object({displayName:z.string().min(1).max(80),dailyMinutes:z.number().int().min(5).max(240),dailyNewCharacters:z.number().int().min(1).max(50),maxReviews:z.number().int().min(1).max(200),showPinyin:z.boolean(),theme:z.enum(['system','light','dark'])})
export default defineEventHandler(async(event)=>{await ensureSchema();const v=schema.parse(await readBody(event));await db.execute(sql`UPDATE settings SET display_name=${v.displayName},daily_minutes=${v.dailyMinutes},daily_new_characters=${v.dailyNewCharacters},max_reviews=${v.maxReviews},show_pinyin=${v.showPinyin},theme=${v.theme},updated_at=NOW() WHERE id=1`);return v})
