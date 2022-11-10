import react, { Component } from "react";

// importer les images
import rdc from "../assets/congoleseRDC.png"
import peremption from "../assets/peremption.png"

function CareScale({scaleValue, careType}) {
    const range = [1, 2, 3]
    const scaleType = 
            careType === 'local' ? (
                <img src={peremption} alt= 'peremption-icon' />
            ) : (
                <img src={rdc} alt= 'rdc-icon' />
            )
            
    return (
        <div>
            {range.map((rangeElem) => scaleValue >= rangeElem ? (
                <span key= {rangeElem.toString()}> {scaleType} </span>
            ) : null                          
            )}
        </div>
    )
}

export default CareScale