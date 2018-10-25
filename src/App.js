import React from "react";
import styled from "styled-components";
import "./common/globalStyles";

const App = () => (
  <Wrapper>
    <Aside />
    <Article />
  </Wrapper>
);

export default App;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const Aside = styled.aside`
  width: 50px;
  background-color: #222;
`;

const Article = styled.article`
  width: 100%;
  padding: 10px 20px;
  background-color: #fff;
`;
