import React from 'react';
import '../styles/Header.css';

function Header(){
    const text = "Meilleur magasin de produit congolais";
    const emoji = "🇨🇩";
    return (
        <div className='header'>
        <p>
        {text + ' ' + emoji + '\n' + " 100 % BIO"}
        </p>
        </div>
    );
}

export default Header;