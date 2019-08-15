import { connect } from 'react-redux';
import { requestElements } from 'store/actions/element';

import Main from './Main';

export default connect(
  null,
  { onMount: requestElements }
)(Main);
