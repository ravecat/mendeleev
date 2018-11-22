import { css } from "styled-components";
import trimSpace from "common/helpers/trimSpace";
import responsive from "./responsive";

const property = "color";
const [value, resolution] = ["red", "1023"];
const [values, resolutions] = [["red", "blue"], ["1023", "1123"]];

describe("responsive return correct result", () => {
  test("get individual value", () => {
    const expected = trimSpace(css`
      @media (max-width: ${resolution}px) {
        ${property}:${value};
      }
    `);

    expect(trimSpace(responsive(property, value, resolution))).toEqual(
      expected
    );
  });

  test("get array value", () => {
    const expected = trimSpace(css`
      ${[...resolutions].reverse().map(
        (resolution, index) => `
          @media (max-width: ${resolution}px) {
            ${property}:${values[resolutions.length - index - 1]};
          }`
      )}
    `);

    expect(trimSpace(responsive(property, values, resolutions))).toEqual(
      expected
    );
  });
});
