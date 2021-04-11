import React, { Component } from 'react';
import {Navbar, Nav, Button} from "react-bootstrap";
import {faSignOutAlt, faPlus} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Redirect} from "react-router-dom";


/**
 * Barre de navigation du portail admin
 */

class NavBarAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: null
        };
    }

    handleOnClick(event) {
        localStorage.clear();
        this.setState({ redirect: "/accueil" });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }

        return(
            <div>
                <Navbar bg="danger" variant="dark">
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Nav className="mr-auto">
                        <Button variant="outline-light" className="ml-2"><FontAwesomeIcon icon={faPlus} /> Ajouter une offre de stage</Button>
                        <Button variant="outline-light" className="ml-2"><FontAwesomeIcon icon={faPlus} /> Ajouter une demande de stage</Button>
                    </Nav>
                    <Nav>
                        <Button onClick={this.handleOnClick.bind(this)} variant="outline-light" className="ml-2">
                            <FontAwesomeIcon icon={faSignOutAlt} />
                        </Button>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default NavBarAdmin;
