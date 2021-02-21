import styled from "styled-components";

import { Title } from "components/Title";

export const NotFound = (): JSX.Element => {
  return (
    <Wrapper>
      <Title label="The page you’re looking for can’t be found." />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
