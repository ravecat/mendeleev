import { createActionBundle } from './helpers';

export const {
  fetch: fetchElements,
  request: fetchElementsRequest,
  success: fetchElementsSuccess,
  failure: fetchElementsFailure
} = createActionBundle('FETCH/ELEMENTS');
