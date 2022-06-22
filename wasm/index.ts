export function fib(num: u32): u64 {
  if (num === 0) return 0;
  if (num === 1) return 1;

  let prev: u64 = 0;
  let cur: u64 = 1;

  for (let idx: u32 = 2; idx <= num; idx++) {
    let sum: u64 = prev + cur;
    prev = cur;
    cur = sum;
  }

  return cur;
}
