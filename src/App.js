import React from "react";
import styled from "styled-components";
import { MOBILE_RESOLUTION } from "common/constants";
import Media from "common/Media";
import "./common/globalStyles";

const App = () => (
  <Wrapper>
    <Article>
      <Title>Periodic table of chemical elements</Title>
    </Article>
    <Aside />
  </Wrapper>
);

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: 100vh;
  ${Media.responsiveBlock(
    `
    flex-direction: column;
    `,
    MOBILE_RESOLUTION
  )};
`;

const Aside = styled.aside`
  width: 50px;
  background-color: #222;
  ${Media.responsiveBlock(
    `
    width: 100%;
    height: 50px;
    `,
    MOBILE_RESOLUTION
  )};
`;

const Title = styled.div`
  ${Media.responsiveBlock(
    `
    text-align: center;
    `,
    MOBILE_RESOLUTION
  )};
`;

const Article = styled.article`
  width: 100%;
  padding: 10px 20px;
  background-color: #fff;
  ${Media.responsiveBlock(
    `
    height: 100%;
    padding: 10px 0;
    `,
    MOBILE_RESOLUTION
  )};
`;
