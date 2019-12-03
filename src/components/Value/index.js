import React from 'react';
import PropTypes from 'prop-types';

import Ordinary from './Ordinary';
import Exponential from './Exponential';

function Value({ value, unit, type }) {
  return (
    <div>
      {
        {
          ordinary: <Ordinary unit={unit} value={value} />,
          exponential: <Exponential unit={unit} value={value} />
        }[type]
      }
    </div>
  );
}

Value.defaultProps = {
  value: null,
  unit: null
};

Value.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.shape({
      p: PropTypes.number,
      M: PropTypes.number,
      n: PropTypes.number
    })
  ]),
  unit: PropTypes.string,
  type: PropTypes.string.isRequired
};

export default Value;
