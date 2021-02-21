import type { ComponentType } from "react";
import { RouterProvider, useRoute, withRoute } from "react-router5";
import createRouter from "router5";
import browserPlugin from "router5-plugin-browser";
import loggerPlugin from "router5-plugin-logger";

import { Routes, routes } from "./routes";

export const router = (function configureRouter() {
  const router = createRouter(routes, {
    defaultRoute: Routes.NotFound,
  });

  if (process.env.NODE_ENV !== "production") {
    router.usePlugin(loggerPlugin);
  }

  router.usePlugin(browserPlugin({}));

  return router;
})();

export function withRouterProvider<T>(WrappedComponent: ComponentType<T>) {
  return function WithRouterProvider(props: T): JSX.Element {
    return (
      <RouterProvider router={router}>
        <WrappedComponent {...props} />
      </RouterProvider>
    );
  };
}

export type RouteContext = ReturnType<typeof useRoute>;

export function withRouteContext<OwnProps extends RouteContext>(
  WrappedComponent: ComponentType<OwnProps>
) {
  return function WithRouteContext(
    props: Omit<OwnProps, keyof RouteContext>
  ): JSX.Element {
    const WithRouteContextComponent = withRoute(WrappedComponent);

    return <WithRouteContextComponent {...(props as OwnProps)} />;
  };
}
