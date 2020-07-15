import React, { useState, useCallback } from 'react';
import Count from './components/Count';
import Button from './components/Button';
import './App.css'
const App = () => {
  const [number, setNumber] = useState(0);
  const handleIncrement = useCallback(() => {
    setNumber(number + 1);
  }, [number]);

  const handleDecrement = useCallback(() => {
    if (number > 0) {
      setNumber(number - 1);
    } else {
      return true;
    }
  }, [number])
  return (
    <div className="App">
      <Count count={number}></Count>
      <Button onClick={handleIncrement}>Adicionar</Button>
      <Button onClick={handleDecrement}>Decrementar</Button>
    </div>
  );
}

export default App;
