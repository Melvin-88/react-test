import {createSelector} from 'reselect';

const allCustomers = state => state.customers.customers_list;

export const getAllCustomers = createSelector(
    allCustomers,
    state => state,
);
