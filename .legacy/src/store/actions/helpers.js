/* 
Helper for return bundle of typical actions like
FETCH/MYDATA, FETCH/MYDATA_REQUEST, FETCH/MYDATA_SUCCESS, FETCH/MYDATA_FAILURE
*/
import { createAction } from 'redux-actions';

export const createRequestActionBundle = domain => ({
  fetch: createAction(`FETCH/${domain}`),
  request: createAction(`REQUEST/${domain}`),
  success: createAction(`REQUEST/SUCCESS/${domain}`),
  faiure: createAction(`REQUEST/FAILURE/${domain}`)
});
