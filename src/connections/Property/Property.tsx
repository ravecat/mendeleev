import { RouteContext, withRouteContext } from "app/routing";
import { connect } from "app/store";
import { elementsSortedByAtomicNumberAtom } from "app/store/element";
import { compose } from "common/hoc";
import { Property as PropertyView, PropertyScreenProps } from "screen/Property";

export const Property = compose<
  PropertyScreenProps,
  Omit<PropertyScreenProps, "elements">,
  Omit<PropertyScreenProps, "elements" | keyof RouteContext>
>(
  connect({
    elements: elementsSortedByAtomicNumberAtom,
  }),
  withRouteContext
)(PropertyView);
