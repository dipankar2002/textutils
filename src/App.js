
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  let myStyle = {
    color: 'white',
    backgroundColor: 'black'
  }
  return (
    <div style={myStyle}>
      <Navbar title="TextUtilS" aboutTitle="About Text"/>
      <div className="container my-2">
        <TextForm heading="Enter Your Text"/>
        {<About/>}
      </div>
    </div>
  );
}

export default App; 