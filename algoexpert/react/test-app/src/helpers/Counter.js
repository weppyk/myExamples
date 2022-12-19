import { useState } from 'react';

//export default function Counter({startingCount = 0}) {
export default function Counter({count,setCount}) {
        //const [count, setCount] = useState(startingCount);
    const [otherCount, setOtherCount] = useState(5);
    //const [count, setCount] = useState({num: startingCount});
    //const [count, setCount] = useState([1,2,3]);
    //console.log(count);
    // setCount([...count, 4]);
    // console.log(count);


  // const [count, setCount] = useState(() => {
  //   return 0;
  // });
  // runs only once
  // const [count, setCount] = useState(() => complicatedFunction());
  // run each time component is rendered
  // const [count, setCount] = useState(complicatedFunction());

    
  return (
    <>
      <h2>State</h2>
      <button onClick={() => {
        //setCount({num: count.num + 1});
        setCount(count + 1);
        //setCount(prevCount => prevCount + 1);
        //setCount(prevCount => prevCount + 1);
        }}>
        Increment
      </button>
      <p>Count: {count}</p>

      <h2>State</h2>
      <button onClick={() => setOtherCount(otherCount + 1)}>
        Increment
      </button>
      <p>otherCount: {otherCount}</p>
    </>
  );
}

function complicatedFunction() {
    console.log('complicatedFunction');
    return 0;
}