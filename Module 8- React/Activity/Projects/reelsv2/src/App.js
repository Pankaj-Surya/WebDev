import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from "./components/Profile"
import PageNotFound from './components/PageNotFound';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <h1>Reels</h1>
      <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
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
