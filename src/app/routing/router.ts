import createRouter from "router5";

import { routes } from "./routes";

export const router = (function configureRouter() {
  const router = createRouter(routes);

  return router;
})();
