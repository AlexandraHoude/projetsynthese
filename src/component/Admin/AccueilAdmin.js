import React, { Component } from 'react';
import Sidebar from "./Sidebar";
import NavBarAdmin from "./NavBarAdmin";
import ListeCandidats from "./ListeCandidats";

/**
 * Accueil du portail admin
 */

class AccueilAdmin extends Component {
    render() {
        return(
            <div>
                <NavBarAdmin></NavBarAdmin>
                <Sidebar></Sidebar>
                <ListeCandidats></ListeCandidats>
            </div>
        )
    }
}

export default AccueilAdmin;
