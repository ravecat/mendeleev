import {
  getSchemaBasicProperties,
  getSchemaDomainProperties,
  MeasurableMap,
} from "api/element";
import { RouteContext, withRouteContext } from "app/routing";
import { RESPONSIVE } from "common/config";
import { compose, withProps } from "common/hoc";
import {
  PropertyList as PropertiesView,
  PropertyListProps,
} from "screen/PropertyList";

export const PropertyList = compose<
  PropertyListProps,
  Omit<PropertyListProps, keyof RouteContext>,
  Omit<
    PropertyListProps,
    keyof RouteContext | "basics" | "domains" | "responsive"
  >
>(
  withRouteContext,
  withProps({
    basics: getSchemaBasicProperties(MeasurableMap),
    domains: getSchemaDomainProperties(MeasurableMap),
    responsive: RESPONSIVE,
  })
)(PropertiesView);
