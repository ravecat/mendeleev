import { put, call, takeEvery } from 'redux-saga/effects';
import camelCase from 'camel-case';
import * as api from 'services/api';

const handleRequest = function* ({ payload, type }) {
  const methodName = camelCase(type);
  const method = api[methodName];

  if (!method) {
    throw new Error(`API method "${methodName}" not found`);
  }

  const request = yield call(method, payload);

  if (request.error) {
    const { message, response } = request;
    const errorPayload = {};

    if (request.system) {
      errorPayload.message = message;
    } else {
      errorPayload.response = response;
    }
    
    yield put({
      type: `${type}_FAILURE`,
      payload: errorPayload,
    });
    return;
  }

  yield put({
    type: `${type}_SUCCESS`,
    payload: {
      response: request.response,
    },
  });
};

const requestAction = ({ type }) =>
  type.startsWith('FETCH/') && !type.endsWith('_SUCCESS') && !type.endsWith('_FAILURE');

export default function* root() {
  yield takeEvery(requestAction, handleRequest);
}
