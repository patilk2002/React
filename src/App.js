import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react'

// let name="Kiran";
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  // const [alert, setAlert] = useState(null);
  
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      // showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
    <Navbar title="Kiran" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3" >
    <TextForm  heading="Enter Text Below" mode={mode}/>
    </div>

    <div className="container my-3" >
    <About></About>
    </div>
    </>
  );
}

export default App;
