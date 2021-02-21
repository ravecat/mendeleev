import { Route } from "router5";

import { PropertyLabel } from "api/element";
import { DataView } from "common/constants";
import { Overwrite } from "common/utility";

import { RouteContext } from "./router";

export enum Routes {
  Home = "home",
  Elements = "elements",
  Element = "elements.element",
  Properties = "properties",
  Property = "properties.property",
  NotFound = "404",
}

type RoutesArg = Route<Record<string, any>>[];

export const routes: RoutesArg = [
  { name: Routes.Home, path: "/" },
  { name: Routes.Elements, path: "/elements" },
  { name: Routes.Element, path: "/:id" },
  { name: Routes.Properties, path: "/properties" },
  {
    name: Routes.Property,
    path: "/:id?view?domain",
    defaultParams: { view: "list" },
  },
  { name: Routes.NotFound, path: "/404" },
];

export type PropertyRouteContext = Overwrite<
  RouteContext,
  {
    route: RouteContext["route"] & {
      params: { id: `${PropertyLabel}`; view?: DataView };
    };
  }
>;
