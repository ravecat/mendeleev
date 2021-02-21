import styled, { keyframes } from "styled-components";

import { Block, ElementType, ElementWithPropertiesMap } from "api/element";
import { borderShadow } from "app/theme";
import { withAlternate } from "common/hoc";
import { Title } from "components/Title";

export type AtomProps = {
  element: ElementWithPropertiesMap;
};

const orbitalMap: Record<Block, number> = {
  s: 1,
  p: 2,
  d: 3,
  f: 4,
  g: 5,
};

const nobleGas = {
  He: "1s² 2s²",
  Ne: "1s² 2s² 2p⁶",
  Ar: "1s² 2s² 2p⁶ 3s² 3p⁶",
  Kr: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶",
  Xe: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶",
  Rn: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4d¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶",
};

const integerToUnicode = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"];

const orbitalType: Record<Block, ElementType> = {
  s: ElementType.ALKALI,
  p: ElementType.TRANSITION,
  d: ElementType.METALLOIDS,
  f: ElementType.LANTANOIDS,
  g: ElementType.POST_TRANSITION,
};

type OrbitalType = `${Block}`;
type OrbitalSchema = [number, OrbitalType, number];
type OrbitalSchemaMap = {
  key: string;
  electronsUnicode: string;
  orbital: number;
  type: OrbitalType;
  electrons: number;
  angle: number;
  order: number;
  dimension: number;
  top: number;
  left: number;
  translate: number;
};

const orbitalRegex = /^([0-9])([s,p,d,f,g])$/;

const AtomView = ({
  element: { electronConfiguration },
}: AtomProps): JSX.Element => {
  const gas = electronConfiguration?.meta?.inert_gas as keyof typeof nobleGas;
  const electrons = electronConfiguration?.meta?.electrons as Record<
    string,
    number
  >;

  const orbitalScheme: OrbitalSchema[] = Object.entries(electrons).map(
    ([label, count]) => {
      const [_, shell, type] = orbitalRegex.exec(label) as RegExpExecArray;

      return [Number(shell), type, count] as OrbitalSchema;
    }
  );

  const orbitals = orbitalScheme.sort(
    ([shellA, orbitalA], [shellB, orbitalB]) => {
      const weightA = +`${shellA}${orbitalMap[orbitalA]}`;
      const weightB = +`${shellB}${orbitalMap[orbitalB]}`;

      return weightA - weightB;
    }
  );

  const ATOM_SIZE = 400;

  const orbitalsMap = orbitals.reduce<OrbitalSchemaMap[]>(
    (acc, [orbital, type, electrons], index) => [
      ...acc,
      {
        key: `${type}${orbital}`,
        orbital,
        type,
        electrons,
        electronsUnicode: String(electrons)
          .split("")
          .map((index) => integerToUnicode[Number(index)])
          .join(""),
        angle: 360 / electrons,
        order: orbitals.length - index,
        dimension: (ATOM_SIZE * (index + 1)) / orbitals.length,
        top:
          0.5 * ATOM_SIZE - (ATOM_SIZE * 0.5 * (index + 1)) / orbitals.length,
        left:
          0.5 * ATOM_SIZE - (ATOM_SIZE * 0.5 * (index + 1)) / orbitals.length,
        translate: (ATOM_SIZE * 0.5 * (index + 1)) / orbitals.length,
      },
    ],
    []
  );

  return (
    <Wrapper>
      <Title label="Electron configuration" />
      <AtomWrapper>
        <Core>{gas}</Core>
        {orbitalsMap.map((orbital) => (
          <Orbital key={orbital.key} orbital={orbital}>
            {Array.from({ length: orbital.electrons }).map((_, electron) => (
              <Electron electron={electron} key={electron} orbital={orbital} />
            ))}
          </Orbital>
        ))}
        <InertGas>
          <i>{nobleGas[gas]}</i>
        </InertGas>
        {orbitalsMap.map(({ key, orbital, electronsUnicode, type }) => (
          <Info id={key} key={key}>
            <i>
              <i>{orbital}</i>
              <i>{type}</i>
              <i>{electronsUnicode}</i>
            </i>
          </Info>
        ))}
      </AtomWrapper>
    </Wrapper>
  );
};

export const Atom = withAlternate<AtomProps>(
  ({ element: { electronConfiguration: schema } }) =>
    !schema?.meta?.electrons ||
    !schema?.meta?.inert_gas ||
    !Object.keys(schema?.meta?.electrons).every((orbital) =>
      orbitalRegex.test(orbital)
    ),
  () => null
)(AtomView);

const Wrapper = styled.div`
  padding: 0 20px;
  width: 100%;
`;

const AtomWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 400px;
`;

const InertGas = styled.span`
  top: 420px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;

  &:before {
    ${borderShadow};
    opacity: 0;
  }
`;

const Info = styled.span`
  top: 420px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;

  &:before {
    ${borderShadow};
    opacity: 0;
  }
`;

const Core = styled.div`
  position: absolute;
  top: 185px;
  left: 185px;
  z-index: 5;
  border-radius: 50%;
  background: ${({ theme: { table } }) => table.color.noble};
  border: 1px solid ${({ theme }) => theme.divider};
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;

  &:before {
    ${borderShadow};
    border-radius: 50%;
    opacity: 0;
  }

  &:hover {
    background: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.neutral};

    & ~ ${InertGas} {
      &:before {
        opacity: 1;
      }
    }

    &:before {
      opacity: 1;
    }
  }
`;

const rotate = keyframes`
  100% {
    transform: rotate(1turn);
  }
`;

const Orbital = styled.ul<{
  orbital: OrbitalSchemaMap;
}>`
  width: ${({ orbital }) => orbital.dimension}px;
  height: ${({ orbital }) => orbital.dimension}px;
  border: 1px solid ${({ theme }) => theme.divider};
  position: absolute;
  border-radius: 50%;
  padding: 0;
  z-index: ${({ orbital }) => orbital.order};
  top: ${({ orbital }) => orbital.top}px;
  left: ${({ orbital }) => orbital.left}px;
  animation: ${rotate} 12s linear infinite;

  &:nth-child(odd) {
    animation: ${rotate} 12s linear infinite reverse;
  }

  &:before {
    ${borderShadow};
    border-radius: 50%;
    opacity: 0;
  }

  &:hover {
    animation: none;

    &:before {
      opacity: 1;
    }

    & ~ #${({ orbital }) => orbital.key} {
      &:before {
        opacity: 1;
      }
    }

    li {
      background: ${({ theme: { accent } }) => accent};
    }
  }
`;

const Electron = styled.li<{
  electron: number;
  orbital: OrbitalSchemaMap;
}>`
  width: 15px;
  height: 15px;
  background: ${({ orbital: { type }, theme: { table } }) =>
    type ? table.color[orbitalType[type]] : table.color.unknown};
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.divider};
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  margin: auto;
  transform: ${({ orbital, electron }) =>
    `rotate(${orbital.angle * electron}deg) translate(${orbital.translate}px)`};
`;
