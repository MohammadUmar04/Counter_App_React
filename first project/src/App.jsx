import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [total, setTotal] = useState(5);

  useEffect(() => {
    console.log('Total count changed:', total);
    localStorage.setItem('totalCount', total);
  }, [total]); 
  const increase = () => {
    setTotal(total + 1);
  };

  const decrease = () => {
    setTotal(total - 1);
  };

  return (
    <>
      <h1>Counter: {total}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </>
  );
}

export default App;

