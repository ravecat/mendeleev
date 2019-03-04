import React, { Fragment } from "react";
import styled from "styled-components";
import { Media } from "styled-components-toolbox";
import Table from 'components/Table'

const Main = () => (
  <Fragment>
    <Title>Periodic table of chemical elements</Title>
    <Table />
  </Fragment>
)

export default Main

const Title = styled.div`
  ${Media.responsive`
    text-align: center;
  `};
`;
