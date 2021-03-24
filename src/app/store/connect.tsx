import { Atom, combine } from "@reatom/core";
import { useAtom } from "@reatom/react";
import React from "react";

export function connect<AtomState extends Record<string, Atom<unknown>>>(
  mapAtomsToProps: AtomState
) {
  /**
   * TODO Current implementation return equal name every connect
   * and rewrite content in redux-devtools
   */
  const connectedAtomsState = combine(mapAtomsToProps);

  return function <
    OwnProps extends {
      [K in keyof AtomState]: AtomState[K] extends Atom<infer P> ? P : never;
    }
  >(WrappedComponent: React.ComponentType<OwnProps>) {
    return function WithAtomsState(
      ownProps: Omit<OwnProps, keyof AtomState>
    ): JSX.Element {
      const stateProps = useAtom(connectedAtomsState);
      const props = { ...ownProps, ...stateProps } as OwnProps;

      return <WrappedComponent {...props} />;
    };
  };
}
