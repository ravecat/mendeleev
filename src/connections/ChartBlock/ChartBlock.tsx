import { withRouteContext } from "app/routing";
import {
  ChartBlock as ChartBlockView,
  ChartBlockProps,
} from "components/ChartBlock";

export const ChartBlock = withRouteContext<ChartBlockProps>(ChartBlockView);
