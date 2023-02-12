import React, { Component } from 'react';
import NavBar from './components/NavBar';
import NewsComponent from './components/NewsComponent';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<NewsComponent key="general" category="general"/>}/>
            <Route exact path="/business" element={<NewsComponent key="business" category="business"/>}/>
            <Route exact path="/entertainment" element={<NewsComponent key="entertainment" category="entertainment"/>}/>
            <Route exact path="/health" element={<NewsComponent key="health" category="health"/>}/>
            <Route exact path="/science" element={<NewsComponent key="science" category="science"/>}/>
            <Route exact path="/sports" element={<NewsComponent key="sports" category="sports"/>}/>
            <Route exact path="/technology" element={<NewsComponent key="technology" category="technology"/>}/>
          </Routes>
        
        </Router>
        

      </>
    );
  }
}

