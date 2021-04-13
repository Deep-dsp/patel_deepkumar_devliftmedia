import logo from './logo.svg';
import './App.scss';
// import components
import Navbar from './components/navbar';
import Herosection from './components/herocontent.js';
import Clientthumb from './components/clientThumb.js';
import Jobboard from './components/jobboard.js';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Herosection/>
      <Clientthumb/>
      <Jobboard/>
    </div>
  );
}

export default App;
