import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Responsive from 'react-responsive';
import { RESPONSIVE } from 'common/config';
import Element from './components/Element';

function Table({ elements, maxPeriod }) {
  const [MICRO, STANDART] = RESPONSIVE;

  return(
    <>
      <Responsive minWidth={ STANDART + 1 } >
        <BaseTable maxPeriod={ maxPeriod }>
          {elements.map(element => <Element key={ element.symbol } { ...element } />)}
        </BaseTable>
        <Groups>
        </Groups>
      </Responsive>
      <Responsive maxWidth={ STANDART } minWidth={ MICRO + 1 }>
        <div>Short view</div>
      </Responsive>
      <Responsive maxWidth={ MICRO }>
        <div>Micro view</div>
      </Responsive>
    </>
  );
}

Table.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object),
  maxPeriod: PropTypes.string
};

export default Table;

const BaseTable = styled.div`
  position: relative;
  height: ${({ theme, maxPeriod }) => maxPeriod * theme.table.cellHeight}px;
`;

const Groups = styled.div`
  position: relative;
`;
