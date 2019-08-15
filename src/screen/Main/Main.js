import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Media, Header } from 'styled-components-toolbox';
import Table from 'components/Table';

function Main({ onMount }) {
  useEffect(() => {
    onMount();
  }, []);

  return (
    <>
      <Title>Periodic table of chemical elements</Title>
      <Table />
    </>
  );
}

Main.propTypes = {
  onMount: PropTypes.func
};

export default Main;

const Title = styled(Header)`
  padding-bottom: 10px;
  line-height: 1;
  font-size: ${({ theme }) => theme.textSize.header};
  ${Media.responsive`
    text-align: center;
  `};
`;
