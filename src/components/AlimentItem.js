import CareScale from "./CareScale";
import '../styles/AlimentItem.css'

function handleClick(/*alimentName*/) {
    //alert('Vous voulez acheter 1 ${alimentName}? Très bon choix')
    console.log('wsh')
}

function AlimentItem({ id, cover, name, water, light }) {
	return (
		<li className='lmj-aliment-item' onClick={handleClick(name)}> 
			<img className='lmj-aliment-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}


export default AlimentItem