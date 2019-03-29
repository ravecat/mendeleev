import { compose, withProps } from 'recompose';
import { connect } from 'react-redux';
import { isEmpty, sortBy, prop, path } from 'ramda';
import withCheckData from 'common/hoc/withCheckData';
import { GROUPS } from 'common/constants';
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
<<<<<<< HEAD

    return {
=======
    // TODO Set specific group for every specific element type
    const scandiumGroup = sortedElements.slice(GROUPS.SCANDIUM_GROUP[0]-1, GROUPS.SCANDIUM_GROUP[1]);

    return {
      scandiumGroup,
>>>>>>> Separate table views to different resolutions
      elements: sortedElements,
      maxPeriod
    };
  })
)(Table);
