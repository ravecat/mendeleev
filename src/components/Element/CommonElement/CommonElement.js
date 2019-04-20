import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text, Media } from 'styled-components-toolbox';

const CommonElement = ({ symbol, name, type, atomicNumber, atomicWeight }) => (
  <Wrapper element={{ atomicNumber, type }}>
    <SymbolWrapper>
      <Symbol bold>{symbol}</Symbol>
      <AtomicNumber bold>{atomicNumber}</AtomicNumber>
    </SymbolWrapper>
    <Name>{name}</Name>
    <Weight>{atomicWeight}</Weight>
  </Wrapper>
);

CommonElement.propTypes = {
  className: PropTypes.string,
  symbol: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  atomicNumber: PropTypes.number,
  atomicWeight: PropTypes.string
};

export default CommonElement;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3px 5px;
  min-width: ${({ theme }) => theme.table.cellWidth}px;
  width: ${({ theme }) => theme.table.cellWidth}px;
  height: ${({ theme }) => theme.table.cellHeight}px;
  line-height: 1;
  background-color: ${({ element: { type }, theme: { table } }) => (type ? table.color[type] : table.color.unknown)};
  border: 1px solid ${({ theme: { colors } }) => colors.dividerColor};
  ${Media.responsive`
    margin-left: -1px;
  `};

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
  font-size: ${({ theme }) => theme.textSize.secondaryText};
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
