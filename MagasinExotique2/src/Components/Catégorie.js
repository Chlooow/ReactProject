// Le composant represante Catégorie

// imports



// part de alimentitem
// chaque aliment ya des parametre ext et int
// pour chaque elem on va lire la categorie on crée ou on additionne
// utiliser l'accumulateur reduce : il travail sur alimentlist.categorie. il travail avec l'element actuelle et l'ancien
// l'accumulateur et l'aliment Acc = [] (init la valeur de départ de l'acc) on prend un aliment on extrait sa categorie puis on ajouter 
// des element à l'acc mais attention par la suite il va falloir destrecturer le tableau avant d'ajouter
// categorie dans l'acc ? oui -> acc
// si non acc on le casse puis on ajoute la catégorie
// lier aliment item et catégorie 
// il faut faire un menu deroulant + bouton de reinitialisation -> voir select
// default = il affiche tout
// filter/ include pour rassembler les aliments
// categorie is active ou non
// bouton de reinitialisation

// activation du deroulement => dans shopping list

function Catégorie({categoryType, catActivation, setcatActivation}) {

    return (
        <div>
            <select
                value= {catActivation} 
                onChange = { (e) => setcatActivation(e.target.value)}>
                
                <option value = '' > -------- </option>
                {categoryType.map((cat) => (
                    <option key={cat}>
                        {cat}
                    </option>
                    ))}

            </select>

            <button onClick={ () => setcatActivation('')}> reinitialisation </button>
        </div>

    )

}

export default Catégorie;