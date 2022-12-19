import './App.css';
import { useState } from 'react';

import Comment from './helpers/Comment';
import EventDrivenProgramming from './helpers/EventDrivenProgramming';
import State from './helpers/State';
import SharingStateCounter from './helpers/SharingStateCounter';
import MyInput from './helpers/MyInput';
import MyOutput from './helpers/MyOutput';
import MyInput2 from './helpers/MyInput2';

export default function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');
  return (
    <>
      <h1>Change value different components</h1>
      <MyInput value={value} setValue={setValue} />
      <MyOutput value={value} />
      <MyInput2 value={value} setValue={setValue} />
      
      <h1>Other using of state</h1>
      <Comment username="Conner" time={(new Date()).toString()}>
        <h1>Hello world</h1>
        <p>This is a comment</p>
      </Comment>
      <EventDrivenProgramming />
      <State />
      <SharingStateCounter count={count} setCount={setCount} /> 
      <SharingStateCounter count={count} setCount={setCount} />

      
    </>
  );
  /******* Fragment ********
  const name = 'Radek';
  return (
    <>
        <h1>Hello <br />{name.toUpperCase()}</h1>
        <p>Test</p>
    </>
  );
  /************************/
  /******* Conditional Rendering ********
  const error = true;
  if (error) {
    return <h1>Error...</h1>;
  }
  return <h1>No error</h1>;
  /**************************************/
  /******* Conditional Rendering ternary ********
  const error = true;
  return error ? <h1>Error...</h1> : <h1>No error</h1>;
  /*********************************************/
  /******* Conditional Rendering ternary fragment ********
  const error = false;
  return (
    <>
      {/*error ? <h1>Error...</h1> : null}
       {!error ? <h1>No error</h1> : null}
       or *}
      {error && <h1>Error...</h1>}
      {error || <h1>No error</h1>}
    </>
  );
  /******************************************************/
  /******* Conditional Rendering simple ********
  const error = false;
  return <h1>{error ? 'Error' : 'Success'}</h1>
  /********************************************/
  /****************** Props *********************
  const type = 'text';
  const props = {
      id: 'input',
      type: 'text',
      maxLength: 3
    };
  return (
    <>
      <label htmlFor="input">Input: </label>
      <input id="input" type={type} maxLength="3" />
      <input {...props} placeholder="user"/>
    </>
  );
  /*********************************************/
  /****************** Paragraph *********************
  return <p style={{
    color: 'red',
    textAlign: 'center',
    fontSize: '2rem'
  }} className="center">Hello World</p>
  /*************************************************/
  /****************** Props *********************
  return (
    <>
      <Hello name="Conner" />
      <Hello />
    </>
    );
  /*********************************************/
}


/****************** Props *********************
//function Hello(props) {
//  return <h1>Hello {props.name}</h1>
//}
function Hello({name = 'User'}) {
  return <h1>Hello {name}</h1>
}

// function Hello({ name }) {
//   return <h1>Hello {name}</h1>
// }
// Hello.defaultProps = {
//   name: 'User'
// }
/*********************************************/
