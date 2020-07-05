import { fibonacciFast, fibonacciNaive } from '../fibonacci'

test('the fast solution has the correct results', () => {
  expect(fibonacciFast(3)).toEqual(2)
  expect(fibonacciFast(10)).toEqual(55)
  for (let n = 0; n < 20; n++) {
    expect(fibonacciFast(n)).toEqual(fibonacciNaive(n))
  }
})
