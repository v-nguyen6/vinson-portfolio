import React from 'react';
//import stylesheet
import './App.css';
//import all page components to be displayed through the App.js file
import Header from './components/Header/Header';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';



function App() {
  return (
    <div className="App">
      
      <Header />
      <About />
      <Services />
      <Contact />
      
    </div>
  );
  
}

export default App;
