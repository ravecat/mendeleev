import { css } from "styled-components";

const DEFAULT_RESPONSIVE_RESOLUTION = 1023

const responsive = (property, resolution) => {
  try {
    //TODO Use rc-file for store variables
    const envRes = process.env.RESPONSIVE
    const resultRes = resolution || envRes || DEFAULT_RESPONSIVE_RESOLUTION

    if (isNaN(Number(resultRes))) {
      throw new Error('Responsive value is invalid. Must be a number')
    }

    return css`
      @media (max-width: ${resultRes}px) {
        ${property};
      }
    `;
  } catch(err) {
    // eslint-disable-next-line no-console
    console.error(err)
  }

}

export default responsive;
