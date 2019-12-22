import { chain, is, identity, toPairs, fromPairs, map, pipe } from 'ramda';

export const flattenObj = obj => {
  const go = obj_ =>
    chain(([k, v]) => {
      if (is(Object, v)) {
        return map(identity, go(v));
      }
      return [[k, v]];
    }, toPairs(obj_));

  return fromPairs(go(obj));
};

export const expandObj = pipe(
  toPairs,
  chain(([k, v]) => {
    if (is(Object, v)) {
      return toPairs(v);
    }
    return [[k, v]];
  }),
  fromPairs
);
