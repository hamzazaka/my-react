
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';


function App(props) {

  return (
    <div className='App'>
      <Navbar/>
      <div className="content">
        <Home/>
      </div>
    </div>
  )
}

export default App;
