import { declareAtom, map } from "@reatom/core";
import * as R from "ramda";

import {
  Block,
  ChartProperty,
  convertElementPropertiesToList,
  ElementWithPropertiesMap,
} from "api/element";
import {
  getElementsFailed,
  getElementsFetching,
  getElementsSuccess,
} from "app/store/element";

interface ElementsState {
  elements: ElementWithPropertiesMap[];
  initial: boolean;
  fetching: boolean;
  fetched: boolean;
  error: string | null;
}

const initialState: ElementsState = {
  elements: [],
  initial: true,
  fetching: false,
  fetched: false,
  error: null,
};

export const elementsAtom = declareAtom(initialState, (on) => [
  on(getElementsFetching, (state) => ({
    ...state,
    initial: false,
    fetching: true,
    fetched: false,
    error: null,
  })),
  on(getElementsSuccess, (state, payload) => ({
    ...state,
    initial: false,
    fetching: false,
    fetched: true,
    elements: payload,
    error: null,
  })),
  on(getElementsFailed, (state, payload) => ({
    ...state,
    error: payload,
  })),
]);

export const statusElementsAtom = map<
  Omit<ElementsState, "elements">,
  ElementsState
>(elementsAtom, ({ elements, ...rest }) => ({ ...rest }));

export const elementsSortedByAtomicNumberAtom = map<
  ElementWithPropertiesMap[],
  ElementsState
>(elementsAtom, ({ elements }) => elements);

export const elementsByPeriodAtom = map<
  ElementWithPropertiesMap[][],
  ElementWithPropertiesMap[]
>(
  elementsSortedByAtomicNumberAtom,
  R.groupWith(R.eqBy(R.path(["period", "ordinary"])))
);

export const test = map<
  [string, ChartProperty][][],
  ElementWithPropertiesMap[]
>(
  elementsSortedByAtomicNumberAtom,
  R.map<ElementWithPropertiesMap, [string, ChartProperty][]>(
    R.pipe<
      ElementWithPropertiesMap,
      [string, ChartProperty][],
      [string, ChartProperty][]
    >(R.toPairs, R.sortBy(R.head))
  )
);

export const elementsSortedListPropertiesAtom = map<
  [string, ChartProperty][][],
  ElementWithPropertiesMap[]
>(
  elementsSortedByAtomicNumberAtom,
  R.map<ElementWithPropertiesMap, [string, ChartProperty][]>(
    convertElementPropertiesToList
  )
);

export const maxAtomicNumberAtom = map<number, ElementWithPropertiesMap[]>(
  elementsSortedByAtomicNumberAtom,
  R.pipe<ElementWithPropertiesMap[], ElementWithPropertiesMap, number>(
    R.last,
    R.pathOr(0, ["atomicNumber", "ordinary"])
  )
);

export const maxPeriodAtom = map<number, ElementWithPropertiesMap[]>(
  elementsSortedByAtomicNumberAtom,
  R.pipe<ElementWithPropertiesMap[], ElementWithPropertiesMap, number>(
    R.last,
    R.pathOr(0, ["period", "ordinary"])
  )
);

export const isTransElement = R.pipe<ElementWithPropertiesMap, string, boolean>(
  R.pathOr("", ["block", "ordinary"]),
  R.anyPass<string>([R.equals<string>(Block.f), R.equals<string>(Block.g)])
);

export const isBaseElement = R.pipe<ElementWithPropertiesMap, string, boolean>(
  R.pathOr("", ["block", "ordinary"]),
  R.anyPass<string>([R.equals<string>(Block.s), R.equals<string>(Block.p)])
);

export const baseElementsAtom = map<
  ElementWithPropertiesMap[],
  ElementWithPropertiesMap[]
>(elementsSortedByAtomicNumberAtom, R.filter(isBaseElement));

export const transElementsAtom = map<
  { set: ElementWithPropertiesMap[]; title: string }[],
  ElementWithPropertiesMap[]
>(
  elementsSortedByAtomicNumberAtom,
  R.pipe<
    ElementWithPropertiesMap[],
    ElementWithPropertiesMap[],
    ElementWithPropertiesMap[][],
    { set: ElementWithPropertiesMap[]; title: string }[]
  >(
    R.filter(isTransElement),
    R.groupWith(R.eqBy(R.path(["period", "ordinary"]))),
    R.map((elementSet) => ({
      set: elementSet,
      title: `${elementSet[0].name?.ordinary as string} subgroup`,
    }))
  )
);

export const nonTransElementsAtom = map<
  ElementWithPropertiesMap[],
  ElementWithPropertiesMap[]
>(elementsSortedByAtomicNumberAtom, R.reject(isTransElement));

export const elementsByGroupAtom = map<
  { set: ElementWithPropertiesMap[]; title: string }[],
  ElementWithPropertiesMap[]
>(
  elementsSortedByAtomicNumberAtom,
  R.pipe<
    ElementWithPropertiesMap[],
    ElementWithPropertiesMap[],
    ElementWithPropertiesMap[][],
    ElementWithPropertiesMap[][][],
    ElementWithPropertiesMap[][],
    { set: ElementWithPropertiesMap[]; title: string }[]
  >(
    R.reject(isBaseElement),
    R.groupWith(R.eqBy(R.path(["period", "ordinary"]))),
    R.map(R.groupWith(R.eqBy(R.path(["block", "ordinary"])))),
    R.unnest,
    R.map((elementSet) => ({
      set: elementSet,
      title: `${elementSet[0].name?.ordinary as string} subgroup`,
    }))
  )
);
