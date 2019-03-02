import React, { Component } from 'react';
import {Header, ListCustomers} from '../../components';

export class CustomersDisplay extends Component {

    removeCustomer = (id) => {
      this.props.removeCustomer(id)
    };

    render() {
        const {customers, contracts} = this.props;
        return (
            <div>
                <Header title="Customers"/>
                <ListCustomers
                    data={customers}
                    contracts={contracts}
                    removeCustomer={this.removeCustomer}
                />
            </div>
        );
    }
}
