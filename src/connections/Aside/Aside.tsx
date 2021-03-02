import { ElementType } from "api/element";
import { withProps } from "common/hoc";
import { Aside as AsideView } from "components/Aside";

export const Aside = withProps({
  type: ElementType.UNKNOWN,
  element: { symbol: "H", atomicNumber: "1" },
  fetching: false,
})(AsideView);
