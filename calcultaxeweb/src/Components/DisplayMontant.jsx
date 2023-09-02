
//Permet d'afficher un montant d'argent
//props :
//labelText : string : texte a afficher sur le label
//montant : number : montant a afficher
function DisplayMoneyAmount(props)
{
    return (
        <div>
            <label for="montant" class="labelMontant">{props.labelText}</label>
            <input type="text" readOnly name="montant" value={props.montant + "$"}/>
        </div>
    )
}

export default DisplayMoneyAmount(amount, labelText);