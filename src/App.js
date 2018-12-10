import React from "react";
import styled from "styled-components";
import Media from "common/Media";

const App = () => (
  <Wrapper>
    <Aside />
    <Article>
      <Title>Periodic table of chemical elements</Title>
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

const Aside = styled.aside`
  min-width: 50px;
  background-color: #222;
  ${Media.responsive`
    width: 100%;
    min-height: 50px;
  `};
`;

const Title = styled.div`
  ${Media.responsive`
    text-align: center;
  `};
`;

const Article = styled.article`
  width: 100%;
  padding: 10px 20px;
  background-color: #fff;
  ${Media.responsive`
    width:auto;
    height: 100%;
    padding: 10px;
  `};
`;
