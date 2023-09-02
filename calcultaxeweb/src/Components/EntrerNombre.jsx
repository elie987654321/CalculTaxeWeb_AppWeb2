
//Permet de demander un nombre a l'utilisateur
//labelText : string : chaine a afficher dans le label
//nombreInitial : number : montant initial de l'input
//callback : function : fonction qui permet de renvoyer la saisi de l'utilisateur
function EntrerNombre (props)
{
    return (
        <div>
            <label for="inputNombre">{props.labelText}</label>
            <input type="number" name="inputNombre" onclick={props.callback} value={props.nombreInitial} />
        </div>
    )
}

export default EntrerNombre;