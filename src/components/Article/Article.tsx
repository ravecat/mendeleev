import { ReactNode } from "react";
import styled from "styled-components";
import { Media } from "styled-components-toolbox";

import { AtomReturnedType } from "app/store";
import { statusElementsAtom } from "app/store/element";

export interface ArticleProps {
  children?: ReactNode;
  statusElements: AtomReturnedType<typeof statusElementsAtom>;
}

export const Article = ({ children }: ArticleProps): JSX.Element => {
  return <Wrapper>{children}</Wrapper>;
};

export const Wrapper = styled.article`
  position: fixed;
  top: 0;
  left: 40px;
  right: 0;
  bottom: 0;
  padding: 15px 20px;
  overflow: auto;
  background-color: ${({ theme }) => theme.neutral};
  ${Media.responsive(`
    padding: 10px;
    left: 0;
    bottom: 50px;
  `)}
`;
