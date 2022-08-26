// import des images
import chikwangue from '../assets/chikwangue.png'
import gingembre from '../assets/gingembre.png'
import banane from '../assets/bananeplantain.png'
import ngai from '../assets/ngai.png'
import palm from '../assets/palmoil.png'
import mango from '../assets/mango.png'
import basil from '../assets/basilic.png'
import aloe from '../assets/aloe.png'
import yam from '../assets/yam.png'




export const alimentList = [
    {
        name: 'Chikwangue',
		category: 'classique',
		id: '1ed',
		isBestSale: true,
        date : 1,
        countryCode : 243,
        cover : chikwangue
    },
    {
        name: 'Tangawisi',
		category: 'classique',
		id: '2ab',
        date : 1,
        countryCode : 243,
        cover : gingembre
    },
    {
        name: 'Ngai Ngai',
		category: 'classique',
		id: '3sd',
        date : 2,
        countryCode : 242,
        cover : ngai
    },
    {
        name: 'Banane plantain',
		category: 'classique',
		id: '4kk',
        isBestSale : true,
        date : 1,
        countryCode : 242,
        cover : banane
    },
    {
        name: 'huile de palme',
		category: 'extérieur',
		id: '5pl',
        isBestSale : true,
        date : 2,
        countryCode : 243,
        cover : palm
    },
    {
        name: 'Mango',
		category: 'extérieur',
		id: '6uo',
        date : 1,
        countryCode : 242,
        cover : mango
    },
    {
        name: 'basilique',
		category: 'extérieur',
		id: '7ie',
        isBestSale: false,
        isSpecialOffer : true,
        date : 1,
        countryCode : 243,
        cover : basil
    },
    {
        name: 'aloe',
		category: 'extérieur',
		id: '8fp',
        isBestSale : false,
        isSpecialOffer: true,
        date : 1,
        countryCode : 1,
        cover : aloe
    },
    {
        name: 'Igname',
		category: 'extérieur',
		id: '9vn',
        date : 1,
        countryCode : 243,
        cover : yam
    }

]