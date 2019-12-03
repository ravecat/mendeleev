import React from 'react';
import PropTypes from 'prop-types';

function Ordinary({ value, unit }) {
  return value ? (
    <>
      <span>{value}</span>
      {unit && <span>{` ${unit}`}</span>}
    </>
  ) : (
    '-'
  );
}

Ordinary.defaultProps = {
  value: null,
  unit: null
};

Ordinary.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  unit: PropTypes.string
};

export default Ordinary;
