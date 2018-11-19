import { css } from "styled-components";

const responsiveBlock = (property, resolution, initialProperty) => css`
  ${initialProperty};

  @media (max-width: ${resolution}px) {
    ${property};
  }
`;

export default responsiveBlock;
