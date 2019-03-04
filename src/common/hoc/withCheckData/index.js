import { branch, renderComponent } from 'recompose'
import { isEmpty } from 'ramda'
import StubOnEmptyData from './StubOnEmptyData';

export default branch(
  ({ data }) => isEmpty(data),
  renderComponent(StubOnEmptyData)
)