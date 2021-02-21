import { declareAction } from "@reatom/core";

import { ElementWithPropertiesMap } from "api/element";

export const getElementsFetching = declareAction();
export const getElementsSuccess = declareAction<ElementWithPropertiesMap[]>();
export const getElementsFailed = declareAction<string>();
