import React from "react";

export function withProps<InjectedProps extends Record<string, unknown>>(
  injectedProps: InjectedProps
) {
  return function <OwnProps extends InjectedProps>(
    Component: React.ComponentType<OwnProps>
  ) {
    return function WithInjectedProps(
      ownProps: Omit<OwnProps, keyof InjectedProps>
    ): JSX.Element {
      const props = { ...ownProps, ...injectedProps } as OwnProps;

      return <Component {...props} />;
    };
  };
}
