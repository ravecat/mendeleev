export enum ElementType {
  ALKALI = "alkali",
  ALKALINE = "alkaline",
  TRANSITION = "transition",
  POST_TRANSITION = "post-transition",
  METALLOIDS = "metalloids",
  NONMETALS = "nonmetals",
  HALOGENS = "halogens",
  NOBLE = "noble",
  UNKNOWN = "unknown",
  LANTANOIDS = "lantanoids",
  ACTINOIDS = "actinoids",
}

export enum DataView {
  List = "List",
  Chart = "Chart",
}

export enum Block {
  s = "s",
  p = "p",
  d = "d",
  f = "f",
  g = "g",
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

export type ElementSchema = {
  name: string;
  atomicNumber: number;
  atomicWeight: number;
  classification: {
    group: number;
    color: string;
    period: number;
    type: string;
    block: string;
    discovery: string;
    alternateNames: string;
    casNumber: string;
    cidNumber: string;
    electronConfiguration: string;
    gasPhase: string;
    gmelinNumber: string;
    namesOfAllotropes: string;
    nscNumber: string;
  };
  abundances: {
    inEarthsCrust: number;
    inHumans: number;
    inMeteorites: number;
    inOceans: number;
    inSun: number;
    inUniverse: number;
  };
  nuclear: {
    lifetime: number;
    decayMode: string;
    halfLife: number;
    knownIsotopes: string;
    neutronCrossSection: number;
    neutronMassAbsorption: number;
    stableIsotopes: string;
  };
  thermal: {
    phase: string;
    absoluteBoilingPoint: number;
    absoluteMeltingPoint: number;
    adiabaticIndex: string;
    boilingPoint: number;
    criticalPressure: number;
    criticalTemperature: number;
    heatOfCombustion: number;
    heatOfFusion: number;
    heatOfVaporization: number;
    meltingPoint: number;
    neelPoint: number;
    specificHeat: number;
    thermalConductivity: number;
    thermalExpansion: number;
  };
  reactivity: {
    electronegativity: number;
    electronaffinity: number;
    valence: number;
    ionizationEnergies: number;
  };
  safety: {
    autoignitionPoint: string;
    dotHazardClass: string;
    dotNumbers: string;
    euNumber: string;
    nfpaFireRating: string;
    nfpaHazards: string;
    nfpaHealthRating: string;
    nfpaReactivityRating: string;
    rtecsNumber: string;
  };
  atomic: {
    atomicRadius: number;
    covalentRadius: number;
    crystalStructure: string;
    latticeAngles: string;
    latticeConstants: string;
    spaceGroupName: string;
    spaceGroupNumber: string;
    vanDerWaalsRadius: number;
  };
  electrical: {
    resistivity: number;
    electricalConductivity: number;
    electricalType: string;
    superconductingPoint: number;
  };
  magnetic: {
    curiePoint: number;
    magneticType: string;
    massMagneticSusceptibility: number;
    molarMagneticSusceptibility: number;
    volumeMagneticSusceptibility: number;
  };
  physical: {
    density: number;
    brinellHardness: number;
    bulkModulus: number;
    mohsHardness: number;
    molarVolume: number;
    poissonRatio: number;
    refractiveIndex: number;
    shearModulus: number;
    speedOfSound: number;
    vickersHardness: number;
    youngModulus: number;
  };
};
