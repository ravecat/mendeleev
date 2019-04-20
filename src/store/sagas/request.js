import { put, call, takeEvery } from 'redux-saga/effects';
import camelCase from 'camel-case';
import * as api from 'services/api';

const handleRequest = function*({ payload, type }) {
  const methodName = camelCase(type);
  const method = api[methodName];

  if (!method) {
    throw new Error(`API method "${methodName}" not found`);
  }

  yield put({ type: `${type}_REQUEST` });

  const { data, error } = yield call(method, payload);

  if (error) {
    yield put({
      type: `${type}_FAILURE`,
      payload: error
    });
    return;
  }

  yield put({
    type: `${type}_SUCCESS`,
    payload: {
      data
    }
  });
};

const requestAction = ({ type }) =>
  type.startsWith('FETCH/') && !type.endsWith('_REQUEST') && !type.endsWith('_SUCCESS') && !type.endsWith('_FAILURE');

export default function* root() {
  yield takeEvery(requestAction, handleRequest);
}
