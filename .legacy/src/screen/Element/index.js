import { connect } from 'react-redux';
import { applySpec, compose } from 'ramda';

import Element from './Element';

import { requestElement } from 'store/actions/element';
import { getDomains, getBasicProperties, getElementLoadingStatus, getElementIdByPath } from 'store/selectors/element';
import withLoading from 'common/hoc/withLoading';

export default compose(
  withLoading({
    selector: getElementLoadingStatus,
    action: requestElement,
    paramSelector: getElementIdByPath
  }),
  connect(
    applySpec({
      domains: getDomains,
      element: getBasicProperties
    })
  )
)(Element);
