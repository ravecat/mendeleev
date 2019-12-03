import {
  getMaxAtomicNumber,
  getMaxPeriod,
  getBaseElements,
  getElementGroups,
  getPeriodValue,
  getBlockValue,
  isTransElement,
  isBaseElement
} from '../index';

import state from 'store/__test__/state';

describe('selector/elements', () => {
  let element;

  beforeEach(() => {
    element = state?.elements?.data[0];
  });

  it('get period value', () => {
    const received = getPeriodValue(element);

    expect(received).toEqual('2');
  });

  it('is transition element', () => {
    const received = isTransElement(element);

    expect(received).toEqual(false);
  });

  it('is base element', () => {
    const received = isBaseElement(element);

    expect(received).toEqual(true);
  });

  it('get block value', () => {
    const received = getBlockValue(element);

    const mockedBlock = 's';

    expect(received).toEqual(mockedBlock);
  });

  it('get max atomic number', () => {
    const received = getMaxAtomicNumber(state);

    const mockedMaxAtomicNumber = 110;

    expect(received).toEqual(mockedMaxAtomicNumber);
  });

  it('get max period', () => {
    const received = getMaxPeriod(state);

    const mockedMaxPeriod = '7';

    expect(received).toEqual(mockedMaxPeriod);
  });

  it('get elements for mini view', () => {
    const received = getBaseElements(state).map(({ atomicNumber }) => atomicNumber);

    const mockedBaseElementsAtomicNumber = [2, 3, 4];

    expect(received).toEqual(mockedBaseElementsAtomicNumber);
  });

  it('get elements groups', () => {
    // Get 110 element data from mocked state
    const received = getElementGroups(state)[0].set[0].atomicNumber;

    const mockedAtomicMassFromSpecificGroup = 110;

    expect(received).toEqual(mockedAtomicMassFromSpecificGroup);
  });
});