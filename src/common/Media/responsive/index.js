/* eslint-disable */
import { css } from "styled-components";
const rcfile = require("rc-config-loader");

const responsive = (property, resolution) => {
  console.log(rcfile('sct'))

  return css`
    @media (max-width: ${resolution}px) {
      ${property};
    }
  `;
}

export default responsive;
