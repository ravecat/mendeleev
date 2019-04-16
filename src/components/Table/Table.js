import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Responsive from 'react-responsive';
import { RESPONSIVE } from 'common/config';
import { BaseElement } from './components/Element';
import { CommonElement } from './components/Element';
import { StandartElement } from './components/Element';

function Table({ elements, maxPeriod, baseElements, groups, periods, transElements }) {
  const [MICRO, STANDART] = RESPONSIVE;
  console.log(transElements)
  return(
    <>
      <Responsive minWidth={ STANDART + 1 } >
        <BaseTable maxPeriod={ maxPeriod }>
          {elements.map(element => <StandartElement { ...element } key={ element.symbol } />)}
        </BaseTable>
      </Responsive>
      <Responsive maxWidth={ STANDART } minWidth={ MICRO + 1 }>
        <BaseTable maxPeriod={ maxPeriod }>
          {baseElements.map(element => <BaseElement { ...element } key={ element.symbol } />)}
        </BaseTable>
        {
          groups.map(({ title, set }) => (
            <Group key={ title }>
              <Title>{title}</Title>
              <Set>{set.map(element => <CommonElement { ...element } key={ element.symbol } />)}</Set>
            </Group>
          ))
        }
      </Responsive>
      <Responsive maxWidth={ MICRO }>
        {
          periods.map((period, index) => (
            <Period key={ index }>
              {
                period.map(element => <CommonElement { ...element } key={ element.symbol } />)
              }
            </Period>
          ))
        }
      </Responsive>
    </>
  );
}

Table.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object),
  baseElements: PropTypes.arrayOf(PropTypes.object),
  groups: PropTypes.arrayOf(PropTypes.object),
  periods: PropTypes.arrayOf(PropTypes.array),
  maxPeriod: PropTypes.string
};

export default Table;

const BaseTable = styled.div`
  position: relative;
  min-height: ${({ theme, maxPeriod }) => maxPeriod * theme.table.cellHeight}px;
  margin-bottom: 20px;
`;

const Group = styled.div`
  margin-bottom: 10px;
`;

const Period = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const Title = styled.div`
  width: 150px;
  font-size: ${({ theme }) => theme.textSize.text};
`;

const Set = styled.div`
  display: flex;
`;
