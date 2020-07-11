export function leastCommonMultipleNaive(a: number, b: number): number {
  let lcm = Math.min(a, b)
  while (lcm < a * b) {
    if (lcm % a === 0 && lcm % b === 0) {
      break
    }

    lcm = lcm + 1
  }

  return lcm
}

export function leastCommonMultiple(a: number, b: number): number {
  const minNum = Math.min(a, b)
  let minMultiple = 1
  let lcm = minNum
  while (lcm < a * b) {
    if (lcm % a === 0 && lcm % b === 0) {
      break
    }

    minMultiple = minMultiple + 1
    lcm = minNum * minMultiple
  }

  return lcm
}
