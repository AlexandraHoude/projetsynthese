import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col"
import {Row} from "react-bootstrap";

/**
 * Formulaire de création de compte
 */

class FormulairePublicationOffre extends Component {
    render() {
        return (
            <div className="col-4">
                <Form>
                    <Row>
                        <Col>
                            <Form.Control placeholder="Nom" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Prénom" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control placeholder="Entreprise" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Programme de formation" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control placeholder="Compétences acquises" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Secteur d'activité" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control placeholder="Ville" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Type de Stage" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control placeholder="Date de début" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Date de fin" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control placeholder="Nombre d'heure" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Rémunération" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control placeholder="Information supplémentaire" />
                        </Col>
                    </Row>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default FormulairePublicationOffre;
