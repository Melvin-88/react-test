import React from "react";
import {
    NoMatch,
    App,
    ContractsContainer,
    AddContactContainer
} from "../containers/";
import { Route, Switch } from "react-router-dom";

export default (
    <App>
        <Switch>
            <Route path="/" exact component={ContractsContainer} />
            <Route path="/add-contact" exact component={AddContactContainer} />
            <Route path="/edit-contact/:id" exact component={AddContactContainer} />
            <Route component={NoMatch} />
        </Switch>
    </App>
);
