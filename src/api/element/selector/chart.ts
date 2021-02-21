import * as R from "ramda";

import {
  ChartProperty,
  Classification,
  MetaProperty,
  Nuclear,
  Property,
  Unit,
} from "../types";

const specificProperties = [
  `${Classification.electronConfiguration}`,
  `${Nuclear.isotopicAbundances}`,
];

export const convertToChartData = R.pipe<
  Record<string, Property>,
  [string, Property][],
  [string, ChartProperty][]
>(
  R.toPairs,
  R.map(
    R.cond<[string, any], [string, ChartProperty]>([
      /**
       * Skip properties with null property
       */
      [
        ([label, property]) => R.isNil(property),
        ([label, property]) => [label, null],
      ],
      /**
       * Handle specific properties
       */
      [
        ([label, property]) => !!~specificProperties.indexOf(label),
        ([label, property]) => [
          label,
          {
            meta: property as MetaProperty,
            ordinary: null,
            exponential: null,
            unit: null,
          },
        ],
      ],
      /**
       * Skip properties with null property value
       */
      [
        ([label, property]) =>
          R.allPass([R.is(Object), R.pipe(R.prop("value"), R.isNil)])(property),
        ([label, property]) => [label, null],
      ],
      /**
       * Skip properties with null mantissa
       */
      [
        ([label, property]) =>
          R.allPass([
            R.pipe(R.prop("value"), R.is(Object)),
            R.pipe(R.path(["value", "M"]), R.isNil),
          ])(property),
        ([label, property]) => [label, null],
      ],
      /**
       * Handle number value
       */
      [
        ([label, property]) => !isNaN(property as number),
        ([label, property]) => [
          label,
          {
            ordinary: Number(property),
            exponential: null,
            unit: null,
          },
        ],
      ],
      /**
       * Handle string value
       */
      [
        ([label, property]) => R.is(String, property),
        ([label, property]) => [
          label,
          {
            ordinary: String(property),
            exponential: null,
            unit: null,
          },
        ],
      ],
      /**
       * Handle ordinary value
       */
      [
        R.pipe(
          R.last,
          R.prop<"value", Exclude<Property, null>>("value"),
          R.anyPass([R.is(String), R.is(Number)])
        ),
        ([label, property]: [
          string,
          {
            value: string | number;
            unit: Unit;
          }
        ]) => [
          label,
          {
            ordinary: property.value,
            exponential: null,
            unit: property.unit,
          },
        ],
      ],
      /**
       * Handle exponential value
       */
      [
        R.pipe(
          R.last,
          R.prop<"value", Exclude<Property, null>>("value"),
          R.is(Object)
        ),
        ([label, property]) => [
          label,
          R.applySpec<ChartProperty>({
            ordinary: ({
              value,
            }: {
              value: { p: number; n: number; M: number };
            }) => value.M * value.n ** value.p,
            exponential: R.applySpec({
              p: R.path(["value", "p"]),
              M: R.path(["value", "M"]),
              n: R.path(["value", "n"]),
            }),
            unit: R.prop("unit"),
          })(property),
        ],
      ],
    ])
  )
);
