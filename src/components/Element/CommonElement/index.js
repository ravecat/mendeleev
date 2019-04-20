import { withProps } from 'recompose';
import CommonElement from './CommonElement';

export default withProps(({ classification: { type }, symbol, name, _id, atomic_number, atomic_weight }) => ({
  symbol,
  name,
  id: _id,
  atomicNumber: atomic_number,
  atomicWeight: String(atomic_weight),
  type: type.value
}))(CommonElement);
