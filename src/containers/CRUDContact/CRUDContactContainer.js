import {connect} from 'react-redux';
import {AddContactDisplay} from './CRUDContactDisplay';
import {currentContactSelector} from '../../selectors';
import {saveContactAction, editContactAction} from '../../actions/'

const mapDispatchToProps = {
    saveContactAction,
    editContactAction
};

const mapStateToProps = (state, props) => {
    const {id} = props.match.params;
    const currentItem = currentContactSelector(state, id);
    return {
        currentItem,
        id,
        initialValues: {
            name: (currentItem && currentItem.name) || '',
            address: (currentItem && currentItem.address) || '',
            email: (currentItem && currentItem.email) || '',
            date_call: (currentItem && currentItem.date_call) || '',
            description: (currentItem && currentItem.description) || '',
        }
    };
};

export const AddContactContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddContactDisplay);
