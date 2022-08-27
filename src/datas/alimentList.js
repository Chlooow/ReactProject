// import des images
import chikwangue from '../assets/chikwanga.png'
import gingembre from '../assets/gingembre.png'
import banane from '../assets/bananeplantain.png'
import ngai from '../assets/ngai.png'
import palm from '../assets/palmoil.png'
import mango from '../assets/mango.png'
import basil from '../assets/basilic.png'
import aloe from '../assets/Aloe.png'
import yam from '../assets/yam.png'


export const alimentList = [
    {
        name: 'Chikwangue',
		category: 'classique',
		id: '1ed',
		isBestSale: true,
        light : 2,
        water : 3,
        cover : chikwangue
    },
    {
        name: 'Tangawisi',
		category: 'classique',
		id: '2ab',
        light : 3,
        water : 1,
        cover : gingembre
    },
    {
        name: 'Ngai Ngai',
		category: 'classique',
		id: '3sd',
        light : 1,
        water : 2,
        cover : ngai
    },
    {
        name: 'Banane plantain',
		category: 'classique',
		id: '4kk',
        isBestSale : true,
        light : 3,
        water : 1,
        cover : banane
    },
    {
        name: 'huile de palme',
		category: 'extérieur',
		id: '5pl',
        isBestSale : true,
        light : 3,
        water : 1,
        cover : palm
    },
    {
        name: 'Mango',
		category: 'extérieur',
		id: '6uo',
        light : 2,
        water : 2,
        cover : mango
    },
    {
        name: 'basilique',
		category: 'extérieur',
		id: '7ie',
        isBestSale: false,
        isSpecialOffer : true,
        light : 2,
        water : 3,
        cover : basil
    },
    {
        name: 'aloe',
		category: 'extérieur',
		id: '8fp',
        isBestSale : false,
        isSpecialOffer: true,
        light : 2,
        water : 1,
        cover : aloe
    },
    {
        name: 'Igname',
		category: 'extérieur',
		id: '9vn',
        light : 2,
        water : 1,
        cover : yam
    }

]