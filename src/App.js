import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Work from './components/Works/Work';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="App">
      
      <Header />
      <Work />
      <Contact />
      <Footer />
      
    </div>
  );
  
}

export default App;
