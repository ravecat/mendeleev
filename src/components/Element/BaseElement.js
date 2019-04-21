import React from 'react';
import styled from 'styled-components';
import { path } from 'ramda';
import CommonElement from './CommonElement';

function BaseElement(props) {
  const group = path(['classification', 'group', 'value'], props);
  const period = path(['classification', 'period', 'value'], props);

  return (
    <Wrapper group={group} period={period} {...props}>
      <CommonElement {...props} />
    </Wrapper>
  );
}

export default BaseElement;

const Wrapper = styled.div`
  position: absolute;
  top: ${({ theme: { table }, period }) => (period - 1) * (table.cellHeight - 1)}px;
  left: ${({ theme: { table }, group }) => (group > 12 ? group - 11 : group - 1) * (table.cellWidth - 1)}px;
`;