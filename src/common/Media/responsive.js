import { css } from "styled-components";

const responsive = (property, values, resolutions) => {
  const argsIsArray = Array.isArray(resolutions);

  return css`
    ${[...(argsIsArray ? [...resolutions] : [resolutions])].reverse().map(
      (resolution, index) => `
        @media (max-width: ${resolution}px) {
          ${property}:${
        argsIsArray ? values[resolutions.length - index - 1] : values
      }
        }`
    )};
  `;
};

export default responsive;
