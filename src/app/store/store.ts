import { createStore } from "@reatom/core";
import { connectReduxDevtools } from "@reatom/debug";

import { elementsAtom } from "./element";

const isProduction = process.env.NODE_ENV === "production";

export const store = createStore(elementsAtom);

!isProduction && connectReduxDevtools(store);
