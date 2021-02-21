import { withSuspense } from "common/hoc";

export const Detail = withSuspense({
  factory: () => import(/* webpackChunkName: "detail" */ "connections/Detail"),
});

export const Home = withSuspense({
  factory: () => import(/* webpackChunkName: "home" */ "screen/Home"),
});

export const Properties = withSuspense({
  factory: () =>
    import(/* webpackChunkName: "properties" */ "connections/Properties"),
});

export const PropertyList = withSuspense({
  factory: () =>
    import(/* webpackChunkName: "propertylist" */ "connections/PropertyList"),
});

export const Property = withSuspense({
  factory: () =>
    import(/* webpackChunkName: "property" */ "connections/Property"),
});

export const Aside = withSuspense({
  factory: () => import(/* webpackChunkName: "menu" */ "connections/Aside"),
});

export const Elements = withSuspense({
  factory: () =>
    import(/* webpackChunkName: "elements" */ "connections/Elements"),
});

export const NotFound = withSuspense({
  factory: () => import(/* webpackChunkName: "404" */ "screen/NotFound"),
});
