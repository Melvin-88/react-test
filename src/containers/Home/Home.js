import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class Home extends Component {
    render() {
        return (
            <div>
                <h1>The Contracts Automation Platform</h1>
                <ul>
                    <li>
                        <Link to="/contracts">contracts</Link>
                    </li>
                    <li>
                        <Link to="/customers">customers</Link>
                    </li>
                </ul>
            </div>
        );
    }
}
