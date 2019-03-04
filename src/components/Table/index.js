import { withProps, compose } from 'recompose'
import withCheckData from 'common/hoc/withCheckData';
import Table from './Table'

export default compose(
  // TODO Use mocked data
  withProps(({ elements: data = [] }) => ({
    data
  })),
  withCheckData
)(Table)