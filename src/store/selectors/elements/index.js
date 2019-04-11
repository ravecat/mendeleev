import { createSelector } from 'reselect';
import { sortBy, prop, path, compose, map, gte, lte, values, filter } from 'ramda';
import { GROUPS } from 'common/constants';

export const getElements = createSelector(
  ({ elements } = {}) => elements.data,
  sortBy(prop('atomic_number'))
);

export const getMaxAtomicNumber = createSelector(
  getElements,
  elements => prop('atomic_number', elements[elements.length - 1])
);

export const getMaxPeriod = createSelector(
  getElements,
  elements => path(['classification', 'period', 'value'], elements[elements.length - 1])
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
