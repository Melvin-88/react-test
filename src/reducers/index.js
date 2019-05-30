import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import ContactsReducer from './contactsReducer';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    form: formReducer,
    router: routerReducer,
    contacts: ContactsReducer,
});

export default rootReducer;
