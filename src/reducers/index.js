import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import ContractsReducer from './contractsReducer';
import CustomersReducer from './customersReducer';

const rootReducer = combineReducers({
    router: routerReducer,
    contracts: ContractsReducer,
    customers: CustomersReducer,
});

export default rootReducer;
