import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
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
  onMount: PropTypes.func,
  match: ReactRouterPropTypes.match,
  basicData: PropTypes.shape({
    name: PropTypes.string,
    symbol: PropTypes.string,
    atomicNumber: PropTypes.number,
    atomicWeight: PropTypes.number
  }),
  domains: PropTypes.arrayOf(
    PropTypes.shape({
      domain: PropTypes.arrayOf(PropTypes.shape({})),
      label: PropTypes.string
    })
  )
};

export default Element;
