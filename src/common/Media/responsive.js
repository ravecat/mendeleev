import { css } from "styled-components";

const responsive = (property, values, resolutions) => {
  const argsIsArray = Array.isArray(resolutions);

  return argsIsArray
    ? css`
        ${[...resolutions].reverse().map(
          (resolution, index) => `
        @media (max-width: ${resolution}px) {
          ${property}:${values[resolutions.length - index - 1]};
        }`
        )}
      `
    : css`
      @media (max-width: ${resolutions}px) {
        ${property}:${values};
      }
    `;
};

export default responsive;
