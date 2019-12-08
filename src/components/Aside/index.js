import { connect } from 'react-redux';
import { applySpec } from 'ramda';

import Aside from './Aside';

import { getBasicProperties, getElementType, getElementLoadingStatus } from 'store/selectors/element';

export default connect(
  applySpec({
    fetching: getElementLoadingStatus,
    element: getBasicProperties,
    type: getElementType
  })
)(Aside);
