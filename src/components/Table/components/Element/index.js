import { withProps } from 'recompose';
import Element from './Element';

export default withProps(({ classification: { group, period }, symbol, name, _id, atomic_number }) => ({
  symbol,
  name,
  id: _id,
  atomicNumber: atomic_number,
  group: group.value,
  period: period.value
}))(Element);
