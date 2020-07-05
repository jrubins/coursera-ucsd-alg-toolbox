#include <iostream>
#include <cassert>

int fibonacci_naive(int n)
{
  if (n <= 1)
  {
    return n;
  }

  return fibonacci_naive(n - 1) + fibonacci_naive(n - 2);
}

int fibonacci_fast(int n)
{
  if (n <= 1)
  {
    return n;
  }

  int oneBefore = 1;
  int current = 1;
  for (int i = 2; i < n; i++)
  {
    int tmp = current;
    current = oneBefore + current;
    oneBefore = tmp;
  }

  return current;
}

void test_solution()
{
  assert(fibonacci_fast(3) == 2);
  assert(fibonacci_fast(10) == 55);

  for (int n = 0; n < 20; n++)
  {
    assert(fibonacci_fast(n) == fibonacci_naive(n));
  }
}

int main()
{
  /* int n = 0;
  std::cin >> n;
  std::cout << fibonacci_naive(n) << '\n';
  std::cout << fibonacci_fast(n) << '\n'; */

  test_solution();

  return 0;
}
