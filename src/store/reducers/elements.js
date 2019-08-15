import { handleActions } from 'redux-actions';
import { requestElementsSuccess } from 'store/actions/element';

export const elements = handleActions(
  {
    [requestElementsSuccess]: (state, { payload }) => ({
      data: payload.data
    })
  },
  { data: [] }
);
