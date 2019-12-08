import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Text from 'components/Text';

function Card({ data }) {
  const basic = ['name', 'atomicNumber', 'atomicWeight'];

  return (
    <Wrapper>
      <Text size="20px">{data.symbol}</Text>
      {basic.map(key => (
        <Property key={key}>
          <span>{key}</span>
          <span>{data[key]}</span>
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

const Property = styled.div`
  display: flex;
  padding-right: 15px;
  justify-content: space-between;
`;
