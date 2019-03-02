import * as actions from '../actions';
import {handleActions} from 'redux-actions';

const initialState = {
    contracts_list: null,
};

const ContractsReducer = handleActions(
    {
        [actions.saveContracts]: (state, {payload}) => {
            return {
                ...state,
                contracts_list: payload,
            };
        },
    },
    initialState,
);

export default ContractsReducer;
