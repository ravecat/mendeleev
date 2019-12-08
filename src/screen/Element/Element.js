import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Domains from 'components/Domains';
import Card from 'components/Card';

function Element({ domains, element }) {
  return (
    <Wrapper>
      <Card data={element} />
      <Domains data={domains} />
    </Wrapper>
  );
}

Element.propTypes = {
  element: PropTypes.shape({
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

const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
`;
