import React from 'react';
import styled from 'styled-components';
import { Media } from 'styled-components-toolbox';
import { Route } from 'react-router-dom';
import { Main } from 'components';

const App = () => (
  <Wrapper>
    {/* TODO Enabel side menu after extend functionality */}
    {/* <Aside /> */}
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
  `};
`;

const Article = styled.article`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 10px 20px;
  background-color: #fff;
  ${Media.responsive`
    padding: 10px;
  `};
`;




