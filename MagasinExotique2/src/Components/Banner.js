// Le composant represante Banner

// imports
import React from 'react';
import logo from '../Assets/logoC.png'

function Banner() {
    return (
        <header>
            <div>
                <img src = {logo}></img>
                <h1> Magasin Exotique </h1>
                <title> Magasin Exotique </title>
            </div>
        </header>
    );
}

export default Banner;