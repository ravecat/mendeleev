import React from 'react';
import styled from 'styled-components';
import { Media } from 'styled-components-toolbox';
import { Route } from 'react-router-dom';
import { Main, Aside } from 'components';

const App = () => (
  <>
    <Aside />
    <Article>
      <Route component={Main} path="/" />
    </Article>
  </>
);

export default App;

const Article = styled.article`
  position: fixed;
  top: 0;
  left: 40px;
  right: 0;
  bottom: 0;
  padding: 15px 20px;
  overflow: auto;
  background-color: ${({ theme }) => theme.colors.textColor};
  ${Media.responsive`
    padding: 10px;
    left: 0;
    bottom: 50px;
  `};
`;
