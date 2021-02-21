import { ReactNode } from "react";
import styled from "styled-components";
import { Collapse as BaseCollapse, Media } from "styled-components-toolbox";

import { DomainLabel, PropertyLabel } from "api/element";
import { PropertyRouteContext } from "app/routing";
import { Property } from "components/Property";
import { Title } from "components/Title";
import { ChartBlock } from "connections/ChartBlock";

export interface PropertyListProps extends PropertyRouteContext {
  basics: { isMeasurable: boolean; label: PropertyLabel }[];
  domains: {
    label: DomainLabel;
    properties: { isMeasurable: boolean; label: PropertyLabel }[];
  }[];
  children?: ReactNode;
  responsive: number[];
}

export const PropertyList = ({
  basics,
  domains,
  route: { params },
}: PropertyListProps): JSX.Element => {
  return (
    <Wrapper>
      <Title label="Properties" />
      <>
        {basics.map(({ label, isMeasurable }) => (
          <Property key={label} property={label}>
            <ChartBlock isMeasurable={isMeasurable} label={label} />
          </Property>
        ))}
      </>
      {domains.map(({ properties, label: domainLabel }) => (
        <Collapse
          key={domainLabel}
          open={params.domain === domainLabel}
          summary={domainLabel}
        >
          {properties.map(({ label, isMeasurable }) => (
            <Property key={label} property={label}>
              <ChartBlock
                domain={domainLabel}
                isMeasurable={isMeasurable}
                label={label}
              />
            </Property>
          ))}
        </Collapse>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
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

const Collapse = styled(BaseCollapse)`
  & summary {
    cursor: pointer;
  }

  & + & {
    margin-top: 2px;
  }
`;
