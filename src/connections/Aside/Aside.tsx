import { ElementType } from "common/constants";
import { withProps } from "common/hoc";
import { Aside as AsideView } from "components/Aside";

export const Aside = withProps({
  type: ElementType.UNKNOWN,
  element: { symbol: "H", atomicNumber: "1" },
  fetching: false,
})(AsideView);
