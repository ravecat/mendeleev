import styled from "styled-components";

import { ElementWithPropertiesMap } from "api/element";

import { Cell as BaseCell } from "./Cell";
import { CommonCell, CommonCellProperty } from "./CommonCell";

type MegaCellProperty = CommonCellProperty &
  Pick<ElementWithPropertiesMap, "group" | "period">;

export const StandartElement = ({
  group,
  period,
  ...rest
}: MegaCellProperty): JSX.Element => {
  return (
    <Wrapper
      group={group?.ordinary as number}
      period={period?.ordinary as number}
    >
      <CommonCell {...rest} />
    </Wrapper>
  );
};

const Wrapper = styled(BaseCell)<{ period: number; group: number }>`
  position: absolute;
  top: ${({ theme: { table }, period }) =>
    (period - 1) * (table.cellHeight + 4)}px;
  left: ${({ theme: { table }, group }) =>
    (group - 1) * (table.cellWidth + 4)}px;
`;
