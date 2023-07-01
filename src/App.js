import './App.css';
import React,{useState} from 'react';
function App() {
  const [count,setCount]=useState(0);
  const decrement=()=>{
    setCount(count-1);
  }
  const increment=()=>{
    setCount(count+1);
  }
  return (
    <div className="App">
      <div className='counter'>
      <h3>Counter</h3>
      <button onClick={decrement} className='decrement'>-</button>
      <span>{count}</span>
      <button onClick={increment} className='increment'>+</button>
      </div>
    </div>
  );
}

export default App;
