import { put, takeLatest, select } from "redux-saga/effects";
import {getAllCustomers, getAllContracts} from '../selectors/'
import {
    removeCustomer,
    saveContracts,
    saveCustomers
} from "../actions";

//WORKERS
function* removeCustomerWorker({payload}) {
    //get lists customers and contracts
    const customers = yield select(getAllCustomers);
    const contracts = yield select(getAllContracts);
    //get new lists for customers and contracts
    let newCustomersList = customers.filter(e=>e.id !== payload);
    let newContractsList = contracts.filter(e=>e.customerId !== payload);
    //save new lists
    yield put(saveContracts(newContractsList));
    yield put(saveCustomers(newCustomersList));
}

// WATCHERS
export function* removeCustomerWatcher() {
    yield takeLatest(removeCustomer, removeCustomerWorker);
}