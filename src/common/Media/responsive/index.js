import { css } from "styled-components";

const DEFAULT_RESPONSIVE_RESOLUTION = 1023

const responsive = (property, resolution) => {
  //TODO Use rc-file for store variables
  const res = resolution || process.env.RESPONSIVE || DEFAULT_RESPONSIVE_RESOLUTION

  return css`
    @media (max-width: ${res}px) {
      ${property};
    }
  `;
}

export default responsive;
