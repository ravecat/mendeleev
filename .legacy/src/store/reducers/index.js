import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { elements } from './elements';
import { element } from './element';

export const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    elements,
    element
  });
