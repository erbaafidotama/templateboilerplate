import { call, put, takeLatest, all } from 'redux-saga/effects';

import {
  SAGA_GET_LIST_COSTUMERS,
  REDUCER_GET_LIST_COSTUMERS,
} from './constants';

import { apiGetListCostumers } from './api';

export function* sagaGetListCostumers(action) {
  console.log('YEEAA');
  const dataCostumers = yield call(apiGetListCostumers, action);

  yield put({
    type: REDUCER_GET_LIST_COSTUMERS,
    results: dataCostumers,
  });
}

// Individual exports for testing
export default function* costumerSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(SAGA_GET_LIST_COSTUMERS, sagaGetListCostumers);
}
