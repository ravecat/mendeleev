import React from 'react';
import styled from 'styled-components';
import { Text } from 'styled-components-toolbox';

const Element = ({ group, period, symbol, name }) => (
  <Wrapper group={ group } period={ period }>
    <Text bold>{ symbol }</Text>
  </Wrapper>
);

export default Element;

const Wrapper = styled.div`
  position: absolute;
  padding: 3px 5px;
  width: ${({ theme: { element }}) => element.width}px;
  height: ${({ theme: { element }}) => element.height}px;
  top: ${({ period, theme: { element }}) => (element.height - 1)*(period - 1)}px;
  left: ${({ theme: { element }, group }) => (element.width - 1)*(group - 1) }px;
  border: 1px solid ${({ theme }) => theme.colors.dividerColor};
`;
