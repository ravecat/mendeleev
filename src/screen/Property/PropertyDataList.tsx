import styled from "styled-components";
import { Media } from "styled-components-toolbox";

import { ChartProperty } from "api/element";
import { Property as PropertyView } from "components/Property";
import { Value } from "components/Value";

import { PropertyScreenProps } from "./Property";

type PropertyDataListProps = Pick<PropertyScreenProps, "route" | "elements">;

export const PropertyDataList = ({
  elements,
  route: { params },
}: PropertyDataListProps): JSX.Element => {
  const data = elements.map<[string, ChartProperty]>((element) => [
    element.name?.ordinary as string,
    element[params.id],
  ]);

  return (
    <Wrapper>
      {data.map(([label, property]) => (
        <PropertyView key={label} property={label}>
          <Value property={property} />
        </PropertyView>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  ${Media.responsive(["max-width: none;", "max-width: 650px;"])}
`;
