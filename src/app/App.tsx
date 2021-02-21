import { withRouterProvider } from "app/routing";
import { withStore } from "app/store";
import { withTheme } from "app/theme";
import { compose } from "common/hoc";
import { App as AppView } from "connections/App";

export const App = compose(
  withRouterProvider,
  withStore,
  withTheme
)(AppView) as () => JSX.Element;
