import styled from "styled-components";

import { CommonCell } from "components/Element";

import { TableProps } from "./Table";

export const MicroTable = ({
  periods,
}: Pick<TableProps, "periods">): JSX.Element => {
  return (
    <>
      {periods.map((period, index) => (
        <Set key={index}>
          {period.map(({ symbol, name, atomicNumber, atomicWeight, type }) => (
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
      ))}
    </>
  );
};

const Set = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;
