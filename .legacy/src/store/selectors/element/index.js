import { createSelector } from 'reselect';
import {
  propOr,
  pick,
  pipe,
  defaultTo,
  prop,
  map,
  cond,
  equals,
  pathOr,
  applySpec,
  anyPass,
  isNil,
  is,
  match,
  head,
  last,
  path,
  always,
  complement,
  toPairs
} from 'ramda';

import { TYPE } from 'common/constants';
import { getPathname } from 'store/selectors/router';

export const getElement = propOr({}, 'element');

export const getElementLoadingStatus = createSelector(getElement, anyPass([prop('fetching'), prop('initial')]));

export const getElementIdByPath = createSelector(getPathname, pipe(match(/\d+/g), head));

export const getElementData = createSelector(getElement, pipe(prop('data'), defaultTo({})));

export const getElementType = createSelector(
  getElement,
  pathOr(TYPE.UNKNOWN, ['data', 'classification', 'type', 'value'])
);

export const getValue = cond([
  [
    // TODO Exclude specific property types before future release
    pipe(path(['property', 'value']), anyPass([isNil, equals('isotopicAbundances'), equals('electronConfiguration')])),
    () => ({ value: null, unit: null, type: 'ordinary' })
  ],
  [
    pipe(path(['property', 'value']), complement(is(Object))),
    pipe(
      prop('property'),
      applySpec({
        value: prop('value'),
        unit: prop('unit'),
        type: always('ordinary')
      })
    )
  ],
  [
    pipe(path(['property', 'value']), is(Object)),
    pipe(
      prop('property'),
      applySpec({
        value: prop('value'),
        unit: prop('unit'),
        type: always('exponential')
      })
    )
  ]
]);

export const getProperties = pipe(
  toPairs,
  map(
    applySpec({
      label: head,
      value: pipe(
        applySpec({
          label: head,
          property: last
        }),
        getValue
      )
    })
  )
);

export const getBasicPropertiesTypes = pick(['atomicWeight', 'atomicNumber']);
export const getDomainPropertiesTypes = pick([
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
]);

export const getPropertyAccrordingSchema = applySpec({
  label: head,
  isMeasurable: pipe(last, equals('number'))
});

export const getSchemaBasicProperties = pipe(getBasicPropertiesTypes, toPairs, map(getPropertyAccrordingSchema));

export const getSchemaDomainProperties = pipe(
  getDomainPropertiesTypes,
  toPairs,
  map(
    applySpec({
      label: head,
      properties: pipe(last, toPairs, map(getPropertyAccrordingSchema))
    })
  )
);

export const getBasicProperties = createSelector(
  getElementData,
  pick(['symbol', 'atomicWeight', 'atomicNumber', 'name'])
);

export const getDomainProperties = pipe(
  getDomainPropertiesTypes,
  toPairs,
  map(
    applySpec({
      label: head,
      domain: pipe(last, getProperties)
    })
  )
);

export const getDomains = createSelector(getElementData, getDomainProperties);
