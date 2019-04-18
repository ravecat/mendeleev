import { connect } from 'react-redux';
import { compose } from 'ramda';
import { getElements, getMaxAtomicNumber, getMaxPeriod, getBaseElements, getElementGroups, getPeriods, getTransElement, getNonTransElement } from 'store/selectors/elements';
import Table from './Table';

const mapStateToProps = state => ({
  elements: getElements(state),
  periods: getPeriods(state),
  maxAtomicNumber: getMaxAtomicNumber(state),
  maxPeriod: getMaxPeriod(state),
  baseElements: getBaseElements(state),
  transElements: getTransElement(state),
  nonTransElements: getNonTransElement(state),
  groups: getElementGroups(state),
});

export default compose(
  connect(mapStateToProps),
)(Table);
