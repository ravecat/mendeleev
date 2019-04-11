import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Responsive from 'react-responsive';
import { RESPONSIVE } from 'common/config';
import { BaseElement } from './components/Element';
import { CommonElement } from './components/Element';

function Table({ elements, maxPeriod, baseElements, groups }) {
  const [MICRO, STANDART] = RESPONSIVE;

  return(
    <>
      <Responsive minWidth={ STANDART + 1 } >
        <BaseTable maxPeriod={ maxPeriod }>
          {/* TODO Update table with new element cell */}
          {/* {elements.map(element => <Element { ...element } key={ element.symbol } />)} */}
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
        <div>Micro view</div>
      </Responsive>
    </>
  );
}

Table.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object),
  baseElements: PropTypes.arrayOf(PropTypes.object),
  groups: PropTypes.arrayOf(PropTypes.object),
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

const Title = styled.div`
  width: 150px;
  font-size: ${({ theme }) => theme.textSize.text};
`;

const Set = styled.div`
  display: flex;
`;
