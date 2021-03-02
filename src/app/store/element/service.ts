import { declareAction } from "@reatom/core";

import { getElements } from "api/element";
import {
  getElementsFailed,
  getElementsFetching,
  getElementsSuccess,
} from "app/store/element";

export const fetchElements = declareAction(async (_, { dispatch }) => {
  try {
    dispatch(getElementsFetching());

    const elements = await getElements();

    dispatch(getElementsSuccess(elements));
  } catch (err) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    dispatch(getElementsFailed(`${err}`));
  }
});
