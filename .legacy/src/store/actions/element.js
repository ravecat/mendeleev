import { createRequestActionBundle } from './helpers';

export const {
  request: requestElements,
  success: requestElementsSuccess,
  failure: requestElementsFailure
} = createRequestActionBundle('ELEMENTS');

export const {
  request: requestElement,
  success: requestElementSuccess,
  failure: requestElementFailure
} = createRequestActionBundle('ELEMENT');
