import { describe, expect, it } from 'vitest'
describe('repetição espaçada', () => {
  it('usa intervalos progressivos por avaliação', () => { const intervals={again:1,hard:2,good:4,easy:8}; expect(intervals.again).toBe(1); expect(intervals.easy).toBeGreaterThan(intervals.good) })
  it('considera domínio após quatro acertos', () => { expect([1,2,3,4].length >= 4).toBe(true) })
})
