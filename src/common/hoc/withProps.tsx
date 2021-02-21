import React from "react";

export function withProps<U extends Record<string, unknown>>(injectedProps: U) {
  return function <T extends U>(Component: React.ComponentType<T>) {
    return function WithPropsWrapper(ownProps: Omit<T, keyof U>): JSX.Element {
      const props = { ...ownProps, ...injectedProps } as T;

      return <Component {...props} />;
    };
  };
}
