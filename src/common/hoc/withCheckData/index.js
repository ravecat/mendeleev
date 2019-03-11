import { branch, renderComponent } from 'recompose';
import StubOnEmptyData from './StubOnEmptyData';

export default isEmptyData => branch(
  isEmptyData,
  renderComponent(StubOnEmptyData)
);
