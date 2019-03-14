import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text } from 'styled-components-toolbox';

const Element = ({ group, period, symbol, name, type, atomicNumber, atomicWeight  }) => (
  <Wrapper group={ group } period={ period } type={ type }>
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
  group: PropTypes.string,
  period: PropTypes.string,
  symbol: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  atomicNumber: PropTypes.string,
  atomicWeight: PropTypes.string,
};

export default Element;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  padding: 3px 5px;
  width: ${({ theme: { element }}) => element.width}px;
  height: ${({ theme: { element }}) => element.height}px;
  top: ${({ period, theme: { element }}) => (element.height - 1)*(period - 1)}px;
  left: ${({ theme: { element }, group }) => (element.width - 1)*(group - 1) }px;
  line-height: 1;
  background-color: ${({ type, theme: { element }}) => type ? element.color[type] : element.color.unknown};
  border: 1px solid ${({ theme }) => theme.colors.dividerColor};
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
