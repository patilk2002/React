import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
let name="Kiran";
function App() {
  return (
    <>
    <Navbar title="Kiran"/>
    <div className="container my-3" >
    <About></About>
    </div>
    </>
  );
}

export default App;
