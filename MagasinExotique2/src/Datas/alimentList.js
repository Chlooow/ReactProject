// import des images
//import chikwangue from '../Assets/chikwanga.png'
import gingembre from '../Assets/gingembre.png'
import banane from '../Assets/bananeplantain.png'
import ngai from '../Assets/ngai.png'
import palm from '../Assets/palmoil.png'
import mango from '../Assets/mango.png'
import basil from '../Assets/basilic.png'
import aloe from '../Assets/Aloe.png'
import yam from '../Assets/yam.png'


export const alimentList = [
    {
        name: 'Tangawisi',
		category: 'classique',
		id: '2ab',
        light : 3,
        water : 1,
        cover : gingembre,
        prix : 1
    },
    {
        name: 'Ngai Ngai',
		category: 'classique',
		id: '3sd',
        light : 1,
        water : 2,
        cover : ngai,
        prix : 2
    },
    {
        name: 'Banane plantain',
		category: 'classique',
		id: '4kk',
        isBestSale : true,
        light : 3,
        water : 1,
        cover : banane,
        prix : 3
    },
    {
        name: 'huile de palme',
		category: 'extérieur',
		id: '5pl',
        isBestSale : true,
        light : 3,
        water : 1,
        cover : palm,
        prix : 4
    },
    {
        name: 'Mango',
		category: 'extérieur',
		id: '6uo',
        light : 2,
        water : 2,
        cover : mango,
        prix : 5
    },
    {
        name: 'basilique',
		category: 'extérieur',
		id: '7ie',
        isBestSale: false,
        isSpecialOffer : true,
        light : 2,
        water : 3,
        cover : basil,
        prix : 6
    },
    {
        name: 'aloe',
		category: 'extérieur',
		id: '8fp',
        isBestSale : false,
        isSpecialOffer: true,
        light : 2,
        water : 1,
        cover : aloe,
        prix : 7
    },
    {
        name: 'Igname',
		category: 'extérieur',
		id: '9vn',
        light : 2,
        water : 1,
        cover : yam,
        prix : 8
    }

]