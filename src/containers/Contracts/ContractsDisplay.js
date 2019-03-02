import React, { Component } from 'react';
import {Header, ListContract} from '../../components';

export class ContractsDisplay extends Component {
    render() {
        const {contracts} = this.props;
        return (
            <div>
                <Header title="contracts"/>
                <ListContract data={contracts}/>
            </div>
        );
    }
}
