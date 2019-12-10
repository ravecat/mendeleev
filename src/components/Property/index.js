import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Property = ({ title, children }) => (
  <Wrapper>
    <span>{title}</span>
    <Value>{children}</Value>
  </Wrapper>
);

Property.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]).isRequired
};

export default Property;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Value = styled.span`
  display: flex;
  align-items: center;
`;
