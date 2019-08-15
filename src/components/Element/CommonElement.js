import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Text } from 'styled-components-toolbox';
import { ELEMENTS } from 'common/routes';

const CommonElement = ({ symbol, name, type, atomicNumber, atomicWeight, ...props }) => (
  <Wrapper to={`${ELEMENTS}/${atomicNumber}`} type={props?.classification?.type?.value} {...props}>
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
  id: PropTypes.string,
  symbol: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  atomicNumber: PropTypes.string,
  atomicWeight: PropTypes.string,
  onClick: PropTypes.func
};

export default CommonElement;

const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: -1px;
  padding: 3px 5px;
  min-width: ${({ theme }) => theme?.table?.cellWidth}px;
  width: ${({ theme }) => theme?.table?.cellWidth}px;
  height: ${({ theme }) => theme?.table?.cellHeight}px;
  color: inherit;
  text-decoration: none;
  line-height: 1;
  background-color: ${({ type, theme: { table } = {} }) => (type ? table?.color?.[type] : table?.color?.unknown)};
  border: 1px solid ${({ theme: { colors } }) => colors?.dividerColor};

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
