import ApiCreator from './api';
import {BASE_URL} from '../config';
const api = ApiCreator(BASE_URL);

export const getContactListApi = ({begin=0, end=10}={}) => {
    let url = `contacts?_start=${begin}&_end=${end}`;
    return api.get(url);
};

export const addContactApi = ({data}) =>
    api.post('contacts', {
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });

export const removeContactApi = id =>  api.delete(`contacts/111${id}`);

export const editContactApi = ({data, id}) =>
    api.patch(`contacts/${id}`, {
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });