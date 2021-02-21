import styled from "styled-components";

import { borderShadow } from "app/theme";

export const Cell = styled.div`
  position: relative;
  width: ${({ theme }) => theme?.table?.cellWidth}px;
  height: ${({ theme }) => theme?.table?.cellHeight}px;
  box-shadow: 0px 0px 0px 1px ${({ theme: { divider } }) => divider};

  &:before {
    ${borderShadow};
    opacity: 0;
  }

  &:hover {
    &:before {
      opacity: 1;
    }
  }
`;
