import { alimentList } from '../datas/alimentList.js'
import '../styles/ShoppingList.css'

function ShoppingList() {
    const categories = alimentList.reduce(
		(acc, aliment) =>
			acc.includes(aliment.category) ? acc : acc.concat(aliment.category),
		[]
	)

    return (
        <div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-aliment-list'>
				{alimentList.map((aliment) => (
					<li key={aliment.id} className='lmj-aliment-item'>
						{aliment.name}
                        {aliment.isSpecialOffer && <div className='lmj-sales'> Soldes </div>}
					</li>
				))}
			</ul>
		</div>
    )
}

export default ShoppingList