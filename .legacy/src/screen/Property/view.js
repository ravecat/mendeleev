import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Title from 'components/Title';
import Chart from 'components/Chart';

const Property = ({ property, isChart }) => {
  return (
    <Wrapper>
      <Title>{property}</Title>
      {isChart ? <Chart property={property} /> : 'List'}
    </Wrapper>
  );
};

Property.propTypes = {
  property: PropTypes.string.isRequired,
  isChart: PropTypes.bool.isRequired
};

export default Property;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  flex-flow: column wrap;
`;
