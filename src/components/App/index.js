import { compose } from 'ramda';

import View from './view';

import { requestElements } from 'store/actions/element';
import { getElementsLoadingStatus } from 'store/selectors/elements';
import withLoading from 'common/hoc/withLoading';

export default compose(
  withLoading({
    selector: getElementsLoadingStatus,
    action: requestElements
  })
)(View);
