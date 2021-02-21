import { OrdinaryValue, Unit } from "api/element";

export interface OrdinaryValueProps {
  unit?: Unit;
  value?: OrdinaryValue;
}

export const Ordinary = ({ value, unit }: OrdinaryValueProps): JSX.Element => {
  return value ? (
    <span>
      <span>{value}</span>
      {unit && <span>{` ${unit}`}</span>}
    </span>
  ) : (
    <span>-</span>
  );
};
