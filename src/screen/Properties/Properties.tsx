import { ReactNode } from "react";
import Responsive from "react-responsive";
import styled from "styled-components";

import { PropertyRouteContext, Routes } from "app/routing";
import { Property as PropertyScreen, PropertyList } from "connections/chunk";

export interface PropertiesProps extends PropertyRouteContext {
  children?: ReactNode;
  responsive: number[];
}

export const Properties = ({
  route: { name, params },
  responsive: [MICRO],
}: PropertiesProps): JSX.Element => {
  return (
    <Wrapper>
      <Responsive minWidth={MICRO + 1}>
        <PropertyList />
        {params.id ? <PropertyScreen /> : null}
      </Responsive>
      <Responsive maxWidth={MICRO}>
        {
          {
            [Routes.Properties]: <PropertyList />,
            [Routes.Property]: <PropertyScreen />,
          }[name]
        }
      </Responsive>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
