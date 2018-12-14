import React from "react";
import styled from "styled-components";
import { Media, Icon } from "styled-components-toolbox";
import Molecule from './asset/molecule.svg'

const Aside = () =>
  <Wrapper>
    <MoleculeIcon asset={ Molecule } fill />
  </Wrapper>

export default Aside

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 50px;
  background-color: #222;
  ${Media.responsive`
    flex-direction: row;
    justify-content: center;
    width: 100%;
    min-height: 50px;
  `};
`;

const MoleculeIcon = styled(Icon)`
  height: 30px;
  padding: 8px 0;

  ${Media.responsive`
    width: auto;
    padding: 0;
  `};

  :hover {
    cursor: pointer;
  }
`