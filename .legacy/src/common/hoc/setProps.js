import React from 'react';

export function setProps(mapExtPropsToProps) {
  return function Wrapper(WrappedComponent) {
    return function Wrappee(ownProps = {}) {
      const outerProps = mapExtPropsToProps(ownProps);

      return <WrappedComponent {...outerProps} {...ownProps} />;
    };
  };
}
