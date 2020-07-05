import {
  getFibonacciLastDigit,
  getFibonacciLastDigitNaive,
} from '../fibonacciLastDigit'

test('the fast solution has the correct results', () => {
  expect(getFibonacciLastDigit(3)).toEqual(2)
  expect(getFibonacciLastDigit(331)).toEqual(9)
  expect(getFibonacciLastDigit(327305)).toEqual(5)

  for (let n = 0; n < 20; n++) {
    expect(getFibonacciLastDigit(n)).toEqual(getFibonacciLastDigitNaive(n))
  }
})
