import React from 'react';
import PropTypes from 'prop-types';
import { Link as RegularLink } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as Bars } from 'asset/bars.svg';
import { ReactComponent as Chart } from 'asset/chart.svg';
import RegularIcon from 'components/Icon';
import { GRAPH_VIEW, LIST_VIEW } from 'common/constants';

const ChartBlock = ({ isMeasurable, pathname, label }) => {
  return (
    <>
      {isMeasurable ? (
        <Link to={`${pathname}/${label}?view=${GRAPH_VIEW}`}>
          <Icon asset={<Chart />} pointer />
        </Link>
      ) : null}
      <Link to={`${pathname}/${label}?view=${LIST_VIEW}`}>
        <Icon asset={<Bars />} pointer />
      </Link>
    </>
  );
};

ChartBlock.propTypes = {
  pathname: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isMeasurable: PropTypes.bool.isRequired
};

export default ChartBlock;

const Icon = styled(RegularIcon)`
  width: 18px;
  height: 18px;
  fill: ${({ theme }) => theme.colors.dividerColor};

  &:hover {
    fill: ${({ theme }) => theme.colors.primaryIcon};
  }
`;

const Link = styled(RegularLink)`
  & + & {
    margin-left: 10px;
  }
`;
