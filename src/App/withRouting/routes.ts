export enum ROUTES {
  HOME = "home",
  ELEMENTS = "elements",
  ELEMENT = "elements.element",
  PROPERTIES = "properties",
  PROPERTY = "properties.property",
}

export const routes: { name: `${ROUTES}`; path: string }[] = [
  { name: "home", path: "/" },
  { name: "elements", path: "/elements" },
  { name: "elements.element", path: "/:id" },
  { name: "properties", path: "/properties" },
  { name: "properties.property", path: "/:id" },
];
