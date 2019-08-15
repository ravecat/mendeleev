import { connect } from 'react-redux';
import { applySpec } from 'ramda';
import {
  getElements,
  getMaxAtomicNumber,
  getMaxPeriod,
  getBaseElements,
  getElementGroups,
  getPeriods,
  getTransElement,
  getNonTransElement
} from 'store/selectors/elements';

import Table from './Table';

const mapStateToProps = applySpec({
  elements: getElements,
  periods: getPeriods,
  maxAtomicNumber: getMaxAtomicNumber,
  maxPeriod: getMaxPeriod,
  baseElements: getBaseElements,
  transElements: getTransElement,
  nonTransElements: getNonTransElement,
  groups: getElementGroups
});

export default connect(mapStateToProps)(Table);
