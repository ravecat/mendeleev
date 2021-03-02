import { declareAction } from "@reatom/core";

import { Element } from "api/element";

export const getElementsFetching = declareAction();
export const getElementsSuccess = declareAction<Element[]>();
export const getElementsFailed = declareAction<string>();
