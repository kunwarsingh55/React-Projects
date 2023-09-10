// Import CSS file for styling
import "./App.css";

// Import Components
import Navbar from "./components/Navbar";
import TextArea from "./components/Textarea";
import About from "./components/About";
import Alert from "./components/Alert";


import { useState } from "react";  // Using useState Hook for state management
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"; // Import React Router components

import React from "react";

function App() {
  // State to manage the theme mode (light or dark)
  const [themeMode, setMode] = useState("light");

  // Function to toggle between light and dark themes
  const changeTheme = () => {
    if (themeMode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark Mode Enabled.");
    } else if (themeMode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode Enabled");
    }
  };

  // State to manage alerts
  const [alertMsg, setAlert] = useState(null);

  // Function to show an alert message
  const showAlert = (message) => {
    setAlert(message);
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <div>
      <Router>
        {/* Render the Navbar component with title, mode, and theme change function */}
        <Navbar title="TextUtils" mode={themeMode} themefun={changeTheme} />
        {/* Render the Alert component with alert message */}
        <Alert message={alertMsg} />
        <Routes>
          {/* Define a route for the home page */}
          <Route
            exact
            path="/"
            element={
              <TextArea
                title="Enter the text to process."
                mode={themeMode}
                alertFun={showAlert}
              />
            }
          />
          {/* Define a route for the about page */}
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
