import * as actions from '../actions';
import {handleActions} from 'redux-actions';

const initialState = {
    contactsList: [],
};

const ContactsReducer = handleActions(
    {
        [actions.saveContactsListAction]: (state, {payload}) => {
            return {
                ...state,
                contactsList: payload,
            };
        }
    },
    initialState,
);

export default ContactsReducer;
