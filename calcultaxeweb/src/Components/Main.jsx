import { Component } from "react";
import DisplayMontant from "./DisplayMontant";
import EntrerNombre from "./EntrerNombre";

class Main extends Component
{
    changeMontant()
    {

    }

    render()
    {
        return (
            <div>
                <EntrerNombre labelText="Entrer le montant avec taxe :" callback={this.changeMontant} nombreInitial="40"></EntrerNombre>
                <DisplayMontant labelText="TPS:" montant="10"></DisplayMontant>
                <DisplayMontant labelText="TVQ:" montant="20"></DisplayMontant>
                <DisplayMontant labelText="Montant Total :" montant="30"></DisplayMontant>
            </div>
        )
    }
}

export default Main;
