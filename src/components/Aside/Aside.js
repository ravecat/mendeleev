import React from 'react';
import styled from 'styled-components';
import { Media, Icon } from 'styled-components-toolbox';
import Grid from './asset/grid.svg';
import Atom from './asset/atom.svg';
import List from './asset/list.svg';

const Aside = () => (
  <Wrapper>
    <CustomIcon asset={ Grid } pointer />
    <CustomIcon asset={ List } pointer />
    <CustomIcon asset={ Atom } pointer />
  </Wrapper>
);

export default Aside;

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  padding: 15px 0;
  align-items: center;
  min-width: 40px;
  background-color: ${({ theme }) => theme.colors.primaryTextColor};
  ${Media.responsive`
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    min-height: 40px;
  `};
`;

const CustomIcon = styled(Icon)`
  width: 20px;
  height: 20px;
  margin-bottom: 20px;
  ${Media.responsive`
    margin: 0;
  `};
`;
