import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHandPointDown} from '@fortawesome/free-solid-svg-icons'
import {offreDemande} from "../../data/offreDemande";
import DetailDemande from "./DetailDemande";
import AjoutOffreDemandeStage from "./AjoutOffreDemandeStage";

/**
 * Composant comprenant les cartes de demande de stage
 */

class DemandeStage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetails: false,
            showModif: false,
            currentOd: null,
            demandes: offreDemande
        };
    }

    /**
     * Fonction qui affiche les détails d'une demande lors du clique sur le bouton détail
     * @param od l'objet d'offre/demande courant
     */
    handleOnClickDetail(od) {
        this.setState({ currentOd: od });
        this.setState({ showDetails: true });
    }

    /**
     * Fonction qui supprime une demande choisi
     * @param od
     */
    handleOnClickDelete(od) {
        this.setState(prevstate => {
            const demande = prevstate.demandes.filter(offreDem => offreDem.id !== od.id);
            return { demandes: demande };
        });
    }

    /**
     * Fonction pour modifier une demande
     * @param od
     */
    handleOnClickModif(od) {
        this.setState({ currentOd: od });
        this.setState({ showModif: true });
    }

    /**
     * Render des demandes de stage
     * @returns {JSX.Element}
     */
    render() {
        if (this.state.showDetails) {
            return <DetailDemande od={this.state.currentOd}></DetailDemande>
        }

        if (this.state.showModif) {
            return <AjoutOffreDemandeStage od={this.state.currentOd}></AjoutOffreDemandeStage>
        }

        return(
            <div className="stage-demande">
                <h2>Demandes de stage <FontAwesomeIcon icon={faHandPointDown}/></h2>
                <br/>
                {this.state.demandes.map((od, index) => {
                    if(od.type === "demande")
                        return <div>
                            <div className="col-8">
                                <Card>
                                    <Card.Header>{od.titre}</Card.Header>
                                    <Card.Body>
                                        <div className="row">
                                            <div className="col-6">
                                                <Card.Title>Jean-Sébastien Tremblay </Card.Title>
                                            </div>
                                            <div className="col-6">
                                                <Card.Text><strong>Formation:</strong>{od.programmeSuivi}</Card.Text>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <Card.Text><strong>Ville:</strong>{od.ville}</Card.Text>
                                            </div>
                                            <div className="col-6">
                                                <Card.Text><strong>Début:</strong>{od.debut}</Card.Text>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <Card.Text><strong>Établissement Scolare:</strong> Cégep de
                                                    Trois-Rivières</Card.Text>
                                            </div>
                                            <div className="col-6">
                                                <Card.Text><strong>Fin:</strong>{od.fin}</Card.Text>
                                            </div>
                                        </div>
                                        <br/>
                                        <Card.Text>
                                            {od.description}
                                        </Card.Text>
                                        <div className="row">
                                            <div className="col-8">
                                                <Button onClick={this.handleOnClickDetail.bind(this, od)} variant="danger">Détails</Button>
                                            </div>
                                            <div className="col-4">
                                                <Button onClick={this.handleOnClickModif.bind(this, od)} variant="outline-success">Modifier</Button>
                                                <Button onClick={this.handleOnClickDelete.bind(this, od)} variant="outline-danger">Supprimer</Button>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                            <br/>
                        </div>
                    })}
            </div>
        )
    }
}

export default DemandeStage;
