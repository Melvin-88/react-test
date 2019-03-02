import {connect} from 'react-redux';
import {ContractsDisplay} from './ContractsDisplay';
import {getAllContracts} from '../../selectors';

const mapStateToProps = state => {
    const contracts = getAllContracts(state) || null;
    return {
        contracts,
    };
};

export const ContractsContainer = connect(
    mapStateToProps,
    null,
)(ContractsDisplay);
