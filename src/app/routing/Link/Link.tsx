import type { FC } from "react";
import { BaseLink as CommonLink, useRoute } from "react-router5";

export const Link: FC<{
  routeName: string;
  className?: string;
  routeParams?: {
    [key: string]: unknown;
  };
}> = ({ children, className, routeName, routeParams }) => {
  const { router } = useRoute();

  return (
    <CommonLink
      className={className}
      routeName={routeName}
      routeParams={{ ...routeParams }}
      router={router}
    >
      {children}
    </CommonLink>
  );
};
