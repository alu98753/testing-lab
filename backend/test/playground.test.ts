import { describe, test, expect, it } from 'vitest'
import { myCustomAdd, fabonacci } from '../src/utils/math'
import { fail } from 'assert'

function add(a: number, b: number) {
  return a + b
}
function fib(n: number): number {
  if (n <= 1) return n
  return fib(n - 1) + fib(n - 2)
}
describe('my testing playground', () => {
  test('it works', () => {
    const expected = true
    const actual = false
    expect(actual).toBe(false)
  })

  describe('add function testing', () => {
    it('should return 3 when add 1 and 2', () => {
      expect(myCustomAdd(1, 2)).toBe(3)
    })
    it('should return 5 when add 2 and 3', () => {
      // TODO: fix the test
      expect(add(2, 3)).toBe(5)
    })
  })

  describe('fabonacci testing', () => {
    it('should return 1 when n is 1', () => {
      expect(fabonacci(1)).toBe(1)
    })
    it('should return 1 when n is 2', () => {
      // TODO: fix the test
      expect(fib(2)).toBe(1)
    })
    it('should return 2 when n is 3', () => {
      // TODO: fix the test
      expect(fib(3)).toBe(2)
    })
  })
})
