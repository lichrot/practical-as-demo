import { useState } from 'react';

import { isNN } from 'shared/utils';
import { useFib } from 'shared/hooks';

import { Input } from './Input';
import { Link } from './Link';

const getResultColors = (result: string) => {
  if (isNN(result) || result === '0') return 'bg-red-500 shadow-red-900';
  return 'bg-green-500 shadow-green-900';
};

const App = () => {
  const [num, setNum] = useState<number>(0);
  const result = useFib(num);
  const isNonNum = isNN(result);

  return (
    <div className='font-sans flex flex-col justify-center gap-6 p-6 bg-slate-900 shadow-md shadow-black rounded-lg'>
      <span className='text-center text-white font-black text-xl w-full'>
        Practical WebAssembly Demo
      </span>
      <Input label='N-th Fibonacci:' value={num} onChange={(e) => setNum(e.target.value)} />
      <div
        className={`font-mono container text-white text-lg p-2 rounded-sm shadow-md flex flex-row flex-wrap justify-between gap-2 ${getResultColors(result)}`}
      >
        {isNonNum ? null : <span>Result:</span>}
        <span className={isNonNum ? 'break-words' : 'break-all'}>{result}</span>
      </div>
      <div className='flex flex-row flex-wrap justify-between items-center gap-3'>
        <Link href='https://www.assemblyscript.org'>{'< AssemblyScript >'}</Link>
        <Link href='https://github.com/yohgen/practical-as-demo'>{'< GitHub >'}</Link>
      </div>
    </div>
  );
};

export default App;
