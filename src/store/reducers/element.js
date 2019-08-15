import { handleActions } from 'redux-actions';
import { mergeLeft } from 'ramda';
import { requestElementSuccess, requestElement } from 'store/actions/element';

const initialSate = {
  data: {},
  initial: true,
  fetching: false,
  fetched: false
};

export const element = handleActions(
  {
    [requestElement]: mergeLeft({ initial: false, fetching: true }),
    [requestElementSuccess]: (state, { payload }) =>
      mergeLeft({ data: payload?.data?.[0] ?? initialSate.state, fetched: true, fetching: false }, state)
  },
  initialSate
);
