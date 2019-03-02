import React, { Component } from 'react';
import {Header, ListCustomers} from '../../components';

export class CustomersDisplay extends Component {

    getCurrentContracts = (customerId) => {
        //Check on contracts in app
        const {contracts} = this.props;
        if(!contracts) return <div>No Contracts</div>;
        //Check on contracts for current customer
        let currentContractsList = contracts.filter((e)=> e.customerId === customerId);
        if(!currentContractsList.length) return <div>No Contracts for current customer</div>;
        //return list contracts
        return currentContractsList.map(e=>(
            <div key={e.id}>{e.name}</div>
        ))
    };

    removeCustomer = (id) => {
      this.props.removeCustomer(id)
    };

    render() {
        const {customers} = this.props;
        return (
            <div>
                <Header title="Header"/>
                <ListCustomers
                    data={customers}
                    getCurrentContracts={this.getCurrentContracts}
                    removeCustomer={this.removeCustomer}
                />
            </div>
        );
    }
}
