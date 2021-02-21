import { ActionCreator } from "@reatom/core";
import { useAction } from "@reatom/react";
import React, { useEffect } from "react";

export function withAlternate<OwnProps>(
  mapper: (props: OwnProps) => boolean,
  Alternate: React.ComponentType
) {
  return function (WrappedComponent: React.ComponentType<OwnProps>) {
    return function WithAlternate(ownProps: OwnProps): JSX.Element {
      const showAlternate = mapper(ownProps);

      return showAlternate ? <Alternate /> : <WrappedComponent {...ownProps} />;
    };
  };
}

export function withLoading<T>(action: ActionCreator) {
  return function (WrappedComponent: React.ComponentType<T>) {
    return function WithLoading(props: T): JSX.Element {
      const declaredAction = useAction(action);

      useEffect(() => {
        declaredAction();
      }, []);

      return <WrappedComponent {...props} />;
    };
  };
}
