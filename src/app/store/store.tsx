import { Atom, createStore } from "@reatom/core";
import { connectReduxDevtools } from "@reatom/debug";
import { context } from "@reatom/react";
import type { ComponentType } from "react";

import { elementsAtom } from "./element";

const isProduction = process.env.NODE_ENV === "production";

export const store = createStore(elementsAtom);

export const unsubscribe = !isProduction && connectReduxDevtools(store);

export function withStore<T>(WrappedComponent: ComponentType<T>) {
  return function withStoreWrapper(props: T): JSX.Element {
    return (
      <context.Provider value={store}>
        <WrappedComponent {...props} />
      </context.Provider>
    );
  };
}

export type AtomReturnedType<T> = T extends Atom<infer P> ? P : never;
