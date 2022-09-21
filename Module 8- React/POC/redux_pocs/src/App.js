import './App.css';
import ComplexUseState from './components/ComplexUseState';
import UseReducerCounter from './components/UseReducerCounter';
import {Provider} from "react-redux";
import store from './redux/store';
import Bat from './components/Bat';
import Ball from './components/Ball';
import User from './components/User';
function App() {
  return (

    // <div className="App">
    // <ComplexUseState></ComplexUseState>
    // <UseReducerCounter></UseReducerCounter>
    // </div>
  
    <Provider store={store}>
      {/* <br />
     <Bat></Bat>
     <br />
     <Ball></Ball>
     <br />
     <br /> */}
     <User></User>
    </Provider>

   
  );
}

export default App;
