import { declareAtom } from "@reatom/core";

import { Element } from "api/element";
import {
  getElementsFailed,
  getElementsFetching,
  getElementsSuccess,
} from "app/store/element";

interface ElementsState {
  elements: Element[];
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
    fetched: true,
    elements: payload,
    error: null,
  })),
  on(getElementsFailed, (state, payload) => ({
    ...state,
    error: payload,
  })),
]);
