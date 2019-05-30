import * as actions from '../actions';
import {handleActions} from 'redux-actions';

const initialState = {
    contactsList: [],
    activePage: 1,
};

const ContactsReducer = handleActions(
    {
        [actions.saveContactsListAction]: (state, {payload}) => {
            return {
                ...state,
                contactsList: payload,
            };
        },
        [actions.saveActivePageAction]: (state, {payload}) => {
            return {
                ...state,
                activePage: payload,
            };
        },
    },
    initialState,
);

export default ContactsReducer;
