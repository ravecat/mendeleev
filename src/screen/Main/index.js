import Main from './Main';

import withLoading from 'common/hoc/withLoading';
import { requestElements } from 'store/actions/element';
import { getElementsLoadingStatus } from 'store/selectors/elements';

export default withLoading({
  selector: getElementsLoadingStatus,
  action: requestElements
})(Main);
