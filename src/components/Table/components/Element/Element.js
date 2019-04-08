import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text } from 'styled-components-toolbox';

const Element = ({ group, period, symbol, name, type, atomicNumber, atomicWeight }) => (
  <Wrapper element={ { atomicNumber, group, period, type } }>
    <SymbolWrapper>
      <Symbol bold>{ symbol }</Symbol>
      <AtomicNumber bold>{ atomicNumber }</AtomicNumber>
    </SymbolWrapper>
    <Name>
      { name }
    </Name>
    <Weight>
      { atomicWeight }
    </Weight>
  </Wrapper>
);

Element.propTypes = {
  group: PropTypes.number,
  period: PropTypes.string,
  symbol: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  atomicNumber: PropTypes.number,
  atomicWeight: PropTypes.string,
};

export default Element;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  padding: 3px 5px;
  width: ${({ theme }) => theme.table.cellWidth}px;
  height: ${({ theme }) => theme.table.cellHeight}px;
  top: ${({ theme: { table }, element: { period }}) => (period - 1) * (table.cellHeight  - 1)}px;
  left: ${({ theme: { table }, element: { group }}) => (group > 12 ? group - 11 : group - 1) * (table.cellWidth - 1)}px;
  line-height: 1;
  background-color: ${({ element: { type }, theme: { table }}) => type ? table.color[type] : table.color.unknown};
  border: 1px solid ${({ theme: { colors }}) => colors.dividerColor};

  :hover {
    cursor: pointer;
  }
`;

const SymbolWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Symbol = styled(Text)`
  line-height: 1;
`;

const AtomicNumber = styled(Symbol)`
  font-size: ${({ theme }) => theme.textSize.secondaryText}
`;

const Name = styled(Text)`
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1;
  font-size: ${({ theme }) => theme.textSize.secondaryText};
`;

const Weight = styled(Text)`
  line-height: 1;
  font-size: ${({ theme }) => theme.textSize.thirdText};
`;
