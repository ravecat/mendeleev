import { createSelector } from 'reselect';
import {
  sortBy,
  prop,
  path,
  map,
  reject,
  unnest,
  filter,
  eqBy,
  equals,
  anyPass,
  groupWith,
  pathOr,
  last,
  pipe
} from 'ramda';
import { BLOCK } from 'common/constants';

export const getBlockValue = path(['classification', 'block', 'value']);
export const getPeriodValue = path(['classification', 'period', 'value']);

export const isTransElement = pipe(
  getBlockValue,
  anyPass([equals(BLOCK.f), equals(BLOCK.g)])
);

export const isBaseElement = pipe(
  getBlockValue,
  anyPass([equals(BLOCK.s), equals(BLOCK.p)])
);

export const getElements = createSelector(
  pathOr([], ['elements', 'data']),
  sortBy(prop('atomicNumber'))
);

export const getLastElement = createSelector(
  getElements,
  last
);

export const getMaxAtomicNumber = createSelector(
  getLastElement,
  prop('atomicNumber')
);

export const getMaxPeriod = createSelector(
  getLastElement,
  getPeriodValue
);

const separateByPeriod = groupWith(eqBy(getPeriodValue));

const separateByBlock = groupWith(eqBy(getBlockValue));

const separatePeriodsByBlock = map(separateByBlock);

export const getPeriods = createSelector(
  getElements,
  separateByPeriod
);

export const getBaseElements = createSelector(
  getElements,
  filter(isBaseElement)
);

const setGroupTitle = map(set => ({ set, title: `${set[0].name} subgroup` }));

const filterNonTransElement = reject(isTransElement);

export const getTransElement = createSelector(
  getElements,
  pipe(
    filter(isTransElement),
    separateByPeriod,
    setGroupTitle
  )
);

export const getNonTransElement = createSelector(
  getElements,
  filterNonTransElement
);

const filterNonBaseElement = reject(isBaseElement);

export const getElementGroups = createSelector(
  getElements,
  pipe(
    filterNonBaseElement,
    separateByPeriod,
    separatePeriodsByBlock,
    unnest,
    setGroupTitle
  )
);
