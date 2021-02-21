import React from '../src-old/react';
import PropTypes from '../src-old/prop-types';
import styled from '../src-old/styled-components';

import Title from '../src-old/components/Title';

const Elements = ({ domains, element }) => {
  return (
    <Wrapper>
      <Title>Elements</Title>
    </Wrapper>
  );
};

Elements.propTypes = {
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

export default Elements;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
`;
