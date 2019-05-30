import { put, takeLatest, call, select } from "redux-saga/effects";
import * as API from '../api/';
import {history} from '../';
import {
    removeContactAction,
    saveContactsListAction,
    saveContactAction,
    editContactAction,
    getContactsListAction
} from "../actions";
import {
    contactListSelector
} from "../selectors";

//WORKERS
function* getContactsListWorker({payload}) {
    const addContact = yield call(API.getContactListApi, payload);
    if(addContact){
        yield put(saveContactsListAction(addContact));
    }
}

function* addContactWorker({payload}) {
    const addContact = yield call(API.addContactApi, payload);
    if(addContact){
        const currentData = yield select(contactListSelector);
        currentData.push(addContact);
        yield put(saveContactsListAction(currentData));
        history.push('/');
    }
}

function* removeContactWorker({payload}) {
    const removeContact = yield call(API.removeContactApi, payload);
    if(removeContact){
        const response = yield call(API.getContactListApi);
        if(response) yield put(saveContactsListAction(response));
    }
}

function* editContactWorker({payload}) {
    const editContact = yield call(API.editContactApi, payload);
    if(editContact){
        const {id} = payload;
        const currentData = yield select(contactListSelector);
        const newData = currentData.filter((e)=> +e.id !== +id);
        newData.push(editContact);
        yield put(saveContactsListAction(newData));
        history.push('/');
    };
}

// WATCHERS
export function* getContactsListWatcher() {
    yield takeLatest(getContactsListAction, getContactsListWorker);
}
export function* addContactWatcher() {
    yield takeLatest(saveContactAction, addContactWorker);
}
export function* removeContactWatcher() {
    yield takeLatest(removeContactAction, removeContactWorker);
}
export function* editContactWatcher() {
    yield takeLatest(editContactAction, editContactWorker);
}