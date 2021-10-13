
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Create from './components/create';
import BlogDetails from './components/BlogDetails';
import Notfound from './components/Notfound';

function App(props) {

  return (
    <Router>
    <div className='App'>
      <Navbar/>
      <div className="content">
        <Switch>
        <Route exact path='/'>
         <Home/>
        </Route>
        <Route path='/create'>
         <Create/>
        </Route>
        <Route path='/blogs/:id'>
         <BlogDetails/>
        </Route>
        <Route path="*">
          <Notfound/>
        </Route>
        </Switch>
      </div>
    </div>
    </Router>
  )
}

export default App;
