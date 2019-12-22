import React from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const Chart = ({ chart: { data, unit } }) => {
  const options = {
    title: {
      text: null
    },
    chart: {
      type: 'scatter',
      zoomType: 'xy'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      title: {
        enabled: true,
        text: 'Element'
      },
      type: 'category',
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true
    },
    yAxis: {
      title: {
        text: unit
      },
      type: 'category'
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      scatter: {
        marker: {
          radius: 5,
          states: {
            hover: {
              enabled: true,
              lineColor: 'rgb(100,100,100)'
            }
          }
        },
        states: {
          hover: {
            marker: {
              enabled: false
            }
          }
        },
        tooltip: {
          headerFormat: '<b>{point.key}</b><br>',
          pointFormat: '{point.y}'
        }
      }
    },
    series: [
      {
        data
      }
    ]
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

Chart.propTypes = {
  chart: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.array),
    unit: PropTypes.string
  }).isRequired
};

export default Chart;
