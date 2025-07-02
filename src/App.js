import './App.css';
import React,{useState} from 'react';
function App() {
  const [counter,setCounter]=useState(0);

  function containerClicked(){
    setCounter(counter+1);
  }
  
  return (
    <div className='main-container' onClick={containerClicked}>
      <button className='container-button'>Click Me</button>
      <p className='container-counter'>Number of times the container clicked : {counter}</p>
    </div>
  );
}

export default App;
