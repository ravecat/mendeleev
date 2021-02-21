import { handleActions } from 'redux-actions';
import { mergeLeft } from 'ramda';

import { requestElementsSuccess, requestElements } from 'store/actions/element';

const initialState = { data: [], initial: true, fetching: false, fetched: false };

export const elements = handleActions(
  {
    [requestElements]: mergeLeft({ initial: false, fetching: true }),
    [requestElementsSuccess]: (state, { payload }) =>
      mergeLeft({ data: payload?.data ?? initialState.data, fetched: true, fetching: false }, state)
  },
  initialState
);
