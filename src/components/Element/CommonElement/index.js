import { withProps } from 'recompose';
import CommonElement from './CommonElement';

export default withProps(({ classification, symbol, name, _id, atomic_number, atomic_weight }) => ({
  symbol,
  name,
  id: _id,
  atomicNumber: String(atomic_number),
  atomicWeight: String(atomic_weight),
  type: classification?.type?.value
}))(CommonElement);
