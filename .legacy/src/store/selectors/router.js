import { createSelector } from 'reselect';
import { prop, path } from 'ramda';

export const getPathname = createSelector(prop('router'), path(['location', 'pathname']));
