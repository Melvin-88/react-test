import React from "react";
import PropTypes from "prop-types";
import "./Reset.scss";
import "./App.scss";

export class App extends React.Component {
    render() {
        return this.props.children;
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};
