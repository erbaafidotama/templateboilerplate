/*
 *
 * Costumer actions
 *
 */

import { SAGA_GET_LIST_COSTUMERS } from './constants';

export function actGetListCostumers(action) {
  return {
    type: SAGA_GET_LIST_COSTUMERS,
    data: action,
  };
}
