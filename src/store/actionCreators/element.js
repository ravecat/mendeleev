import { createRequestActionBundle } from './helpers';

export const {
  request: requestElements,
  success: requestElementsSuccess,
  failure: requestElementsFailure
} = createRequestActionBundle('ELEMENTS');
