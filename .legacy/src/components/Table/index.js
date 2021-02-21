import { connect } from 'react-redux';
import { applySpec } from 'ramda';

import Table from './Table';

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
