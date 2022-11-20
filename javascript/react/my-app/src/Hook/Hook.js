import React, { useState } from 'react';

// TODO: see https://codesandbox.io/s/rakeshshrestha-forked-cw1800?file=/src/App.js
// https://stackoverflow.com/questions/70122158/javascript-click-event-listener-with-react-function
// nebo https://bobbyhadz.com/blog/react-functional-component-add-event-listener



export default function Hook() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const afterClick = () => {
    alert("afterClick");
    }
    //document.getElementById("clickable")
    window.addEventListener("click", afterClick);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>
        Click me
      </button>
      <button id='clickable'>click</button>
        <p id="demo"></p>
    </div>
  );
}


