import logo from './logo.svg';
import './App.scss';
// import components
import Navbar from './components/navbar';
import Herosection from './components/herocontent.js';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Herosection/>
    </div>
  );
}

export default App;
