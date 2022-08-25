import "../styles/Cart.css"

function Cart() {
    const chikwanguePrice = 2
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
}

export default Cart;
    