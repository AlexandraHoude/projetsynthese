import React  from 'react';
import Form from 'react-bootstrap/Form';
import "./Public.scss";
import {Button} from "react-bootstrap";
import {utilisateur} from "../../data/utilisateur.js";

/**
 * Formulaire de connexion
 */

class Connexion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',
            typeConnexion: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    /**
     * Garder dans le state le courriel et le password lorsque entré
     *
     * @param event
     */
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    /**
     * Retrouver le compte associé au courriel donné
     *
     * @param emailInput
     * @returns {utilisateur[]}
     */
    getUserInfosByEmail(emailInput) {
        return utilisateur.filter(v => v.Courriel.includes(emailInput));
    }

    /**
     *  Fonction qui verifie le password donné pour l'utilisateur courant
     *  et retour le niveau d'accès du compte s'il à lieu
     *
     * @param user
     * @param passwordInput
     * @returns {null|number}
     */
    verifyIfUserCanLoginAndGetAccesLevel(user, passwordInput) {
        let pass =  user.filter(v => v.password.includes(passwordInput));

        if (pass.length > 0) {
            return pass[0].acces;
        }
        return null;
    }

    /**
     * Fonction de gestion de la soumissions du formulaire de connexion
     *
     * @param event
     */
    handleSubmit(event) {
        event.preventDefault();

        let user = this.getUserInfosByEmail(this.state.email);
        if (user) {
            let acces = this.verifyIfUserCanLoginAndGetAccesLevel(user, this.state.pass);

            if (acces !== null && acces !== '')
                localStorage.setItem('connexion_type', acces);
        }
    }

    /**
     * Fonction de render du formulaire de connexion
     *
     * @returns {JSX.Element}
     */
    render() {
        return (
            <div className="col-4 formulaire-connexion">
                <h3>Identification</h3>
                <br/>
                <Form onSubmit={this.handleSubmit.bind(this)}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={this.handleInputChange} name="email" type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={this.handleInputChange} name="pass" type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default Connexion;
