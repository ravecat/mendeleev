import { ExponentialValue, Unit } from "api/element";

interface ExponentialProps {
  unit?: Unit;
  value?: ExponentialValue;
}

export const Exponential = ({ value, unit }: ExponentialProps): JSX.Element => {
  return value ? (
    <span>
      {value.M}
      <span>∙</span>
      {value.n}
      <sup>{value.p}</sup>
      {unit && <span>{` ${unit}`}</span>}
    </span>
  ) : (
    <span>-</span>
  );
};
