import { useEffect, useState } from 'react';

import { sum } from 'assembly/release';

const App = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const result = sum(15, 23);
    setValue(result);
  }, []);

  return (
    <>
      <span>{value}</span>
    </>
  );
}

export default App;
