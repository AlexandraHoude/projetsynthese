import React, { Component } from 'react';

class AjoutOffreDemandeStage extends Component {
    constructor(props) {
        super(props);
    }

    /**
     * Render de l'ajout demandes de stage
     * @returns {JSX.Element}
     */
    render() {
        console.log(this.props.od);

        return(
            <div className="stage-demande">
                <p>{this.props.od.id}</p>
                <p>{this.props.od.titre}</p>
                <p>{this.props.od.type}</p>
                <p>{this.props.od.secteur}</p>
                <p>{this.props.od.ville}</p>
            </div>
        )
    }
}

export default AjoutOffreDemandeStage;
