import { connect } from 'react-redux';

import Chart from './view';

import { getChartData } from 'store/selectors/elements';

const mapStateToProps = (state, { property }) => ({
  chart: getChartData({ property })(state)
});

export default connect(mapStateToProps)(Chart);
