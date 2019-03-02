import { put } from "redux-saga/effects";
import {
    saveContracts,
    saveCustomers,
} from "../actions";
import {InitialData} from '../initialData';

export function* initData() {
    //save all Contracts
    yield put(saveContracts(InitialData.contracts));
    //save all Customers
    yield put(saveCustomers(InitialData.customers));
}
