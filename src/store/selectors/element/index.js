import { createSelector } from 'reselect';
import { propOr, pick, pipe, defaultTo, prop, map, cond, equals, pathOr, anyPass, isNil, is, match, head } from 'ramda';

import { TYPE } from 'common/constants';
import { getPathname } from 'store/selectors/router';

export const getElement = propOr({}, 'element');

export const getElementLoadingStatus = createSelector(getElement, anyPass([prop('fetching'), prop('initial')]));

export const getElementIdByPath = createSelector(getPathname, pipe(match(/\d+/g), head));

export const getElementData = createSelector(getElement, pipe(prop('data'), defaultTo({})));

export const getElementType = createSelector(
  getElement,
  pathOr(TYPE.UNKNOWN, ['data', 'element', 'classification', 'type'])
);

export const getValue = cond([
  [
    // TODO Exclude specific property types before future release
    ({ property: { value } }) => anyPass([isNil, equals('isotopicAbundances'), equals('electronConfiguration')])(value),
    () => ({ value: null, unit: null, type: 'ordinary' })
  ],
  [
    ({ property: { value } }) => !is(Object, value),
    ({ property: { value, unit } }) => ({ value, unit, type: 'ordinary' })
  ],
  [
    ({ property: { value } }) => is(Object, value),
    ({ property: { value, unit } }) => ({ value, unit, type: 'exponential' })
  ]
]);

export const getProperties = pipe(
  Object.entries,
  map(([label, property]) => ({
    label,
    value: getValue({ label, property })
  }))
);

export const getBasicProperties = createSelector(
  getElementData,
  pick(['symbol', 'atomicWeight', 'atomicNumber', 'name'])
);

export const getDomainProperties = pipe(
  pick([
    'classification',
    'abundances',
    'nuclear',
    'thermal',
    'reactivity',
    'safety',
    'atomic',
    'electrical',
    'magnetic',
    'physical'
  ]),
  Object.entries,
  map(([label, domain]) => ({
    label,
    domain: getProperties(domain)
  }))
);

export const getDomains = createSelector(getElementData, getDomainProperties);
