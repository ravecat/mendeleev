import React from 'react';
import PropTypes from 'prop-types';

function Exponential({ value: { p, n, M }, unit }) {
  return M ? (
    <>
      <span>
        {M}
        <span>&#215;</span>
        {n}
        <sup>{p}</sup>
      </span>
      {unit && <span>{` ${unit}`}</span>}
    </>
  ) : (
    '-'
  );
}

Exponential.defaultProps = {
  value: {
    p: null,
    M: null,
    n: null
  },
  unit: null
};

Exponential.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.shape({
      p: PropTypes.number,
      M: PropTypes.number,
      n: PropTypes.number
    })
  ]),
  unit: PropTypes.string
};

export default Exponential;
