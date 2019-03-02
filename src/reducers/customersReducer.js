import * as actions from '../actions';
import {handleActions} from 'redux-actions';

const initialState = {
    customers_list: null,
};

const CustomersReducer = handleActions(
    {
        [actions.saveCustomers]: (state, {payload}) => {
            return {
                ...state,
                customers_list: payload,
            };
        },
    },
    initialState,
);

export default CustomersReducer;
