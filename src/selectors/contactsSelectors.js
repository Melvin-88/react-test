import { createSelector } from "reselect";

export const contactListSelector = createSelector(
    state => state.contacts.contactsList,
    state => state
);

export const currentContactSelector = createSelector(
    (state, id) => {
        const {contactsList} = state.contacts;
        if(!contactsList || (contactsList && !contactsList.data)) return null;
        const itemObj = contactsList.data.filter(el => +el.id === +id);
        return itemObj.length ? itemObj[0] : null;
    },
    state => state
);
