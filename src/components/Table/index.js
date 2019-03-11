import { compose } from 'recompose';
import { connect } from 'react-redux';
import { isEmpty } from 'ramda';
import withCheckData from 'common/hoc/withCheckData';
import { getElements } from 'store/selectors/elements';
import Table from './Table';

const mapStateToProps = state => ({
  elements: getElements(state)
});

export default compose(
  connect(mapStateToProps),
  withCheckData(({ elements }) => isEmpty(elements))
)(Table);
