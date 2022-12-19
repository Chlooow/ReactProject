// Le composant representant CareScale
// Composant de caractéristique d'un aliment à faire le lien avec AlimentItem 
// les caractéristiques evalués sont : Water et Light
// CareScale est entre 0 et 3

// TODO :
// 1) on commence par afficher un CareScale de Test avec des valeurs choisis

// 2) on teste dans AlimentItem avec les Balises CareScale pour voir le resultat

/* 3) au lieu d'afficher le chiffre du carescale, on va le remplacer par des image en fonction
du chiffre que l'aliment nous donne (faire un tableau [1, 2, 3] le carescale peu être entre ces valeurs
    faire par la suite une condition pour savoir si l'aliment a un nombre de water ou light entre 0 et 3)
*/

// imports
import React, { Component } from 'react';
import { alimentList } from '../Datas/alimentList';
//import { Component } from 'react';

/*<ul>
                <li className='StyleWater' key={water}> {recherche1} </li>
                <li className='StyleLight' key={light}> {} </li>
            </ul>*/
// (ScaleValue, careType)
// (CareLevel, careType)

function CareScale({CareType, CareValue}) {

// Nul = 1, peu = 2, beaucoup = 3

const CareLevel = ['nul', 'peu', 'beaucoup'];
const CareRange = [1, 2, 3];


// quand je recois un careType je fais une recommandation
/*const recommandation = 
        CareType === {water} ? ( 
        ) : (
            alert('cette aliment requiert de la lumière')
        );*/

    return (

        CareRange.map( (range) => (
        <div>
            {
                (CareType === "water") && 
                (CareValue >= range) && 
                (<span key = {range.toString()}
                    onClick = {() => alert(`cet aliment requiert ${CareLevel[range - 1]} d'eau` ) } > . </span>)
            }
            {
                (CareType === "light") && 
                (CareValue >= range) && 
                (<span key = {range.toString()}
                    onClick = {() => alert(`cet aliment requiert ${CareLevel[range - 1]} lumière` ) } > . </span>)

            }

        </div>
        )
        )
        
    );

    // ce qu'on devrait avoir si on utilise const ExempleTest = [1, 3] :
// Nul Bcp

// ce qu'on devrait avoir si on utilise const ExempleTest2 = [2, 3] :
// Peu Bcp

// ce qu'on devrait avoir si on utilise const ExempleTest3 = [1, 1] :
// Nul Nul

}

export default CareScale;