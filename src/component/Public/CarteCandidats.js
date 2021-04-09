import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Public.scss";
import {offreDemande} from "../../data/offreDemande";

/**
 * Composant contenant les cartes des candidats
 */

class CarteCandidats extends Component {
    render() {
        return (
            <div className="container-fluid carte-offre-stage">
                {offreDemande.map((od, index) => {
                    if(od.type === "demande")
                    return <div key={index}>
                        <div className="col-6">
                            <Card>
                                <Card.Body>
                                    <Card.Title>{od.titre}</Card.Title>
                                    <Card.Text>
                                        {od.ville}
                                    </Card.Text>
                                    <Card.Text>
                                        {od.description}
                                    </Card.Text>
                                    <Button variant="primary">button</Button>
                                    <Button variant="primary">button</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <br/>
                    </div>
                })}
            </div>
        );
    }
}

export default CarteCandidats;
