import './App.css';
import Home from './components/Home';
import Comment from './components/Comment';


function App(props) {
  
  return (
    <div className="App">
      <Home title={'Javascript book'} author={'hamza zaka'} comment={Comment}/>
      <Home title={'Mango book'} author={'hamza ksjfhdksjfh'} />
    </div>
  );
}

export default App;
