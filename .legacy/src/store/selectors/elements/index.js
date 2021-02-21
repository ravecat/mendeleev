import { createSelector } from 'reselect';
import {
  T,
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
  pipe,
  always,
  applySpec,
  complement,
  isNil,
  head,
  cond,
  is
} from 'ramda';

import { expandObj } from 'utils/ramda';
import { BLOCK } from 'common/constants';

export const getState = ({ elements }) => elements;

export const getBlockValue = path(['classification', 'block', 'value']);
export const getPeriodValue = path(['classification', 'period', 'value']);

export const isTransElement = pipe(getBlockValue, anyPass([equals(BLOCK.f), equals(BLOCK.g)]));

export const isBaseElement = pipe(getBlockValue, anyPass([equals(BLOCK.s), equals(BLOCK.p)]));

export const getElementsLoadingStatus = createSelector(getState, anyPass([prop('fetching'), prop('initial')]));

export const getElements = createSelector(pathOr([], ['elements', 'data']), sortBy(prop('atomicNumber')));

export const getLastElement = createSelector(getElements, last);

export const getMaxAtomicNumber = createSelector(getLastElement, prop('atomicNumber'));

export const getMaxPeriod = createSelector(getLastElement, getPeriodValue);

const separateByPeriod = groupWith(eqBy(getPeriodValue));

const separateByBlock = groupWith(eqBy(getBlockValue));

const separatePeriodsByBlock = map(separateByBlock);

export const getPeriods = createSelector(getElements, separateByPeriod);

export const getBaseElements = createSelector(getElements, filter(isBaseElement));

const setGroupTitle = map(set => ({ set, title: `${set[0].name} subgroup` }));

const filterNonTransElement = reject(isTransElement);

export const getTransElement = createSelector(
  getElements,
  pipe(filter(isTransElement), separateByPeriod, setGroupTitle)
);

export const getNonTransElement = createSelector(getElements, filterNonTransElement);

const filterNonBaseElement = reject(isBaseElement);

export const getElementGroups = createSelector(
  getElements,
  pipe(filterNonBaseElement, separateByPeriod, separatePeriodsByBlock, unnest, setGroupTitle)
);

export const getChartData = ({ property }) =>
  createSelector(
    getElements,
    pipe(
      map(
        pipe(
          expandObj,
          cond([
            [
              () => anyPass([equals('atomicNumber'), equals('atomicWeight')])(property),
              applySpec({ decimal: prop(property), element: prop('symbol'), unit: always(null) })
            ],
            [
              pipe(path([property, 'value']), complement(is(Object))),
              applySpec({
                element: prop('symbol'),
                decimal: pipe(path([property, 'value']), Number),
                unit: path([property, 'unit'])
              })
            ],
            [
              pipe(path([property, 'value']), is(Object)),
              applySpec({
                value: path([property, 'value']),
                decimal: pipe(path([property, 'value']), ({ p, M, n }) => M * n ** p),
                unit: path([property, 'unit']),
                exponential: pipe(path([property, 'value']), ({ p, M }) => `${M}E${p}`),
                element: prop('symbol')
              })
            ],
            [T, always(null)]
          ])
        )
      ),
      filter(complement(anyPass([isNil, pipe(prop('decimal'), equals(NaN)), complement(prop('decimal'))]))),
      applySpec({
        data: map(obj => [prop('element', obj), prop('decimal', obj)]),
        unit: pipe(head, prop('unit'))
      })
    )
  );
