import React from "react";

type SuspenseArgs<P> = {
  factory: () => Promise<{ default: React.ComponentType<P> }>;
  fallback?: React.SuspenseProps["fallback"];
};

export function withSuspense<P extends Record<string, unknown>>({
  factory,
  fallback = null,
}: SuspenseArgs<P>) {
  return function WithSuspense(
    props: ReturnType<typeof factory> extends Promise<{
      default: React.ComponentType<infer P>;
    }>
      ? P
      : never
  ): JSX.Element {
    const WrappedComponent = React.lazy(factory);

    return (
      <React.Suspense fallback={fallback}>
        {/* 
          // @ts-ignore supress PropsWithRef type checking */}
        <WrappedComponent {...props} />
      </React.Suspense>
    );
  };
}
