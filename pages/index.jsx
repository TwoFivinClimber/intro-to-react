import { useState } from 'react';
      
function MyButton({ counter, onClick }) {

  return (
    <button onClick={onClick}>
      Clicked {counter} times
    </button>
  );
}
export default function MyApp() {

  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  function handleClick () {
    setCount(count + 1);
  }

  function otherHandle () {
    setNumber(number + 1);
  }

  return(
    <div>
    <h1>Buttons That Count</h1>
    <MyButton counter={count} onClick={handleClick}/>
    <MyButton counter={count} onClick={handleClick}/>
    <MyButton counter={number} onClick={otherHandle}/>
    </div>
  );
}



    
