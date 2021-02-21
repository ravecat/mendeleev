import styled from "styled-components";
import { Icon as BaseIcon, Media } from "styled-components-toolbox";

import { Link, RouteContext, Routes } from "app/routing";

export type AsideProps = RouteContext;

export const Aside = ({ route: { name } }: AsideProps): JSX.Element => (
  <Wrapper>
    <Link routeName={Routes.Home}>
      <Icon active={name === Routes.Home} alt="table" asset="◰" pointer />
    </Link>
    <Link routeName={Routes.Properties}>
      <Icon
        active={name === Routes.Properties}
        alt="properties"
        asset="▤"
        pointer
      />
    </Link>
    <Link routeName={Routes.Elements}>
      <Icon
        active={!!~[Routes.Element, Routes.Elements].indexOf(name as Routes)}
        alt="elements"
        asset="◉"
        pointer
      />
    </Link>
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
  background-color: ${({ theme }) => theme.primary};

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

const Icon = styled(BaseIcon)<{ active: boolean }>`
  font-size: 30px;
  color: ${({ theme, active }) => (active ? theme.accent : theme.divider)};
  display: inline-block;

  &:hover {
    color: ${({ theme, active }) => !active && theme.neutral};
  }
`;
