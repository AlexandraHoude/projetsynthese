import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHandPointDown} from '@fortawesome/free-solid-svg-icons'
import {offreDemande} from "../../data/offreDemande";
import DetailDemande from "./DetailDemande";

/**
 * Composant comprenant les cartes de demande de stage
 */

class DemandeStage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetails: false,
            currentOd: null
        };
    }

    handleOnClickDetail(od) {
        this.setState({ currentOd: od });
        this.setState({ showDetails: true });
    }

    render() {
        if (this.state.showDetails) {
            return <DetailDemande od={this.state.currentOd}></DetailDemande>
        }

        return(
            <div className="stage-demande">
                <h2>Demandes de stage <FontAwesomeIcon icon={faHandPointDown}/></h2>
                <br/>
                {offreDemande.map((od, index) => {
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
                                                <Button variant="outline-success">Modifier</Button>
                                                <Button variant="outline-danger">Supprimer</Button>
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
