import * as R from "ramda";

import {
  ChartProperty,
  DomainLabel,
  Element,
  ElementWithPropertiesMap,
  MeasurableMap,
  Property,
  RootProperties,
} from "../types";

import { convertToChartData } from "./chart";

const getBasicPropertiesTypes = R.pick<`${RootProperties}`>([
  "atomicWeight",
  "atomicNumber",
]);

const getDomainPropertiesTypes = R.pick<`${DomainLabel}`>([
  "classification",
  "abundances",
  "nuclear",
  "thermal",
  "reactivity",
  "safety",
  "atomic",
  "electrical",
  "magnetic",
  "physical",
]);

export const getPropertyWithMeasurable = R.applySpec<{
  isMeasurable: boolean;
  label: string;
}>({
  label: R.head,
  isMeasurable: R.last,
});

export const getBasicProperties = R.pipe<
  Element,
  Pick<Element, `${RootProperties}`>
>(
  R.pick<`${RootProperties}`>([
    "atomicWeight",
    "atomicNumber",
    "name",
    "symbol",
  ])
);

export const getSchemaBasicProperties = R.pipe<
  typeof MeasurableMap,
  Pick<typeof MeasurableMap, "atomicNumber" | "atomicWeight">,
  [string, number][],
  { label: string; isMeasurable: boolean }[]
>(getBasicPropertiesTypes, R.toPairs, R.map(getPropertyWithMeasurable));

export const getSchemaDomainProperties = R.pipe<
  typeof MeasurableMap,
  Pick<typeof MeasurableMap, DomainLabel>,
  [string, typeof MeasurableMap[DomainLabel]][],
  { label: string; properties: { isMeasurable: boolean; label: string }[] }[]
>(
  getDomainPropertiesTypes,
  R.toPairs,
  R.map(
    R.applySpec({
      label: R.head,
      properties: R.pipe(R.last, R.toPairs, R.map(getPropertyWithMeasurable)),
    })
  )
);

export const convertElementPropertiesToMap = R.pipe<
  Element,
  [string, Property][],
  Record<string, Property>,
  [string, ChartProperty][],
  Record<string, ChartProperty>
>(
  R.toPairs,
  R.reduce(
    (acc, [key, value]) =>
      typeof value === "object" && value !== null
        ? { ...acc, ...value }
        : { ...acc, [`${key}`]: value },
    {}
  ),
  convertToChartData,
  R.fromPairs
);

export const convertElementPropertiesToList = R.pipe<
  ElementWithPropertiesMap,
  [string, ChartProperty][],
  [string, ChartProperty][]
>(R.toPairs, R.sortBy(R.head));
