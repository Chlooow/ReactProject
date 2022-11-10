import React from "react";

// TODO :
// Les boutons + et - doivent être dans shoppinglist et non ici
// indications : c'est dans le return de Shoppinglist qu'il faut mettre les boutons
// <button onClick={() => addToCart(name, price)}>Ajouter</button>
// dans shopping list il manque des props pour les lier au bouton à moins de faire .id, .qtity++


function Cart({article, onAdd, onRemove}) {
    return(
        <li> 
          {article.name}: {article.price}€ {"            "  } 
          Qte: {article.quantity} {"            "  }                      
          <button onClick= {() => onAdd(article.id, (article.quantity++))}> + </button>                         
          <button onClick= {() =>{ 
            if (article.quantity > 0) {
            onRemove(article.id, (article.quantity--))
          }
            }}> - </button> {"            "  }          
          Subtotal: {(article.price) * (article.quantity)}
        </li>                 
    )
  }

export default Cart;