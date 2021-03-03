import React from 'react';
import Header from '../Header/Header';
import Work from '../Works/Work';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';


function Home() {
    return (
        <div className="home-page">
          <Header />
          <Work />
          <Contact />
          <Footer />
        </div>
      );
}

export default Home