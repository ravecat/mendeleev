import { ChartProperty, ValueType } from "api/element";

import { Exponential } from "./Exponential";
import { Ordinary } from "./Ordinary";

export interface ValueProps {
  property: ChartProperty;
}

export const Value = ({ property }: ValueProps): JSX.Element => {
  const type = property?.exponential?.M
    ? ValueType.exponential
    : ValueType.ordinary;

  return (
    <>
      {
        {
          ordinary: (
            <Ordinary unit={property?.unit} value={property?.ordinary} />
          ),
          exponential: (
            <Exponential unit={property?.unit} value={property?.exponential} />
          ),
        }[type]
      }
    </>
  );
};
