import { RouteContext, withRouteContext } from "app/routing";
import { connect } from "app/store";
import {
  elementsSortedByAtomicNumberAtom,
  elementsSortedListPropertiesAtom,
} from "app/store/element";
import { compose } from "common/hoc";
import { Detail as DetailView, DetailProps } from "screen/Detail";

export const Detail = compose<
  DetailProps,
  Omit<DetailProps, "elements" | "elementsMap">,
  Omit<DetailProps, "elements" | "elementsMap" | keyof RouteContext>
>(
  connect({
    elements: elementsSortedListPropertiesAtom,
    elementsMap: elementsSortedByAtomicNumberAtom,
  }),
  withRouteContext
)(DetailView);
