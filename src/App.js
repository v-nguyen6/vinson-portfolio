import React from 'react';
//import stylesheet
//import './App.css';
//import all page components to be displayed through the App.js file
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
