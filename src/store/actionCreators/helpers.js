/* 
Helper for return bundle of typical actions like
FETCH/MYDATA, FETCH/MYDATA_REQUEST, FETCH/MYDATA_SUCCESS, FETCH/MYDATA_FAILURE
*/
import { createAction } from 'redux-actions';

export const createActionBundle = type => ({
  fetch: createAction(type),
  request: createAction(`${type}_REQUEST`),
  success: createAction(`${type}_SUCCESS`),
  faiure: createAction(`${type}_FAILURE`)
});
