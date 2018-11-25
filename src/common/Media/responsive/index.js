import { css } from "styled-components";

const DEFAULT_RESPONSIVE_RESOLUTION = 1023

const responsive = property => {
  //TODO Use rc-file for store variables
  const resolution = process.env.RESPONSIVE || DEFAULT_RESPONSIVE_RESOLUTION

  return css`
    @media (max-width: ${resolution}px) {
      ${property};
    }
  `;
}

export default responsive;
