import { createSelector } from 'reselect';
import {
  sortBy,
  prop,
  path,
  compose,
  map,
  gte,
  lte,
  values,
  reject,
  filter,
  eqBy,
  equals,
  anyPass,
  groupWith,
  pathOr,
  last,
  pipe
} from 'ramda';
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

const separateByPeriod = groupWith((a, b) => eqBy(path(['classification', 'period', 'value']), a, b));

export const getPeriods = createSelector(
  getElements,
  separateByPeriod
);

export const getBaseElements = createSelector(
  getElements,
  elements =>
    elements.reduce(
      (
        acc,
        {
          classification: {
            group: { value }
          }
        },
        idx,
        elements
      ) => ((value && lte(value, 2)) || gte(value, 13) ? [...acc, elements[idx]] : [...acc]),
      []
    )
);

const isTransElement = pipe(
  path(['classification', 'block', 'value']),
  anyPass([equals(BLOCK.f), equals(BLOCK.g)])
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

export const getElementGroups = createSelector(
  [getElements, getMaxAtomicNumber],
  (elements, maxAtomicNumber) => {
    const startAtomicNumberiInSet = compose(
      prop(0),
      prop('set')
    );

    const sortedGroups = compose(
      sortBy(startAtomicNumberiInSet),
      filter(({ set: [start] }) => lte(start, maxAtomicNumber)),
      values
    )(GROUPS);

    const groups = map(
      ({ title, set: [start, end] }) => ({
        title,
        set: elements.reduce(
          (acc, { atomic_number }, idx, elements) =>
            lte(atomic_number, end) && gte(atomic_number, start) ? [...acc, elements[idx]] : [...acc],
          []
        )
      }),
      sortedGroups
    );

    return groups;
  }
);
