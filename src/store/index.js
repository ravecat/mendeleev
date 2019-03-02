import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

const isProduction = process.env.NODE_ENV === 'production'
const isDevelopment = process.env.NODE_ENV === 'development'

const isDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = isProduction ? compose : isDevToolsExtension || compose;

export default persistedState => {
  const middlewares = [];

  if ( isDevelopment && !isDevToolsExtension) {
    const { createLogger } = require('redux-logger');
    const logger = createLogger({
      collapsed: true,
    });

    middlewares.push(logger);
  }

  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  const store = createStore(reducers, persistedState, enhancer);

  if (module.hot) {
    module.hot.accept(() => store.replaceReducer(require('./reducers').default));
  }

  return store;
};
