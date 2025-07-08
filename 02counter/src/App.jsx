import { useState } from 'react'
import './App.css'

function App() {
  
  // let counter = 0 This will not update the counter variable that is flushed in h1 and h2, to resolve this we take use of hooks

  const [counter, setCounter] = useState(0) // counter - variable, setCounter - function. Inside useState(here), we define the initial value. above we have taken 0
  
  const addValue = () => {
    // It does not matter, how many time we call this function as it takes only setCounter useState 1 time whose job is to just increment the counter variable by 1.  

    setCounter(counter + 1);
    
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    // Things will change when we will pass a callback function in setCounter(callback), it will execute the times the code is written

    // setCounter((prevCounter) => {
    //   return prevCounter+1;
    // })
    // setCounter((prevCounter) => {
    //   return prevCounter+1;
    // })
    // setCounter((prevCounter) => {
    //   return prevCounter+1;
    // })
    // setCounter((prevCounter) => {
    //   return prevCounter+1;
    // })

    // In above it will incement with 4 times
    
  }
  const removeValue = () => {
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>React course with hitesh</h1>
      <h2>Counter value : {counter}</h2>
      <button
      onClick={addValue}
      >Add Value</button> {" "}
      <button
      onClick={removeValue}
      >Remove Value</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App;
