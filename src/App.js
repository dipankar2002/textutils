
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'

function App() {
  const [mode, setMode] = useState('light');
  const [btnText, setBtnText] = useState('Light');
  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }
  return (
    <div>
      <Navbar title="TextUtilS" aboutTitle="About Text" mode={mode} toggleMode={toggleMode} btnText={btnText}/>
      <div className="container my-2">
        <TextForm heading="Enter Your Text" mode={mode}/>
        {<About mode={mode}/>}
      </div>
    </div>
  );
}

export default App; 