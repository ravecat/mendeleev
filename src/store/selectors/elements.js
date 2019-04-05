import { createSelector } from 'reselect';
import { sortBy, prop, path, compose, map, gte, lte, values } from 'ramda';
import { GROUPS } from 'common/constants';

export const getElements = createSelector(
  ({ elements }) => elements.data,
  sortBy(prop('atomic_number'))
);

export const getMaxAtomicNumber = createSelector(
  getElements,
  elements => elements.length
);

export const getMaxPeriod = createSelector(
  [getElements, getMaxAtomicNumber],
  (elements, maxAtomicNumber) => path(['classification', 'period', 'value'], elements[maxAtomicNumber])
);

export const getBaseElements = createSelector(
  getElements,
  elements => elements.reduce(
    (acc, { classification: { group: { value }}}, idx, elements) => lte(value, 2) || gte(value, 13) ? 
      [...acc, elements[idx]] :
      [...acc],
    []
  )
);

export const getElementGroups = createSelector(
  getElements,
  elements => {
    const sortedGroups = compose(
      sortBy(compose(prop(0), prop('set'))),
      values
    )(GROUPS);

    const groups = map(
      ({ title, set: [start, end] }) => ({
        title,
        set: elements.slice(start - 1, end)
      }),
      sortedGroups
    );
      
    return groups;
  }
);
