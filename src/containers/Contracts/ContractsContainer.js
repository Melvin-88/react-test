import {connect} from 'react-redux';
import {ContractsDisplay} from './ContractsDisplay';
import {contactListSelector, activePageSelector} from '../../selectors';
import {removeContactAction, getContactsListAction} from '../../actions/'

const mapDispatchToProps = {
    removeContactAction,
    getContactsListAction
};

const mapStateToProps = state => {
    const contacts = contactListSelector(state) || null;
    const activePage = activePageSelector(state);
    return {
        contacts,
        activePage
    };
};

export const ContractsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ContractsDisplay);
