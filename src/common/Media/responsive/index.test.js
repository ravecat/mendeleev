import { css } from "styled-components";
import responsive from "./index";
import trimSpace from "../helpers/trimSpace";

const value = `
  width:auto;
  height: 100%;
  padding: 10px;
`;
const resolution = "1023";

describe("responsive return correct result", () => {
  test("get individual value", () => {
    const expected = trimSpace(css`
      @media (max-width: ${resolution}px) {
        ${value};
      }
    `);

    expect(trimSpace(responsive(value, resolution))).toEqual(expected);
  });
});
