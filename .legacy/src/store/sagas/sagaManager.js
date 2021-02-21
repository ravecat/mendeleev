import { createAction } from 'redux-actions';
import { take, fork, cancel } from 'redux-saga/effects';

import sagas from '.';

const hmrCancelSagas = createAction('HMR/CANCEL_SAGAS');

function createAbortableSaga(saga) {
  if (process.env.NODE_ENV === 'development') {
    return function* main() {
      const sagaTask = yield fork(saga);

      yield take(hmrCancelSagas);
      yield cancel(sagaTask);
    };
  }
  return saga;
}

const SagaManager = {
  startSagas(sagaMiddleware) {
    sagas.map(createAbortableSaga).forEach(abortableSaga => sagaMiddleware.run(abortableSaga));
  },

  cancelSagas(store) {
    store.dispatch(hmrCancelSagas());
  }
};

export default SagaManager;
