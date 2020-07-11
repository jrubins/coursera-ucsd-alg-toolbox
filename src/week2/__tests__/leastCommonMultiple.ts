import {
  leastCommonMultiple,
  leastCommonMultipleNaive,
} from '../leastCommonMultiple'

test('the naive solution has the correct results', () => {
  expect(leastCommonMultipleNaive(6, 8)).toBe(24)
})

test('the fast solution has the correct results', () => {
  expect(leastCommonMultiple(6, 8)).toBe(24)
  expect(leastCommonMultiple(614573, 761457)).toBe(467970912861)
})

test('the fast and naive solutions agree', () => {
  for (let a = 1000, b = 800; a >= 2 && b >= 1; a--, b--) {
    expect(leastCommonMultipleNaive(a, b)).toEqual(leastCommonMultiple(a, b))
  }
})
