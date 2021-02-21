import type { ReactNode } from "react";
import React from "react";
import styled from "styled-components";
import { Icon as BaseIcon, Media } from "styled-components-toolbox";

import { Link, ROUTES } from "App/withRouting";
import { ElementType } from "common/constants";

export interface AsideProps {
  children?: ReactNode;
  fetching: boolean;
  element: {
    symbol: string;
    atomicNumber: string;
  };
  type: ElementType;
}

export const Aside = ({ fetching, element, type }: AsideProps) => (
  <Wrapper>
    <Link routeName={ROUTES.HOME}>
      <Icon alt="table" asset="◰" pointer />
    </Link>
    <Link routeName={ROUTES.PROPERTIES}>
      <Icon alt="properties" asset="▤" pointer />
    </Link>
    {fetching ? (
      <Link routeName={ROUTES.ELEMENTS}>
        <Icon alt="elements" asset="◉" pointer />
      </Link>
    ) : (
      <AtomLink
        routeName={ROUTES.ELEMENT}
        routeParams={{ id: element.atomicNumber }}
        symbol={element?.symbol}
        type={type}
      >
        <Icon alt="element" asset="◉" pointer />
      </AtomLink>
    )}
  </Wrapper>
);

const Wrapper = styled.aside`
  display: flex;
  position: fixed;
  bottom: 0;
  height: 100%;
  flex-direction: column;
  align-items: center;
  width: 40px;
  background-color: ${({ theme }) => theme.colors.primaryTextColor};

  ${Media.responsive(`
    position: fixed;
    left: 0;
    padding: 0;
    width: 100%;
    height: 50px;
    flex-direction: row;
    justify-content: space-evenly;
  `)}
`;

const Icon = styled(BaseIcon)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.textColor};
  display: inline-block;
`;

const AtomLink = styled(Link)<{ symbol: string; type: ElementType }>`
  position: relative;

  &::before {
    position: absolute;
    left: -5px;
    bottom: -5px;
    width: 20px;
    height: 20px;
    content: "${({ symbol }) => symbol}";
    line-height: 18px;
    font-weight: bold;
    text-align: center;
    border: 2px solid ${({ theme }) => theme.colors.primaryTextColor};
    font-size: ${({ theme }) => theme.textSize.thirdText};
    color: ${({ theme }) => theme.colors.textColor};
    display: inline-block;
    border-radius: 10px;
    background-color: ${({ type, theme: { table } }) =>
      type ? table.color[type] : table.color.unknown};
  }
`;
