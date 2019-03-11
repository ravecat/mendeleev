import { handleActions } from 'redux-actions';
import { fetchElementsSuccess } from 'store/actionCreators/element';

export const elements =  handleActions({
    [fetchElementsSuccess]: (state, { payload }) => ({
      data: payload.data
    })
  },
  { data: [] }
);
