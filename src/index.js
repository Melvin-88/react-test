import React from "react";
import reactDOM from "react-dom";
import { Provider } from "react-redux";
import {createBrowserHistory} from 'history';
import { getStore } from "./getStore";
import routes from "./routes/routes";
import { Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

const store = getStore();
export const history = createBrowserHistory();

reactDOM.render(
    <Provider store={store}>
        <Router history={history} children={routes} />
    </Provider>,
    document.getElementById("root")
);

serviceWorker.unregister();