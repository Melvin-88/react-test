import {connect} from 'react-redux';
import {ContractsDisplay} from './ContractsDisplay';
import {contactListSelector} from '../../selectors';
import {removeContactAction, getContactsListAction} from '../../actions/'

const mapDispatchToProps = {
    removeContactAction,
    getContactsListAction
};

const mapStateToProps = state => {
    const contacts = contactListSelector(state) || null;
    return {
        contacts
    };
};

export const ContractsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ContractsDisplay);
