import { createSelector } from "reselect";

export const contactListSelector = createSelector(
    state => state.contacts.contactsList,
    state => state
);

export const activePageSelector = createSelector(
    state => state.contacts.activePage,
    state => state
);

export const currentContactSelector = createSelector(
    (state, id) => {
        if(!state.contacts.contactsList || !state.contacts.contactsList.length) return null;
        const itemObj = state.contacts.contactsList.filter(el => +el.id === +id);
        return itemObj.length ? itemObj[0] : null;
    },
    state => state
);
