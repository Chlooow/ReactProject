import { useState } from "react"
import "../styles/Cart.css"

function Cart() {

    const [cart, updateCart] = useState(0)
    const[ cart2, updateCart2] = useState(0)
    const chikwanguePrice = 2
    const ngaingaiPrice = 2
    const tangawisiPrice = 4
    const bananePlanPrice = 3
    const palmOilPrice = 4
    const mangaPrice = 2
    const basilique = 15*5/100
    const aloe = basilique
    const yam = 6


    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <div className="lmj-cart">
        {/* ouvrir le panier */}
        <button className = 'lmj-cart-toggle-button'onClick = {() => setIsOpen(false)}> Fermer </button>
            <h2> Panier </h2>
            <div>
                Chikwangue : {chikwanguePrice}€
                <button onClick={() => updateCart(cart + 1)}>
                    Ajouter
                </button>
                <div>
                Tangawisi : {tangawisiPrice}€
                <button onClick={() => updateCart2(cart2 + 1)}>
                    Ajouter
                </button>
                </div>
            </div>
             {/* ajouter au panier */}
            <h3> Total : {(chikwanguePrice * cart) + (tangawisiPrice * cart2)} €</h3>
            {/*<h3> Total2 : {tangawisiPrice * cart2} €</h3>*/}
            {/*3 problèmes : 1) on ne peut pas vider le panier
            2) on ne peux pas enlever les élements qu'on veux
            3) on ne peux pas délimiter le nombre qu'on enleve (nombre négatif)
            solution : utiliser une boucle for qui décrémente à chaque click jusqu'a ce qu'on atteigne 0*/}
            <button onClick = {() =>updateCart(0)}> Vider le panier </button>
            <button onClick={() => updateCart(cart - 1)}> enlever </button>
        </div>
    ) : ( 
        <div className="lmj-cart-closed">
        <button className = ' lmj-cart-toggle-button' 
        onClick={() => setIsOpen(true)}> Ouvrir le Panier </button>
        </div>
    )
}
    /*const chikwanguePrice = 2
    const TangawisiPrice = 5
    const NgaiPrice = 3
    return (
            <div className = "lmj-cart">
                    <h2>Panier</h2>
                <ul>
                    <li>Chikwangue : {chikwanguePrice}€</li>
                    <li>Tangawisi : {TangawisiPrice}€</li>
                    <li>Ngai Ngai : {NgaiPrice}€</li>
                </ul>
                    Total : {chikwanguePrice + TangawisiPrice + NgaiPrice }€
            </div>
          )
}*/

export default Cart;
    