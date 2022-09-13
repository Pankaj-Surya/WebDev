import './App.css';
import ComplexUseState from './components/ComplexUseState';
import UseReducerCounter from './components/UseReducerCounter';
import {Provider} from "react-redux";
import store from './redux/store';
import Bat from './components/Bat';
import Ball from './components/Ball';
function App() {
  return (

    // <div className="App">
    // <ComplexUseState></ComplexUseState>
    // <UseReducerCounter></UseReducerCounter>
    // </div>
  
    <Provider store={store}>
     <Bat></Bat>
     <Ball></Ball>
    </Provider>
  );
}

export default App;
