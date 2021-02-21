import { ReactNode } from "react";
import styled from "styled-components";
import { Text } from "styled-components-toolbox";

export interface PropertyProps {
  property: string;
  children?: ReactNode;
}

export const Property = ({
  property,
  children,
}: PropertyProps): JSX.Element => (
  <Wrapper>
    <Title label={property} />
    {children}
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 24px;
  padding: 0px 5px;
`;

const Title = styled(Text)`
  font-size: 14px;
`;
