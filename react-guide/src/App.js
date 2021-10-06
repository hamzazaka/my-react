
import './App.css';
import Hello from './components/hello';
import Greeting from './components/Greeting';
function App(props) {
  return (
    <div className="App">
      <div>
        <div>
          hello world jkhjhgkj
          <Hello/>
          <Greeting name={'hamza'} age={'22'}/>
        </div>
      </div>
    </div>
  );
}

export default App;
