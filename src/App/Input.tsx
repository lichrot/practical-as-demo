import { useId } from 'react';

export const Input: React.FC<{ label?: string; value: number; onChange: React.EventHandler<any> }> = ({
  label,
  value,
  onChange,
}) => {
  const id = useId();

  return (
    <label className='container flex flex-col justify-start items-center gap-1' htmlFor={id}>
      <span className='text-blue-50 font-bold'>
        {label || `Input ${id.replace(/\W/g, '').toUpperCase()}:`}
      </span>
      <input
        className='container font-mono p-2 rounded-sm outline-none'
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
