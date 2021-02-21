import { connect } from "app/store";
import { elementsByPeriodAtom } from "app/store/element";
import { Elements as ElementsView } from "screen/Elements";

export const Elements = connect({
  periods: elementsByPeriodAtom,
})(ElementsView);
