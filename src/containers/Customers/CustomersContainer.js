import {connect} from 'react-redux';
import {CustomersDisplay} from './CustomersDisplay';
import {removeCustomer} from '../../actions/'
import {getAllCustomers, getAllContracts} from '../../selectors';

const mapStateToProps = state => {
    const customers = getAllCustomers(state) || null;
    const contracts = getAllContracts(state) || null;
    return {
        customers,
        contracts
    };
};

const mapDispatchToProps = {
    removeCustomer
};

export const CustomersContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(CustomersDisplay);
