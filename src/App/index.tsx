import { useEffect, useState, useId } from 'react';

import { fib } from 'wasm/release';

const isNN = (value: any) => isNaN(value) || value === null;

const Input: React.FC<{ value: number, onChange: React.EventHandler<any> }> = ({ value, onChange }) => {
  const id = useId();

  return (
    <label className='flex flex-col justify-start items-center gap-3' htmlFor={id}>
      <span className='text-blue-50'>N-th Fibonacci</span>
      <input
        className='p-1 rounded-sm outline-none'
        type='number'
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        min={0}
        max={Number.MAX_SAFE_INTEGER}
        step={1}
      />
    </label>
  );
};

const App = () => {
  const [num, setNum] = useState<any>(0);
  const [result, setResult] = useState<any>(0);

  useEffect(() => {
    if (isNN(num)) return;

    const res = fib(BigInt(num));
    setResult(res);
  }, [num]);

  return (
    <div className='flex flex-col justify-center gap-6 p-6 bg-slate-900 shadow-md shadow-black rounded-lg'>
      <div className='container flex justify-center items-center gap-3'>
        <Input value={num} onChange={(e) => setNum(e.target.value)} />
      </div>
      <div className='container flex justify-center items-center'>
        <span className={`text-white text-lg p-2 rounded-sm shadow-md ${result > 0 ? 'bg-green-500 shadow-green-900' : 'bg-red-500 shadow-red-900'}`}>
          {`Result: ${result}`}
        </span>
      </div>
    </div>
  );
}

export default App;
