import { createSelector } from 'reselect';
import { sortBy, prop, path, compose, map, gte, lte, values, filter, eqBy, propEq, anyPass, groupWith, pathOr, last } from 'ramda';
import { GROUPS, BLOCK } from 'common/constants';

export const getElements = createSelector(
  pathOr([], ['elements', 'data']),
  sortBy(prop('atomic_number'))
);

export const getLastElement = createSelector(
  getElements,
  last
);

export const getMaxAtomicNumber = createSelector(
  getLastElement,
  prop('atomic_number')
);

export const getMaxPeriod = createSelector(
  getLastElement,
  path(['classification', 'period', 'value'])
);

export const getPeriods = createSelector(
  getElements,
  groupWith((a, b) => eqBy(path(['classification', 'period', 'value']), a, b))
);

export const getBaseElements = createSelector(
  getElements,
  elements => elements.reduce(
    (acc, { classification: { group: { value }}}, idx, elements) => value && lte(value, 2) || gte(value, 13) ? 
      [...acc, elements[idx]] :
      [...acc],
    []
  )
);

export const getTransElement = createSelector(
  getElements,
  filter(compose(
    anyPass([propEq(BLOCK.f), propEq(BLOCK.g)]),
    path(['classification', 'period', 'value'])
  ))
);

export const getElementGroups = createSelector(
  [getElements, getMaxAtomicNumber],
  (elements, maxAtomicNumber) => {
    const startAtomicNumberiInSet = compose(prop(0), prop('set'));
    
    const sortedGroups = compose(
      sortBy(startAtomicNumberiInSet),
      filter(({ set: [start] }) => lte(start, maxAtomicNumber)),
      values
    )(GROUPS);
    
    const groups = map(
      ({ title, set: [start, end] }) => ({
        title,
        set: elements.reduce(
          (acc, { atomic_number }, idx, elements) => lte(atomic_number, end) && gte(atomic_number, start) ? 
            [...acc, elements[idx]] :
            [...acc],
          []
        )
      }),
      sortedGroups
    );
      
    return groups;
  }
);
