import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from "./components/Profile"
import PageNotFound from './components/PageNotFound';
import Home from './components/Home';
import Forgot from './components/Forgot';

import './Style/signup.css'
import './Style/login.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Style/feed.css'

function App() {
  return (
    <div className="App">
      <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
          <Route path="/forgot">
            <Forgot></Forgot>
          </Route>
          <Route path="/profile">
            <Profile></Profile>
          </Route>
          <Route path="/" exact>
             <Home></Home>
          </Route>
          <Redirect from="/home" to="/"></Redirect>
          <Route>
            <PageNotFound></PageNotFound>
          </Route>
      </Switch>
          
    </div>
  );
}

export default App;
