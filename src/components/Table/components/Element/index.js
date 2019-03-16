import { withProps } from 'recompose';
import Element from './Element';

export default withProps(({ classification: { group, period, type }, symbol, name, _id, atomic_number, atomic_weight }) => ({
  symbol,
  name,
  id: _id,
  atomicNumber: atomic_number,
  atomicWeight: String(atomic_weight),
  group: group.value,
  type: type.value,
  period: period.value
}))(Element);
