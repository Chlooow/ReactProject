import React, { Component } from "react";
import CareScale from "./CareScale";
import '../styles/AlimentItem.css';


function AlimentItem (props) {
	const {id, cover, name, world, local, isBestSale, isSpecialOffer}= props;
	return (
		<div>
			<ul className='lmj-aliment-item' onClick= {(name) => alert(`Vous voulez acheter 1 ${name} ? Très bon choix!`)}> 

				<img className='lmj-aliment-item-cover' src={cover} alt={'${name} cover'} />
				{name}
				<ul key={id}> {isBestSale ? <span>🔥</span> : null}</ul>			
				<ul key={id}> {isSpecialOffer && <offer className= 'lmj-sales'> Solde </offer>} </ul>
			</ul>
			<ul>
				<CareScale careType='world' scaleValue={world} />
				<CareScale careType='local' scaleValue={local} />
			</ul>
		</div>
	)
}


export default AlimentItem