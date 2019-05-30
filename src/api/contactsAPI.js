import ApiCreator from './api';
import {BASE_URL} from '../config';
const api = ApiCreator(BASE_URL);

export const getContactListApi = ({page=1, limit=10}={}) => {
    let url = `contacts?_page=${page}&_limit=${limit}`;
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

export const removeContactApi = id =>  api.delete(`contacts/${id}`);

export const editContactApi = ({data, id}) =>
    api.patch(`contacts/${id}`, {
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });