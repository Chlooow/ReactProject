// Le composant represante ShoppingList
// Shopping list permet d'afficher notre liste d'aliments (partie shopping)


// imports

// state de categorie
import { useState } from "react";

// les datas : les aliments
import { alimentList } from '../Datas/alimentList';

import AlimentItem from "./AlimentItem";

import Catégorie from "./Catégorie";


function ShoppingList() {

    const [catActivation, setcatActivation] = useState('');

    //pour categorie
    const ACategorie = alimentList.reduce((acc, elem) => acc.includes(elem.category) ? acc : acc.concat(elem.category),
    []
    )

    return (

    <div>    

        <Catégorie categoryType = {ACategorie} setcatActivation = {setcatActivation} catActivation = {catActivation} />

        { alimentList.map(({name, category, id, light, water, cover, prix}) => 
            !catActivation || catActivation === category ? (
            <div key={name}>
            <AlimentItem name = {name}
                        id = {id}
                        category = {category}
                        water = {water}
                        light = {light}
                        cover = {cover}
                        prix = {prix} />
                
            </div>
            ) : null
            ) }
    </div>
        
    
    );

}

export default ShoppingList;