import React from "react";
import {
    NoMatch,
    App,
    Home,
    ContractsContainer,
    CustomersContainer,
} from "../containers/";
import { Route, Switch } from "react-router-dom";

export default (
    <App>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contracts" exact component={ContractsContainer} />
            <Route path="/customers" exact component={CustomersContainer} />
            <Route component={NoMatch} />
        </Switch>
    </App>
);
