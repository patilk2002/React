import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
let name="Kiran";
function App() {
  return (
    <>
    <Navbar title="Kiran"/>
    <div className="container my-3" >
    <TextForm headding="Enter Details"/>
    </div>
    </>
  );
}

export default App;
