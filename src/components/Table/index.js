import { compose, withProps } from 'recompose';
import { connect } from 'react-redux';
import { isEmpty, sortBy, prop, path } from 'ramda';
import withCheckData from 'common/hoc/withCheckData';
import { getElements } from 'store/selectors/elements';
import Table from './Table';

const mapStateToProps = state => ({
  elements: getElements(state)
});

export default compose(
  connect(mapStateToProps),
  withCheckData(({ elements }) => isEmpty(elements)),
  withProps(({ elements }) => {
    const sortedElements = sortBy(prop('atomic_number'))(elements);
    const maxPeriod = path(['classification', 'period', 'value'], sortedElements[sortedElements.length - 1]);

    return {
      elements: sortedElements,
      maxPeriod
    };
  })
)(Table);
