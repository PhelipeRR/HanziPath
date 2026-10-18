import db from '../utils/db'
export default defineEventHandler(() => db.prepare('SELECT * FROM progress WHERE id=1').get())
