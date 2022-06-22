import { useMemo } from 'react';

import { fib } from 'wasm';
import { isNN } from 'shared/utils';

const MAX_COMPUTABLE_FIB_NUM = 370;
const ERR_INVALID = 'Invalid integer';
const ERR_INCOMPUTABLE = "Can't compute. If you've found u512 AssemblyScript implementation, holler at me";

export const useFib = (num: number) => {
  const result = useMemo(() => {
    if (isNN(num)) return ERR_INVALID;
    if (num > MAX_COMPUTABLE_FIB_NUM) return ERR_INCOMPUTABLE;
    return fib(num);
  }, [num]);

  return result;
};
