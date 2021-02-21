export const getUrlSearchParam = (search, param, defaultValue) =>
  new URLSearchParams(search).get(param) || defaultValue;
