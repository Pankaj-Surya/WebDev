
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Movies from './components/Movies';
import Pagination from './components/Pagination';
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <Movies></Movies>
      <Pagination></Pagination>
    </div>
  );
}

export default App;
