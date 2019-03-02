import { createSelector } from "reselect";

const AllContracts = state => state.contracts.contracts_list;

export const getAllContracts = createSelector(
    AllContracts,
    state => state
);
