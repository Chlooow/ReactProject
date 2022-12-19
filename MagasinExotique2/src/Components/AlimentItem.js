// Le composant represant AlimentItem
// on va faire le liens entre AlimentList.js et Aliment Item


// imports
import React from 'react';

//import peremption from '../Assets/peremption.png';

// Composant CareScale
import CareScale from './CareScale';

function AlimentItem({name, id, water, light, cover, prix}){

    return(
        <div> 
            <div key={id}> 
                <ul onClick={() => alert('message')}>
                    {name}
                    <img src={cover} alt ={`${name} cover`} />
                    {prix}
                </ul>
            </div>
            
            <div>
                <CareScale CareType = "water" CareValue= {water} />
                <CareScale CareType = "light" CareValue= {light} />
            </div>
        </div>
    );

}

export default AlimentItem;





/*function AlimentItem(name, id, water, light, cover, prix){

    // test d'un seul élément
    //const tab = ['aliment1', '01', 1, 2, peremption, 0];

    /*const n = 'aliment1';
    const i = '01';
    const w = 0;
    const l = 0;
    const c = peremption;
    const p = 0;

    return(
        <div> 

            <div key={id}> 

                <ul onClick={alert('message')}>
                    <p key={name}>
                        {name}
                    </p> 

                    <p key={prix}>
                        {prix}
                    </p>

                    <img src={cover} alt ={`${name} cover`} />
                </ul>

            </div>
            
            <div>

            <CareScale CareType = "water" CareValue= {water} />
            <CareScale CareType = "light" CareValue= {light} />

            </div>
        </div>
    );

}*/