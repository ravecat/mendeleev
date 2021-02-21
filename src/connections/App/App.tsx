import { fetchElements } from "app/store/element";
import { withLoading } from "common/hoc";
import { App as AppView } from "components/App";

export const App = withLoading(fetchElements)(AppView);
