function DisplayMoneyAmount(amount, labelText)
{
    return (
        <div>
            <label for="montant" class="labelMontant">{labelText}</label>
            <input type="text" readOnly name="montant" value={amount}/>
        </div>
    )
}

export default DisplayMoneyAmount(amount, labelText);