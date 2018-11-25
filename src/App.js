import React from "react";
import styled from "styled-components";
import { MOBILE_RESOLUTION } from "common/constants";
import Media from "common/Media";
import "common/globalStyles";

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
  ${Media.responsive(
    `
    flex-direction: column-reverse;
    `,
    MOBILE_RESOLUTION
  )};
`;

const Aside = styled.aside`
  min-width: 50px;
  background-color: #222;
  ${Media.responsive(
    `
    width: 100%;
    min-height: 50px;
    `,
    MOBILE_RESOLUTION
  )};
`;

const Title = styled.div`
  ${Media.responsive(
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
  ${Media.responsive(
    `
    width:auto;
    height: 100%;
    padding: 10px;
    `,
    MOBILE_RESOLUTION
  )};
`;
