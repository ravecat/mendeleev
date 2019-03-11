import React from 'react';
import styled from 'styled-components';
import Element from './components/Element';

const Table = ({ elements }) => (
  <Wrapper>
    {elements.map(element => <Element key={ element.key } { ...element } />)}
  </Wrapper>
);

export default Table;

const Wrapper = styled.div`
  position: relative;
`;
