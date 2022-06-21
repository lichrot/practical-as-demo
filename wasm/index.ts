export function fib(n: i64): i64 {
  let a = 0;
  let b = 1;

  if (n === 0) return a;
  
  while (--n) {
    let sum = a + b;
    a = b;
    b = sum;
  }

  return b;
}
