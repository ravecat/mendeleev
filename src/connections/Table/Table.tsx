import { connect } from "app/store";
import {
  baseElementsAtom,
  elementsByGroupAtom,
  elementsByPeriodAtom,
  elementsSortedByAtomicNumberAtom,
  maxPeriodAtom,
  nonTransElementsAtom,
  transElementsAtom,
} from "app/store/element";
import { Table as TableView } from "components/Table";

export const Table = connect({
  periods: elementsByPeriodAtom,
  baseElements: baseElementsAtom,
  groups: elementsByGroupAtom,
  transElements: transElementsAtom,
  nonTransElements: nonTransElementsAtom,
  maxPeriod: maxPeriodAtom,
  elements: elementsSortedByAtomicNumberAtom,
})(TableView);
