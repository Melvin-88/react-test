import { put, call } from "redux-saga/effects";
import * as API from '../api/';
import {
    saveContactsListAction
} from "../actions";

export function* initData() {
    //save all Contacts
    const contactsList = yield call(API.getContactListApi);
    if(contactsList && contactsList.length)
        yield put(saveContactsListAction(contactsList));
}
