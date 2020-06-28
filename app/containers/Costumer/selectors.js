import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the costumer state domain
 */

const selectCostumerDomain = state => state.costumer || initialState;
// const listCostumers = state => state.listCostumers || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Costumer
 */

const makeSelectCostumer = () =>
  createSelector(
    selectCostumerDomain,
    substate => substate,
  );

const makeSelectGetListCostumers = () =>
  createSelector(
    selectCostumerDomain,
    substate => substate.listCostumers,
  );

// export default makeSelectCostumer;
export { makeSelectCostumer, selectCostumerDomain, makeSelectGetListCostumers };
