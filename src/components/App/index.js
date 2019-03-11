import { connect } from 'react-redux';
import { lifecycle, compose } from 'recompose';
import { fetchElements } from 'store/actionCreators/element';
import App from './App';

export default compose(
  connect(
    null, { fetchElements }
  ),
  lifecycle({
    componentDidMount() {
      const { fetchElements } = this.props;
      
      fetchElements();
    }
  })
)(App);
