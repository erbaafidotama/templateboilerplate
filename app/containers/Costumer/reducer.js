/*
 *
 * Costumer reducer
 *
 */
import produce from 'immer';
import { REDUCER_GET_LIST_COSTUMERS } from './constants';

export const initialState = {
  listCostumers: {},
};

/* eslint-disable default-case, no-param-reassign */
const costumerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case REDUCER_GET_LIST_COSTUMERS:
        console.log(action);
        draft.listCostumers = action.results;
        break;
      // default:
      //   return state;
    }
  });

export default costumerReducer;
