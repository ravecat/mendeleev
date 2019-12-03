import React from 'react';
import styled from 'styled-components';
import { Media, Header } from 'styled-components-toolbox';

import Table from 'components/Table';

function Main() {
  return (
    <>
      <Title>Periodic table of chemical elements</Title>
      <Table />
    </>
  );
}

export default Main;

const Title = styled(Header)`
  padding-bottom: 10px;
  line-height: 1;
  font-size: ${({ theme }) => theme.textSize.header};
  ${Media.responsive`
    text-align: center;
  `}
`;
