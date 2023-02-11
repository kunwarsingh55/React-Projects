
import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/Textarea';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import React from 'react'

function App() {
  const [themeMode, setMode] = useState('light');
  const changeTheme = () => {
    if (themeMode === "light") {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert("Dark Mode Enabled.")


    }
    else if (themeMode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode Enabled");
    }
  }

  const [alertMsg, setAlert] = useState(null);

  const showAlert = (message) => {
    setAlert(message);
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  return (
    <div>
      <Router>
        <Navbar title="TextUtils" mode={themeMode} themefun={changeTheme} />
        <Alert message={alertMsg} />
        <Routes>
          <Route exact path="/" element={<TextArea title="Enter the text to process." mode={themeMode} alertFun={showAlert} />} />
          <Route exact path="/about" element={<About />} />  
        </Routes>
      </Router>
    </div>

  );
}

export default App;
