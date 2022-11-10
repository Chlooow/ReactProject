// import logo from './logo.svg';
import React from 'react';
import './App.css';

//composant banner
import Banner from './Components/Banner';
//composant Footer
import Footer from './Components/Footer';

// composant principal (parent)

function App() {
  return (
    <div className="App">
      <Banner/>
      <Footer/>
      React viendra ici
    </div>
  );
}

export default App;
