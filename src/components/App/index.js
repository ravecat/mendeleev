import { connect } from 'react-redux';
import { lifecycle, compose } from 'recompose';
import { requestElements } from 'store/actionCreators/element';
import App from './App';

export default compose(
  connect(
    null,
    { requestElements }
  ),
  lifecycle({
    componentDidMount() {
      const { requestElements } = this.props;

      requestElements();
    }
  })
)(App);
