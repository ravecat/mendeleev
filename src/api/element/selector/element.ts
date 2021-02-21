import * as R from "ramda";

import { Element, ElementWithPropertiesMap } from "../types";

import { convertElementPropertiesToMap } from "./property";

/**
 * TODO Transfer calculation to BE
 */
export const sortElements = R.pipe<
  Element[],
  ElementWithPropertiesMap[],
  ElementWithPropertiesMap[]
>(
  R.map(({ _id, ...rest }) => convertElementPropertiesToMap(rest)),
  R.sortBy(R.pathOr(0, ["atomicNumber", "ordinary"]))
);
