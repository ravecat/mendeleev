import React from 'react';
import PropTypes from 'prop-types';

import ElementData from 'components/ElementData';
import ElementCard from 'components/ElementCard';

function Element({ domains, basicData }) {
  return (
    <>
      <ElementCard data={basicData} />
      <ElementData data={domains} />
    </>
  );
}

Element.propTypes = {
  basicData: PropTypes.shape({
    name: PropTypes.string,
    symbol: PropTypes.string,
    atomicNumber: PropTypes.number,
    atomicWeight: PropTypes.number
  }).isRequired,
  domains: PropTypes.arrayOf(
    PropTypes.shape({
      domain: PropTypes.arrayOf(PropTypes.shape({})),
      label: PropTypes.string
    })
  ).isRequired
};

export default Element;
