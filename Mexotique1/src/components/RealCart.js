import React, { Component } from "react";
import Cart from "./Cart"
import "../styles/Cart.css";

class RealCart extends Component {
// Tip: Nous créons une classe pour un composant statefull et une fonction (composant fonctionnel) pour un stateless.
// 1. State specification: Un  objet JS 
    state ={
        items: [
          { id:1663780281254, name:"Chikwangue", price:2, quantity:0},
          { id:1663780444188, name:"Tamgawisi", price:4, quantity:0},
          { id:1663780450103, name:"Ngaingai", price:2, quantity:0},
          { id:1663780452641, name:"BananePlan", price:3, quantity:0},
          { id:1663780457512, name:"PalmOil", price:4, quantity:0},
          { id:1663780460564, name:"Manga", price:2, quantity:0},
          { id:1663780460564, name:"Iniyam", price:6, quantity:0},
          ],
        newItem: "",
        Quantity: 0,
        Total: 0,
      };
      
// 2. Behaviorals specification:
    submitItem = (event) => {  // Fonction de sounission de formulaire
      event.preventDefault(); // pour eviter que la page ne se recharge.
      const id = new Date().getTime(); // Generation d'un id unique
      const name = this.state.newItem; // le nouveau nom sera assigné à la donnée newItem
      const price = 7;   
      const quantity = 0;
      const items = [...this.state.items]; // copy des items dans un nouveau tableau
      items.push({id, name, price, quantity}); // ajout d'un nouvel element dans le nouveau tableau
      this.setState({items: items, newItem: ''}); // reaffichage 
    }
    inputChange = (event) => { // Capture du nouveau nom saisi
      this.setState({newItem: event.currentTarget.value});
    }
    // TODO : Il faudrait fonctionner avec un tableau 
    // TODO 2 : mettre les fonctions dans le Shopping list

    /* function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	} */

    addItem = (id) => {  
      const items = [...this.state.items]; // spread operator au lieu d'une copie avec slice()
      const index = items.findIndex(item => item.id == id);
      items.push(item);
      this.setState({items});   
    };

    deletteItem = (id) => {
      const items = [...this.state.items];
      const index = items.findIndex(item => item.id == id);
      items.splice(index, 1);
      this.setState({items});
    }

    // Quel est la différence entre addItem et addSameItem?

    addSameItem = (id) => {  // Augmenter la quantité d'un article     
      const items = [...this.state.items]; 
      var index = items.findIndex(item => item.id === id);
      this.state.Quantity++;
      this.setState({quantity: this.state.items[(index)].quantity, Quantity: this.state.Quantity, Total:  (this.state.Total) + (items[(index)].price)});
      console.log(this.state);
    };

    removeSameItem = (id) => { // Dimunuer la quantité d'un article
      const items = [...this.state.items]; // destructuration
      var index = items.findIndex(item => item.id === id);
      this.state.Quantity--;
      if (items[(index)].quantity > -1) {
      this.setState({quantity: items[(index)].quantity, Quantity: this.state.Quantity, Total:  (this.state.Total) - (items[(index)].price)});
      console.log(this.state);};
    }; 

    emptyCart = () => {  // Vider le panier
      const items = [...this.state.items];   
        for(var i = 0; i < items.length; i++) 
         { 
          this.setState({quantity: this.state.items[(i)].quantity = 0, Quantity: this.state.Quantity = 0, Total:  this.state.Total = 0});
          console.log(this.state);
        };
      };  

// 3. Rendering specification:
    render(){
        return(
        <div>
          {this.state.items.map(                                       
            (item) => <Cart article= {item} onAdd= {this.addSameItem} onRemove= {this.removeSameItem}/>
            )}
          <h2> Nombre d'articles: {this.state.Quantity} </h2>
          <h2>   
            <button onClick = {this.emptyCart}> Vider le panier </button>
          </h2>
          <h2> Total à payer: {this.state.Total} </h2>
          <form onSubmit= {this.submitItem}>
            <input value= {this.state.newItem} onChange= {this.inputChange} type="text" placeholder="Ajouter un article"/>
            <button>  Confirmer  </button>
         	</form> 
        </div>)
     };
    };

export default RealCart