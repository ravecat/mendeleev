import { ReactNode } from "react";
import styled from "styled-components";
import { Media } from "styled-components-toolbox";

import { ChartProperty } from "api/element";
import { RouteContext } from "app/routing";
import { Property as PropertyView } from "components/Property";
import { Title } from "components/Title";
import { Value } from "components/Value";

import { Atom } from "./Atom";

export interface DetailProps extends RouteContext {
  elements: [string, ChartProperty][][];
  elementsMap: Record<string, ChartProperty>[];
  children?: ReactNode;
}

export const Detail = ({
  elements,
  elementsMap,
  route,
}: DetailProps): JSX.Element => {
  const elementId = route.params.id - 1;
  const properties = elements[elementId];
  const element = elementsMap[elementId];
  const title = (element?.name?.ordinary as string) || `Element-${elementId}`;

  return (
    <Wrapper>
      <DetailList>
        <Title label={title} />
        {properties.map(([label, property]) => (
          <PropertyView key={label} property={label}>
            <Value property={property} />
          </PropertyView>
        ))}
      </DetailList>
      <Atom element={element} />
    </Wrapper>
  );
};

const DetailList = styled.div`
  display: flex;
  flex-flow: column wrap;
  ${Media.responsive([
    `
      width: 100%;
    `,
    /**
     * TODO Should pass responsive parameters as props,
     * but current implementation Media doesn't allow that
     * https://gitlab.com/rvct/styled-components-toolbox/-/issues/83
     */
    `
      width: 49%;
      max-width: 700px;
    `,
  ])}
`;

const Wrapper = styled.div`
  display: flex;
`;
