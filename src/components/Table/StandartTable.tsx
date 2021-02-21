import styled from "styled-components";
import { Text } from "styled-components-toolbox";

import { BaseElement, CommonCell } from "components/Element";

import { TableProps } from "./Table";

export const StandartTable = ({
  baseElements,
  maxPeriod,
  groups,
}: Pick<TableProps, "baseElements" | "groups" | "maxPeriod">): JSX.Element => {
  return (
    <>
      <BaseTable maxPeriod={maxPeriod}>
        {baseElements.map(
          ({
            symbol,
            name,
            atomicNumber,
            atomicWeight,
            type,
            group,
            period,
          }) => (
            <BaseElement
              atomicNumber={atomicNumber}
              atomicWeight={atomicWeight}
              group={group}
              key={atomicNumber?.ordinary}
              name={name}
              period={period}
              symbol={symbol}
              type={type}
            />
          )
        )}
      </BaseTable>
      {groups.map(({ title, set }) => (
        <Group key={title}>
          <Title label={title} />
          <Set>
            {set.map(({ symbol, name, atomicNumber, atomicWeight, type }) => (
              <CommonCell
                atomicNumber={atomicNumber}
                atomicWeight={atomicWeight}
                key={atomicNumber?.ordinary}
                name={name}
                symbol={symbol}
                type={type}
              />
            ))}
          </Set>
        </Group>
      ))}
    </>
  );
};

const BaseTable = styled.div<Pick<TableProps, "maxPeriod">>`
  position: relative;
  min-height: ${({ theme, maxPeriod }) =>
    maxPeriod * (theme.table.cellHeight + 4)}px;
  margin-bottom: 20px;
`;

const Group = styled.div`
  margin-bottom: 10px;
`;

const Set = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const Title = styled(Text)`
  padding-bottom: 6px;
  font-size: ${({ theme }) => theme.size.text};
`;
