import type { ComponentType } from "react";
import { RouterProvider } from "react-router5";

import { router } from "./router";

export function withRouter<T>(WrappedComponent: ComponentType<T>) {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  const ComponentWithRouter = (props: T) => {
    return (
      <RouterProvider router={router}>
        <WrappedComponent {...props} />
      </RouterProvider>
    );
  };

  ComponentWithRouter.displayName = `withRouter(${displayName})`;

  return ComponentWithRouter;
}
