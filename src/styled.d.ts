import "styled-components";

import { theme } from "app/theme";

export type RedefinedTheme = typeof theme;

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends RedefinedTheme {}
}
