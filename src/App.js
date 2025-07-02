import './App.css';
import React,{useState} from 'react';
function App() {
  
  const [counter,setCounter]=useState(0);
  const [backColor,setBackColor]=useState('#ffffff');

  function getRandomColor(){
    let num1=Math.floor(Math.random() * 256);
    let num2=Math.floor(Math.random() * 256);
    let num3=Math.floor(Math.random() * 256);
    return `rgb(${num1},${num2},${num3})`;
  }


  function changeColor(e){
    e.stopPropagation();
    setBackColor(getRandomColor());
  }
  function updateCounter(){
    setCounter(counter+1);
    
  }

  return (
    <div className='main-container' onClick={updateCounter} style={{backgroundColor:backColor}}>
      <button className='container-button' onClick={changeColor}>Click Me</button>
      <p className='container-counter'>Number of times the container clicked : {counter}</p>
    </div>
  );
}

export default App;
