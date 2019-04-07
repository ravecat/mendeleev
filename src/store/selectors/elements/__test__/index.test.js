import state from './state.mock';
import { getMaxAtomicNumber, getMaxPeriod, getBaseElements, getElementGroups } from '../index';

describe('selector/elements', () => {
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
    const received = getBaseElements(state).map(element => element['atomic_number']);
    
    const mockedBaseElementsAtomicNumber = [2, 3, 4];

    expect(received).toEqual(mockedBaseElementsAtomicNumber);
  });

  it('get elements groups', () => {
    // Get 110 element data from mocked state
    const received = getElementGroups(state)[5].set[0]['atomic_number'];
    
    const mockedAtomicMassFromSpecificGroup = 110;

    expect(received).toEqual(mockedAtomicMassFromSpecificGroup);
  });
});
