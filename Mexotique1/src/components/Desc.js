import React  from "react";

function Desc () {
const text = " Ici commander tous les produits exotiques dont vous avez toujours revés.";
const emojis = "🤑🤑🤑";

    return (
        <p>{text.slice(0, 73) + emojis}</p>
    )

};

export default Desc;
