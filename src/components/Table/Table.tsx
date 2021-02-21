import Responsive from "react-responsive";

import { ElementWithPropertiesMap } from "api/element";
import { RESPONSIVE } from "common/config";

import { MegaTable } from "./MegaTable";
import { MicroTable } from "./MicroTable";
import { StandartTable } from "./StandartTable";

export interface TableProps {
  maxPeriod: number;
  baseElements: ElementWithPropertiesMap[];
  groups: { set: ElementWithPropertiesMap[]; title: string }[];
  periods: ElementWithPropertiesMap[][];
  transElements: { set: ElementWithPropertiesMap[]; title: string }[];
  nonTransElements: ElementWithPropertiesMap[];
}

export const Table = ({
  maxPeriod,
  baseElements,
  groups,
  periods,
  transElements,
  nonTransElements,
}: TableProps): JSX.Element => {
  const [MICRO, STANDART] = RESPONSIVE;

  return (
    <>
      <Responsive minWidth={STANDART + 1}>
        <MegaTable
          maxPeriod={maxPeriod}
          nonTransElements={nonTransElements}
          transElements={transElements}
        />
      </Responsive>
      <Responsive maxWidth={STANDART} minWidth={MICRO + 1}>
        <StandartTable
          baseElements={baseElements}
          groups={groups}
          maxPeriod={maxPeriod}
        />
      </Responsive>
      <Responsive maxWidth={MICRO}>
        <MicroTable periods={periods} />
      </Responsive>
    </>
  );
};

export { MegaTable, MicroTable, StandartTable };
