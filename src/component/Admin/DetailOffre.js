import React, { Component } from 'react';
import Table from "react-bootstrap/Table";
import {faHandPointDown, faUserGraduate} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import OffreStage from "./OffreStage";

/**
 * Tableau de la détail d'offre de stage
 */

class DetailOffre extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showOffreStage: false
        };
    }

    handleOnClickRetourListe() {
        this.setState({ showOffreStage: true });
    }

    render() {
        if (this.state.showOffreStage) {
            return <OffreStage></OffreStage>
        }

        return(
            <div className="stage-demande-detail">
                <h1>Détail de la demande de stage <FontAwesomeIcon icon={faHandPointDown}/></h1>
                <br/>
                <div className="row">
                    <div className="col-8">
                        <Button onClick={this.handleOnClickRetourListe.bind(this)} variant="danger">Retour à la liste</Button>
                    </div>
                    <div className="col-4">
                        <Button variant="outline-success">Modifier</Button>
                        <Button variant="outline-danger">Supprimer</Button>
                    </div>
                </div>
                <br/>
                <hr/>
                <br/>
                <div className="col-6">
                    <h2><FontAwesomeIcon icon={faUserGraduate}/>{this.props.od.titre}</h2>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Nom et prénom du stagiaire</th>
                            <td>Joseph Doe</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th>Entreprise</th>
                            <td>Cégep de Trois-Rivières</td>
                        </tr>
                        <tr>
                            <th>Programme de formation</th>
                            <td>{this.props.od.programmeSuivi}</td>
                        </tr>
                        <tr>
                            <th>Compétences acquise durant le programme</th>
                            <td>HTML, CSS, Javascript, React, Vue.js</td>
                        </tr>
                        <tr>
                            <th>Secteur d'activité</th>
                            <td>{this.props.od.secteur}</td>
                        </tr>
                        <tr>
                            <th>Ville</th>
                            <td>{this.props.od.ville}</td>
                        </tr>
                        <tr>
                            <th>Type de stage</th>
                            <td>temps plein</td>
                        </tr>
                        <tr>
                            <th>Date de début</th>
                            <td>{this.props.od.debut}</td>
                        </tr>
                        <tr>
                            <th>Date de fin</th>
                            <td>{this.props.od.fin}</td>
                        </tr>
                        <tr>
                            <th>Nombre d'heure semaine</th>
                            <td>{this.props.od.nombreHeureSemaine}</td>
                        </tr>
                        <tr>
                            <th>Rémunération</th>
                            <td>{this.props.od.remuneration}</td>
                        </tr>
                        <tr>
                            <th>Informations supplémentaires</th>
                            <td>{this.props.od.informationSupplementaire}</td>
                        </tr>
                        </tbody>
                    </Table>
                    <Button variant="outline-success">Modifier</Button>
                    <Button variant="outline-danger">Supprimer</Button>
                    <br/>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Communiquer avec le candidat</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                            <br/>
                            <Button variant="danger">Envoyer</Button>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        )
    }
}

export default DetailOffre;
