import { connect } from 'react-redux';
import { requestElement } from 'store/actions/element';
import { applySpec, compose } from 'ramda';
import { getDomains, getBasicProperties, getElementLoadingStatus, getElementIdByPath } from 'store/selectors/element';
import withLoading from 'common/hoc/withLoading';

import Element from './Element';

export default compose(
  withLoading({
    selector: getElementLoadingStatus,
    action: requestElement,
    paramSelector: getElementIdByPath
  }),
  connect(
    applySpec({
      domains: getDomains,
      basicData: getBasicProperties
    })
  )
)(Element);
