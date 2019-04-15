import React from 'react';
import styled from 'styled-components';
import { Media } from 'styled-components-toolbox';
import { Route } from 'react-router-dom';
import { Main, Aside } from 'components';

const App = () => (
  <Wrapper>
    <Aside />
    <Article>
      <Route component={ Main } path="/" />
    </Article>
  </Wrapper>
);

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  align-content: stretch;
  ${Media.responsive`
    flex-direction: column-reverse;
  `}
`;

const Article = styled.article`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 40px;
  right: 0;
  bottom: 0;
  padding: 15px 20px;
  overflow: auto;
  background-color: #fff;
  ${Media.responsive`
    padding: 10px;
  `};
`;




