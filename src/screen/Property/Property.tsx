import { ReactNode } from "react";
import styled from "styled-components";

import { ChartProperty } from "api/element";
import { PropertyRouteContext } from "app/routing";
import { DataView } from "common/constants";
import { Title } from "components/Title";

import { PropertyDataChart } from "./PropertyDataChart";
import { PropertyDataList } from "./PropertyDataList";

export interface PropertyScreenProps extends PropertyRouteContext {
  elements: Record<string, ChartProperty>[];
  children?: ReactNode;
}

export const Property = ({
  elements,
  route,
}: PropertyScreenProps): JSX.Element => {
  return (
    <Wrapper>
      <Title label={route.params.id} />
      {
        {
          [DataView.Chart]: (
            <PropertyDataChart elements={elements} route={route} />
          ),
          [DataView.List]: (
            <PropertyDataList elements={elements} route={route} />
          ),
        }[route.params.view as string]
      }
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column wrap;
`;
