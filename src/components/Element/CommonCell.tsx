import styled from "styled-components";
import { Text } from "styled-components-toolbox";

import { ElementType, ElementWithPropertiesMap } from "api/element";
import { Link, Routes } from "app/routing";

import { Cell as BaseCell } from "./Cell";

export type CommonCellProperty = Pick<
  ElementWithPropertiesMap,
  "symbol" | "atomicNumber" | "atomicWeight" | "name" | "type"
>;

export const CommonCell = ({
  symbol,
  name,
  atomicNumber,
  atomicWeight,
  type,
}: CommonCellProperty): JSX.Element => {
  return (
    <Link
      routeName={Routes.Element}
      routeParams={{ id: atomicNumber?.ordinary as number }}
    >
      <Cell>
        <Wrapper type={(type?.ordinary || ElementType.UNKNOWN) as ElementType}>
          <SymbolWrapper>
            <Text bold label={symbol?.ordinary as string} />
            <AtomicNumber bold label={`${atomicNumber?.ordinary as number}`} />
          </SymbolWrapper>
          <Name label={name?.ordinary as string} />
          <Weight label={atomicWeight?.ordinary as string} />
        </Wrapper>
      </Cell>
    </Link>
  );
};

const Cell = styled(BaseCell)`
  margin-right: 4px;
  margin-bottom: 4px;
`;

const Wrapper = styled.div<{ type: `${ElementType}` }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3px 5px;
  width: ${({ theme }) => theme?.table?.cellWidth}px;
  height: ${({ theme }) => theme?.table?.cellHeight}px;
  text-decoration: none;
  background-color: ${({ type, theme: { table } }) =>
    type ? table.color[type] : table.color.unknown};
`;

const SymbolWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AtomicNumber = styled(Text)`
  font-size: ${({ theme }) => theme.size.secondaryText};
`;

const Name = styled(Text)`
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.1;
  font-size: ${({ theme }) => theme.size.secondaryText};
`;

const Weight = styled(Text)`
  font-size: ${({ theme }) => theme.size.thirdText};
`;
