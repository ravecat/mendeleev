import state from 'store/__test__/state';

import { getElementData } from '../index';

describe('selector/element', () => {
  it('get element data', () => {
    const received = getElementData(state);

    expect(received).toEqual(
      expect.objectContaining({
        atomicNumber: expect.any(Number),
        atomicWeight: expect.any(Number),
        name: expect.any(String)
      })
    );
  });

  it('fallback get element data', () => {
    const emptyState = { element: { data: {} } };
    const received = getElementData(emptyState);

    expect(received).toEqual({});
  });
});
