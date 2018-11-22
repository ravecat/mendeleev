import { css } from "styled-components";
import trimSpace from "common/helpers/trimSpace";
import responsiveBlock from "./responsiveBlock";

const value = `
  width:auto;
  height: 100%;
  padding: 10px;
`;
const resolution = "1023";

describe("responsiveBlock return correct result", () => {
  test("get individual value", () => {
    const expected = trimSpace(css`
      @media (max-width: ${resolution}px) {
        ${value};
      }
    `);

    expect(trimSpace(responsiveBlock(value, resolution))).toEqual(expected);
  });
});
