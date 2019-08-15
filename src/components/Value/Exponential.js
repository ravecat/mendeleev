import React from 'react';
import PropTypes from 'prop-types';

function Exponential({ value: { p, n, M }, unit }) {
  return M ? (
    <>
      <span>
        {M}*{n}
        <sup>{p}</sup>
      </span>
      {unit && <span>{` ${unit}`}</span>}
    </>
  ) : (
    '-'
  );
}

Exponential.propTypes = {
  value: PropTypes.shape({
    p: PropTypes.number,
    M: PropTypes.number,
    n: PropTypes.number
  }),
  unit: PropTypes.string
};

export default Exponential;
