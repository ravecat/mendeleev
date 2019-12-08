import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Media, Icon as BaseIcon } from 'styled-components-toolbox';
import { Link as RouterLink } from 'react-router-dom';

import Grid from './asset/grid.svg';
import Atom from './asset/atom.svg';
import List from './asset/list.svg';

import { TYPE } from 'common/constants';
import { ELEMENTS, HOME, PROPERTIES } from 'common/routes';

const Aside = ({ fetching, element: { symbol, atomicNumber }, type }) => (
  <Wrapper>
    <Link to={HOME}>
      <Icon asset={Grid} pointer />
    </Link>
    <Link to={PROPERTIES}>
      <Icon asset={List} pointer />
    </Link>
    {fetching ? (
      <Link to={ELEMENTS}>
        <Icon asset={Atom} pointer />
      </Link>
    ) : (
      <AtomLink symbol={symbol} to={`${ELEMENTS}/${atomicNumber}`} type={type}>
        <Icon asset={Atom} pointer />
      </AtomLink>
    )}
  </Wrapper>
);

Aside.defaultProps = {
  element: null,
  fetching: false,
  type: TYPE.UNKNOWN
};

Aside.propTypes = {
  element: PropTypes.shape({
    name: PropTypes.string,
    symbol: PropTypes.string,
    atomicNumber: PropTypes.number,
    atomicWeight: PropTypes.number
  }),
  fetching: PropTypes.bool,
  type: PropTypes.string
};

export default Aside;

const Wrapper = styled.aside`
  display: flex;
  position: fixed;
  bottom: 0;
  height: 100%;
  flex-direction: column;
  padding: 15px 0;
  align-items: center;
  width: 40px;
  background-color: ${({ theme }) => theme.colors.primaryTextColor};
  ${Media.responsive`
    position: fixed;
    left: 0;
    width: 100%;
    height: 50px;
    flex-direction: row;
    justify-content: space-evenly;
  `}
`;

const Icon = styled(BaseIcon)`
  width: 20px;
  height: 20px;
  ${Media.responsive`
    width: 25px;
    height: 25px;
  `}
`;

const Link = styled(RouterLink)`
  margin-bottom: 20px;
  ${Media.responsive`
    margin: 0;
  `}
`;

const AtomLink = styled(RouterLink)`
  position: relative;

  &::before {
    position: absolute;
    left: -5px;
    bottom: -5px;
    width: 20px;
    height: 20px;
    content: '${({ symbol }) => symbol}';
    line-height: 20px;
    text-align: center;
    font-size: ${({ theme }) => theme.textSize.thirdText};
    color: ${({ theme }) => theme.colors.primaryTextColor};
    display: inline-block;
    border-radius: 10px;
    background-color: ${({ type, theme: { table } = {} }) => (type ? table?.color?.[type] : table?.color?.unknown)};
  }
`;
