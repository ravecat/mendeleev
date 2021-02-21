import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Property from 'components/Property';

function Card({ data }) {
  const basic = ['symbol', 'atomicNumber', 'atomicWeight'];

  return (
    <Wrapper>
      {basic.map(key => (
        <Property key={key} property={key}>
          {data[key]}
        </Property>
      ))}
    </Wrapper>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    symbol: PropTypes.string,
    atomicNumber: PropTypes.number,
    atomicWeight: PropTypes.number
  }).isRequired
};

export default Card;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  max-width: 600px;
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.textSize.secondaryText};
`;
