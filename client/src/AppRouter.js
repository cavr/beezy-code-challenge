import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { CharacterPage, CharactersPage, LocalState } from './pages';


const AppRouter = () =>
    (
        <Switch>
            <Redirect exact from="/" to="/characters" />
            <Route exact path="/characters" component={CharactersPage} />
            <Route exact path="/local" component={LocalState} />
            <Route exact path="/characters/:id" component={CharacterPage} />
            <Redirect to="/characters" component={CharactersPage} />
        </Switch>

    );


export default AppRouter;