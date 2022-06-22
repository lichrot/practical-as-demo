import { u256 } from 'as-bignum/assembly';

export function fib(num: u16): string {
  if (num === 0) return '0';
  if (num === 1) return '1';
  if (num > 370) return "Can't compute";

  let prev = u256.Zero;
  let cur = u256.One;

  for (let idx: u16 = 2; idx <= num; idx++) {
    const sum = u256.add(prev, cur);
    prev = cur;
    cur = sum;
  }

  return cur.toString(10);
}
