import styled from "styled-components";
import { Media } from "styled-components-toolbox";

import { ElementWithPropertiesMap } from "api/element";
import { MicroTable } from "components/Table";
import { Title } from "components/Title";

export type TableProps = {
  periods: ElementWithPropertiesMap[][];
};

export const Elements = ({ periods }: TableProps): JSX.Element => {
  return (
    <Wrapper>
      <Title label="Elements" />
      <MicroTable periods={periods} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  ${Media.responsive(["max-width: none;", "max-width: 650px;"])}
`;
