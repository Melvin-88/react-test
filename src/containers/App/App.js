import React from "react";
import PropTypes from "prop-types";
import "./Reset.scss";
import "./App.scss";

export class App extends React.Component {
    render() {
        return (
            <div className="wrapper">{this.props.children}</div>
        )
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};
