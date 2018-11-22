import { css } from "styled-components";

const responsiveBlock = (property, resolution) => css`
  @media (max-width: ${resolution}px) {
    ${property};
  }
`;

export default responsiveBlock;
