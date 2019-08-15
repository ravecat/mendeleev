import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function ElementCard({ data: { name } }) {
  return <Wrapper>{name}</Wrapper>;
}

ElementCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    symbol: PropTypes.string,
    atomicNumber: PropTypes.number,
    atomicWeight: PropTypes.number
  })
};

export default ElementCard;

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;
