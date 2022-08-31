import { useState } from "react"
import "../styles/Cart.css"

function Cart() {

    const [cart, updateCart] = useState(0)
    const chikwanguePrice = 2

    return (
        <div className="lmj-cart">
            <h2> Panier </h2>
            <div>
                Chikwangue : {chikwanguePrice}€
                <button onClick={() => updateCart(cart + 1)}>
                    Ajouter
                </button>
            </div>
            <h3> Total : {chikwanguePrice * cart}€</h3>
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
    