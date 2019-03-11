import { createSelector } from 'reselect';

export const getElements = createSelector(
  ({ elements }) => elements.data,
  data => data
);
