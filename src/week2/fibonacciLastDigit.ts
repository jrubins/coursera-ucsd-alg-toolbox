/**
 * This function will not work for large numbers since adding the two large fibonacci numbers would
 * cause overflow.
 */
export function getFibonacciLastDigitNaive(n: number): number {
  if (n <= 1) {
    return n
  }

  let previous = 0
  let current = 1

  for (let i = 0; i < n - 1; ++i) {
    let tmpPrevious = previous
    previous = current
    current = tmpPrevious + current
  }

  return current % 10
}

/**
 * This is a fast version of the algorithm to get the last digit of the specified nth fibonacci number.
 * It only keeps track of the last digit of the previous two numbers.
 */
export function getFibonacciLastDigit(n: number): number {
  if (n <= 1) {
    return n
  }

  let oneBefore = 0
  let current = 1
  for (let i = 2; i <= n; i++) {
    let tmp = current
    current = (oneBefore + current) % 10
    oneBefore = tmp
  }

  return current
}

//console.log(getFibonacciLastDigit(3))
