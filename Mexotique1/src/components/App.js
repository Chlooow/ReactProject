import React, { Component } from "react";
// import { useState } from "react";
import logo from '../assets/flag-400.png';
// import "../styles/RealCart.css";

/* Liste des composants réutilisables ici:*/
import Banner from "./Banner";
import CareScale from "./CareScale";
import Header from "./Header";
import RealCart from "./RealCart";
import ShoppingList from "./ShoppingList";

// logique de composition des composants ci-dessus, à afficher via App: 
class App extends Component {

  // 1. State specification: Un  objet JS
  state ={
    cartIsOpenned: false,
    itemsNumber: 0,
    Total: 0,
  };
  
  // 2. Behavioral specification: des fonctions fléchées, de préférence. 
    // NB: une fonction fléchée reproduit le "this" dans un composant, ce qui lui permet de parler au state.
  openCart = () => {
    this.setState({cartIsOpenned: this.state.cartIsOpenned= true});  
    /* NB: setState est indispensable pour forcer la mise à jour de l'affichage, suite à un changement du state
      Cette methode recoit un objet qui ne reprend que la partie (liste de propriétés) du state à modifier.
      Pour une propriété complexe tel qu'un tableau, il convient d'en faire d'abord une copie sur laquelle on applique les modifs.
      La modif direct du state ne permet pas à React de modifier l'affichage!
      */
    console.log(this.state);
  };
  closeCart = () => {                            
  this.setState({cartIsOpenned: this.state.cartIsOpenned= false}); 
  console.log(this.state);                        
  };

  // 3. Rendering specification: render(), la fonction d'affichage de composants React.
  render() {
    // Nous déclarons nos variables à utiliser dans le return, juste ici. 
    // Une variable peut contenir un element, voir un tableau d'elements JSX
    // L'interpolation JSX d'une {variable} permet son utilisation dans un composant react   
    const title ="Articles selectionés"; 
    const openningMsg ="Ouvrir le pannier"  
    const closingMsg ="Fermer le panier"     
                                                              
    return this.state.cartIsOpenned ? ( 
      // Cette méthode ne retourne qu'un seul élément JSX, qui peut contenir plusieurs autres éléments.
    <div>
      <div> 
        <Banner>
          <img src={logo} alt='Lmj' className='lmj-logo' />
        </Banner>  
        <Header />
      </div>
      <div className="lmj-cart"> 
        <h1> Panier </h1>                
        <button className = 'lmj-cart-toggle-button'  
          onClick= {this.closeCart}> {closingMsg} 
        </button>
        <h2>{title}</h2> 
        <RealCart/>
      </div>
    </div>
    ):     
    ( <div className="lmj-cart-closed">   
        <Banner>
          <img src={logo} alt='Lmj' className='lmj-logo' />
        </Banner>  
        <Header /> 
        <button className = 'lmj-cart-close-button' 
          onClick= {this.openCart}> {openningMsg} 
        </button>
        <li> Nombre d'articles: {this.state.itemsNumber} </li>
        <li> Total à payer: {this.state.Total} </li>          
        <ShoppingList/>
        <CareScale/>
      </div>
    ) 
  };
}

export default App;
