import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import sagaManager from './sagas/sagaManager';
import { createRootReducer } from './reducers';

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';

const isDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = isProduction ? compose : isDevToolsExtension || compose;

export const history = createBrowserHistory();

export default persistedState => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  if (isDevelopment && !isDevToolsExtension) {
    const { createLogger } = require('redux-logger');
    const logger = createLogger({
      collapsed: true
    });

    middlewares.push(logger);
  }

  const enhancers = composeEnhancers(applyMiddleware(...middlewares));
  const rootReducer = createRootReducer(history);

  const store = createStore(rootReducer, persistedState, enhancers);

  sagaManager.startSagas(sagaMiddleware);

  if (module.hot) {
    // enable hot module reloading for reducers
    module.hot.accept('./reducers', () => {
      require('./reducers')
        .default()
        .then(nextReducer => {
          console.warn('Reducers got updated');
          store.replaceReducer(nextReducer);
        });
    });
    // enable hot module reloading for sagas
    module.hot.accept(() => {
      console.warn('Sagas got updated');
      sagaManager.cancelSagas(store);
      require('./sagas/sagaManager').default.startSagas(sagaMiddleware);
    });
  }

  return store;
};
