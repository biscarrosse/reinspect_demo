import React from 'react';
import { useState as useReinspectState } from 'reinspect';

const App = ({ id }) => {
  const [count, setCount] = useReinspectState(0, id);

  return (
    <>
      <div>App is here!</div>
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        {count} <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </>
  );
};

export default App;
