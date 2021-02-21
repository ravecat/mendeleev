import { declareAction } from "@reatom/core";

import { getElements, sortElements } from "api/element";
import {
  getElementsFailed,
  getElementsFetching,
  getElementsSuccess,
} from "app/store/element";

export const fetchElements = declareAction(async (_, { dispatch }) => {
  try {
    dispatch(getElementsFetching());

    const elements = await getElements();
    const preparedElements = sortElements(elements);

    dispatch(getElementsSuccess(preparedElements));
  } catch (err) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    dispatch(getElementsFailed(`${err}`));
  }
});
