import { Atom, combine } from "@reatom/core";
import { useAtom } from "@reatom/react";
import React from "react";

export function connect<AtomState extends Record<string, Atom<unknown>>>(
  mapAtomsToProps: AtomState
) {
  return function <
    OwnProps extends {
      [K in keyof AtomState]: AtomState[K] extends Atom<infer P> ? P : never;
    }
  >(WrappedComponent: React.ComponentType<OwnProps>) {
    return function WithAtomsState(
      ownProps: Omit<OwnProps, keyof AtomState>
    ): JSX.Element {
      const connectedAtomsState = useAtom(combine(mapAtomsToProps));
      const props = { ...ownProps, ...connectedAtomsState } as OwnProps;

      return <WrappedComponent {...props} />;
    };
  };
}
