import {
  greatestCommonDivisor,
  greatestCommonDivisorNaive,
} from '../greatestCommonDivisor'

test('the naive solution has the correct results', () => {
  expect(greatestCommonDivisorNaive(6, 8)).toBe(2)
  expect(greatestCommonDivisorNaive(18, 35)).toBe(1)
  expect(greatestCommonDivisorNaive(217, 1344)).toBe(7)
  expect(greatestCommonDivisorNaive(28851538, 1183019)).toBe(17657)
})

test('the fast solution has the correct results', () => {
  expect(greatestCommonDivisor(6, 8)).toBe(2)
  expect(greatestCommonDivisor(18, 35)).toBe(1)
  expect(greatestCommonDivisor(217, 1344)).toBe(7)
  expect(greatestCommonDivisor(28851538, 1183019)).toBe(17657)
})

test('the fast and naive solutions agree', () => {
  for (let a = 1000, b = 800; a >= 2 && b >= 1; a--, b--) {
    expect(greatestCommonDivisor(a, b)).toEqual(
      greatestCommonDivisorNaive(a, b)
    )
  }
})
