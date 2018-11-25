import { css } from "styled-components";
import responsiveProperty from "./index";
import trimSpace from "../helpers/trimSpace";

const property = "color";
const [value, resolution] = ["red", "1023"];
const [values, resolutions] = [["red", "blue"], ["1023", "1123"]];

describe("responsiveProperty return correct result", () => {
  test("get individual value", () => {
    const expected = trimSpace(css`
      @media (max-width: ${resolution}px) {
        ${property}:${value};
      }
    `);

    expect(trimSpace(responsiveProperty(property, value, resolution))).toEqual(
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

    expect(trimSpace(responsiveProperty(property, values, resolutions))).toEqual(
      expected
    );
  });
});
