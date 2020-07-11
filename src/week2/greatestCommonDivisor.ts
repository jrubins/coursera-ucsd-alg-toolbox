/**
 * This is a naive solution for calculating the GCD of two numbers. It is naive since it
 * just decrements the GCD in each check and ends up doing many more checks than necessary.
 */
export function greatestCommonDivisorNaive(a: number, b: number): number {
  let gcd = Math.min(a, b)
  do {
    if (a % gcd === 0 && b % gcd === 0) {
      break
    }

    gcd = gcd - 1
  } while (gcd > 1)

  return gcd
}

/**
 * Implements the Euclidean algorithm for computing the GCD.
 *
 *  GCD(1344, 217)
 *  = GCD(217, 42)
 *  = GCD(42, 7)
 *  = GCD(7, 0)
 *  = 7
 */
export function greatestCommonDivisor(a: number, b: number): number {
  let current = Math.max(a, b)
  let gcd = Math.min(a, b)
  do {
    if (current % gcd === 0) {
      break
    }

    const tmp = gcd
    gcd = current % gcd
    current = tmp
  } while (gcd > 1)

  return gcd
}
