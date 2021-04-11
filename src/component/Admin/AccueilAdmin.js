import React, { Component } from 'react';
import Sidebar from "./Sidebar";
import NavBarAdmin from "./NavBarAdmin";
import OffreStage from "./OffreStage";
import DemandeStage from "./DemandeStage";

/**
 * Accueil du portail admin
 */

class AccueilAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typeConnexion: localStorage.getItem('connexion_type')
        };
    }

    render() {
        if (this.state.typeConnexion === '111') {
            return(
                <div>
                    <NavBarAdmin></NavBarAdmin>
                    <Sidebar></Sidebar>
                    <DemandeStage></DemandeStage>
                </div>
            )
        } else if (this.state.typeConnexion === '333') {
            return(
                <div>
                    <NavBarAdmin></NavBarAdmin>
                    <Sidebar></Sidebar>
                    <OffreStage></OffreStage>
                </div>
            )
        }

        return(
            <div>
                <h1>Veuillez vous connecter.</h1>
            </div>
        )
    }
}

export default AccueilAdmin;
