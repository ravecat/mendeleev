import { RouteContext, withRouteContext } from "app/routing";
import { RESPONSIVE } from "common/config";
import { compose, withProps } from "common/hoc";
import {
  Properties as PropertiesView,
  PropertiesProps,
} from "screen/Properties";

export const Properties = compose<
  PropertiesProps,
  Omit<PropertiesProps, "responsive">,
  Omit<PropertiesProps, "responsive" | keyof RouteContext>
>(
  withProps({
    responsive: RESPONSIVE,
  }),
  withRouteContext
)(PropertiesView);
