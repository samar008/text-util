
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert'
import About from './components/About';
// import About from './components/About.js'
import { Routes, Route } from "react-router-dom";


function App() {

  const [mode, setMode] = useState("light"); // tells whether dark mode is enabled or not

  const [btnText, setBtnText] = useState("Enable Dark Mode")

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleDark = () => {
    if (mode === 'dark') {
      setMode('light')
      setBtnText("Enable Dark Mode")
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode enabled', 'success')

    }
    else {
      setMode('dark')
      setBtnText("Disable Dark Mode")
      document.body.style.backgroundColor = document.getElementById('modeColor').value;
      showAlert('Dark Mode enabled', 'success')
      if (btnText === 'Disable Dark Mode') {
        document.getElementById('modeColor').value = '#ffffff';
      }
    }
  }
  return (
    <>
      <Navbar title="Text Utility" aboutText="About Us" mode={mode} toggleMode={toggleDark} buttonText={btnText} />
      <Alert alert={alert} />
      {/* <TextForm showAlert={showAlert} mode={mode} heading="Text Area" />
      <About mode={mode}/> */}

      <Routes>
        <Route path="/" element={<TextForm showAlert={showAlert} mode={mode} heading="Text Area" />} />
        <Route path="about" element={<About mode={mode} />} />
      </Routes>
    </>
  );
}

export default App;
