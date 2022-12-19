// import logo from './logo.svg';
import React from 'react';
import './App.css';

//composant banner
import Banner from './Components/Banner';
//composant Footer
import Footer from './Components/Footer';
//composant AlimentItem
import AlimentItem from './Components/AlimentItem';
//composent ShoppingList
import ShoppingList from './Components/ShoppingList';
import Cart from './Components/Cart';

// composant principal (parent)

function App() {
  return (
    <div className="App">
      <Banner/>
      <ShoppingList/>
      <Cart/>
      <AlimentItem/>
      <Footer/>

      React viendra ici
    </div>
  );
}

export default App;
