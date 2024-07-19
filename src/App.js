
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'

function App() {
  const [mode, setMode] = useState('light');
  const [btnText, setBtnText] = useState('Dark');
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type) => {
    setAlert({
      mes: message,
      ty: type
    });
    setTimeout(() => {
      setAlert(null)
    },1.5*1000);
  }
  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      setBtnText('Light');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert("Dark mode Eneble","primary");
    } else {
      setMode('light');
      setBtnText('Dark');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode Eneble","success");
    }
  }
  return (
    <div>
      <Navbar title="TextUtilS" aboutTitle="About Text" mode={mode} toggleMode={toggleMode} btnText={btnText}/>
      <Alert alert={alert}/>
      <div className="container my-2">
        <TextForm heading="Enter Your Text" mode={mode} showAlert={showAlert}/>
        {<About mode={mode}/>}
      </div>
    </div>
  );
}

export default App; 