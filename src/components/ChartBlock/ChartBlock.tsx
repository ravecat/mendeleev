import styled from "styled-components";
import { Icon as RegularIcon } from "styled-components-toolbox";

import { DomainLabel, PropertyLabel } from "api/element";
import { Link as BaseLink, PropertyRouteContext, Routes } from "app/routing";
import { DataView } from "common/constants";

export interface ChartBlockProps extends PropertyRouteContext {
  isMeasurable: boolean;
  label: PropertyLabel;
  domain?: DomainLabel;
}

export const ChartBlock = ({
  isMeasurable,
  label,
  domain,
  route: { params },
}: ChartBlockProps): JSX.Element => {
  const checkActive = (view: DataView): boolean =>
    label === params.id && params.view === view;

  return (
    <span>
      {isMeasurable ? (
        <Link
          routeName={Routes.Property}
          routeParams={{ id: label, view: DataView.Chart, domain }}
        >
          <Icon
            active={checkActive(DataView.Chart)}
            alt={DataView.Chart}
            asset="◕"
            pointer
          />
        </Link>
      ) : null}
      <Link
        routeName={Routes.Property}
        routeParams={{ id: label, view: DataView.List, domain }}
      >
        <Icon
          active={checkActive(DataView.List)}
          alt={DataView.List}
          asset="◨"
          pointer
        />
      </Link>
    </span>
  );
};

const Icon = styled(RegularIcon)<{ active: boolean }>`
  font-size: 24px;
  color: ${({ theme, active }) => (active ? theme.accent : theme.divider)};

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

const Link = styled(BaseLink)`
  & + & {
    margin-left: 10px;
  }
`;
