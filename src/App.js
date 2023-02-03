import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(4);
  const [square, setSquare] = useState(0);

  useEffect(() => {
    setSquare(()=>count*count);
  },[count]);

  return (
    <div className="App">
      <p>Number: {count}</p>
      <p>Square: {square}</p>
      <button onClick={() => setCount((c) => c+1)}>Square</button>
    </div>
  );
}

export default App;