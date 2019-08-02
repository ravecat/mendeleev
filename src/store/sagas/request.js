import { put, call, takeEvery } from 'redux-saga/effects';
import camelCase from 'camel-case';
import * as api from 'services/api';

function* handleRequest({ payload, type }) {
  const meta = { primaryPayload: payload };
  const [ACTION, DOMAIN] = type.split('/');

  try {
    const methodName = camelCase(type);
    const method = api[methodName];
    const { data, status } = yield call(method, payload);

    if (!method) {
      throw new Error(`API method "${methodName}" not found`);
    }

    yield put({
      type: `${ACTION}/SUCCESS/${DOMAIN}`,
      payload: {
        data,
        status
      },
      meta
    });
  } catch (error) {
    if (error.response) {
      yield put({
        type: `${ACTION}/FAILURE/${DOMAIN}`,
        payload: {
          data: error?.response?.data,
          status: error?.response?.status
        },
        meta
      });
      return;
    }

    if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      yield put({
        type: `${ACTION}/FAILURE/${DOMAIN}`,
        payload: { response: null, status: null },
        meta
      });

      return;
    }

    console.error('Error', error.message);
  }
}

const requestAction = ({ type }) =>
  type.startsWith('REQUEST/') && !type.startsWith('REQUEST/SUCCESS') && !type.startsWith('REQUEST/FAILURE');

export default function* root() {
  yield takeEvery(requestAction, handleRequest);
}
