import React  from 'react';
import './App.scss';
import Accueil from "./component/Public/Accueil";
import {Switch, Route} from "react-router-dom";
import Candidats from "./component/Public/Candidats";
import APropos from "./component/Public/APropos";
import PageConnexion from "./component/Public/PageConnexion";
import PageListeOffreStage from "./component/Public/PageListeOffreStage";
import AccueilAdmin from "./component/Admin/AccueilAdmin";

function App() {
  return (
      <main>
          <Switch>
              <Route path="/" component={Accueil} exact />
              <Route path="/accueil" component={Accueil} />
              <Route path="/offrestage" component={PageListeOffreStage} />
              <Route path="/candidats" component={Candidats} />
              <Route path="/connexion" component={PageConnexion} />
              <Route path="/apropos" component={APropos} />
              <Route path="/admin" component={AccueilAdmin} />
              <Route component={Error} />
          </Switch>
      </main>
  );
}

export default App;
