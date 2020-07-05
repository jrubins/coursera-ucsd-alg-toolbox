export function fibonacciNaive(n: number): number {
  if (n <= 1) {
    return n
  }

  return fibonacciNaive(n - 1) + fibonacciNaive(n - 2)
}

export function fibonacciFast(n: number): number {
  if (n <= 1) {
    return n
  }

  let oneBefore = 0
  let current = 1
  for (let i = 2; i <= n; i++) {
    let tmp = current
    current = oneBefore + current
    oneBefore = tmp
  }

  return current
}
