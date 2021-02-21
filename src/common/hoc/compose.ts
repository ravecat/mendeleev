/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Workaround for composing HOC with React-component
 */
import React from "react";

type HOC<TI, TO> = (
  Component: React.ComponentType<TI>
) => React.ComponentType<TO>;

export function compose<P, TI1>(
  hoc1: HOC<P, TI1>
): (Component: React.ComponentType<P>) => React.ComponentType<TI1>;

export function compose<P, TI1, TI2>(
  hoc1: HOC<P, TI1>,
  hoc2: HOC<Partial<P> & TI1, TI2>
): (Component: React.ComponentType<P>) => React.ComponentType<TI2>;

export function compose<P, TI1, TI2, TI3>(
  hoc1: HOC<P, TI1>,
  hoc2: HOC<Partial<P> & TI1, TI2>,
  hoc3: HOC<Partial<P & TI1> & TI2, TI3>
): (Component: React.ComponentType<P>) => React.ComponentType<TI3>;

export function compose<P, TI1, TI2, TI3, TI4>(
  hoc1: HOC<P, TI1>,
  hoc2: HOC<Partial<P> & TI1, TI2>,
  hoc3: HOC<Partial<P & TI1> & TI2, TI3>,
  hoc4: HOC<Partial<P & TI1 & TI2> & TI3, TI4>
): (Component: React.ComponentType<P>) => React.ComponentType<TI4>;

export function compose(...hocs: HOC<any, any>[]) {
  return function (
    Component: React.ComponentType<any>
  ): React.ComponentType<any> {
    return hocs.reduceRight((g, f) => f(g), Component);
  };
}

export class ComposeF<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }

  map<G>(f: (x: T) => G): ComposeF<G> {
    return new ComposeF(f(this.value));
  }
}
