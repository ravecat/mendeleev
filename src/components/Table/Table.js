import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Element from './components/Element';

const Table = ({ elements }) => (
  <Wrapper>
    {elements.map(element => <Element key={ element.symbol } { ...element } />)}
  </Wrapper>
);

Table.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object)
};

export default Table;

const Wrapper = styled.div`
  position: relative;
`;
