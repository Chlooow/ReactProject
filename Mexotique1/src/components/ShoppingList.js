import React, { Component } from "react";
import AlimentItem from "./AlimentItem";
import {alimentList} from "../datas/alimentList";
import "../styles/ShoppingList.css";

class ShoppingList extends Component {
// 1. State specification: Un  objet JS 


// 2. Behaviorals specification:
	

// 3. Rendering specification:
	render() {
    const categories = alimentList.reduce(
		(acc, aliment) => acc.includes(aliment.category) ? acc : acc.concat(aliment.category),
		[]
	)
		return (
		<div>
			<ul> 
				{categories.map((cat) => (<li key={cat}>{cat}</li>))} 
			</ul>
			<ul className='lmj-aliment-list'>
				{alimentList.map((aliment) => <AlimentItem id={aliment.id} name={aliment.name} cover={aliment.cover} world={aliment.world} local={aliment.local}  isBestSale={aliment.isBestSale} isSpecialOffer={aliment.isSpecialOffer} className='lmj-aliment-item'/>                                            
				)}
			</ul>			
		</div>
		)
	}
}

export default ShoppingList