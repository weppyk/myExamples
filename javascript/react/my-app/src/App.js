import logo from './logo.svg';
import './App.css';
import Helloworld from './Helloworld/Helloworld';
import Welcome from './Helloworld/Welcome';
import WelcomeClass from './Helloworld/WelcomeClass';
import Comment from './Comment/Comment';
import CommentExtract from './Comment/CommentExtract';

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/64/64'
    }
  };

function App() {
  return (
    <div className="App">
        <Helloworld />
        <Welcome name="Radek" />
        <Welcome name="Barbara" />
        <WelcomeClass name="Nina" />
        <Comment author={comment.author} text={comment.text} date={comment.date} />
        <CommentExtract author={comment.author} text={comment.text} date={comment.date} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        
    </div>
  );
}


export default App;
