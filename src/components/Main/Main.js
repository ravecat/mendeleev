import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Media, Header } from 'styled-components-toolbox';
import Table from 'components/Table';

const Main = () => (
  <Fragment>
    <Title>Periodic table of chemical elements</Title>
    <Table />
  </Fragment>
);

export default Main;

const Title = styled(Header)`
  font-size: ${({ theme }) => theme.textSize.header};
  ${Media.responsive`
    text-align: center;
  `};
`;
