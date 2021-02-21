export enum DataView {
  List = "list",
  Chart = "chart",
}

export enum GroupParent {
  Scandium = "Scandium",
  Yttrium = "Yttrium",
  Hafnium = "Hafnium",
  Rutherfordium = "Rutherfordium",
  Subrutherfordium = "Subrutherfordium",
  Superactinides = "Superactinides",
  Lanthanides = "Lanthanides",
  Actinides = "Actinides",
}

export type GroupType = Map<
  GroupParent,
  { title: string; set: [number, number] }
>;

export const Groups: GroupType = new Map([
  [
    GroupParent.Scandium,
    { title: `${GroupParent.Scandium} group`, set: [21, 30] },
  ],
  [
    GroupParent.Yttrium,
    { title: `${GroupParent.Yttrium} group`, set: [39, 48] },
  ],
  [
    GroupParent.Hafnium,
    { title: `${GroupParent.Hafnium} group`, set: [72, 80] },
  ],
  [
    GroupParent.Rutherfordium,
    { title: `${GroupParent.Rutherfordium} group`, set: [104, 112] },
  ],
  [
    GroupParent.Subrutherfordium,
    { title: `${GroupParent.Subrutherfordium} group`, set: [121, 157] },
  ],
  [
    GroupParent.Lanthanides,
    { title: `${GroupParent.Superactinides} group`, set: [57, 71] },
  ],
  [
    GroupParent.Actinides,
    { title: `${GroupParent.Scandium} group`, set: [89, 103] },
  ],
]);
