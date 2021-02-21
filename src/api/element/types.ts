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

export enum Block {
  s = "s",
  p = "p",
  d = "d",
  f = "f",
  g = "g",
}

const test = Block["s"];

export const MeasurableMap = {
  name: 0,
  atomicNumber: 1,
  atomicWeight: 1,
  classification: {
    group: 1,
    color: 0,
    period: 1,
    type: 0,
    block: 0,
    discovery: 0,
    alternateNames: 0,
    casNumber: 0,
    cidNumber: 0,
    electronConfiguration: 0,
    gasPhase: 0,
    gmelinNumber: 0,
    namesOfAllotropes: 0,
    nscNumber: 0,
  },
  abundances: {
    inEarthsCrust: 1,
    inHumans: 1,
    inMeteorites: 1,
    inOceans: 1,
    inSun: 1,
    inUniverse: 1,
  },
  nuclear: {
    lifetime: 1,
    decayMode: 0,
    halfLife: 1,
    knownIsotopes: 0,
    neutronCrossSection: 1,
    neutronMassAbsorption: 1,
    stableIsotopes: 0,
  },
  thermal: {
    phase: 0,
    absoluteBoilingPoint: 1,
    absoluteMeltingPoint: 1,
    adiabaticIndex: 0,
    boilingPoint: 1,
    criticalPressure: 1,
    criticalTemperature: 1,
    heatOfCombustion: 1,
    heatOfFusion: 1,
    heatOfVaporization: 1,
    meltingPoint: 1,
    neelPoint: 1,
    specificHeat: 1,
    thermalConductivity: 1,
    thermalExpansion: 1,
  },
  reactivity: {
    electronegativity: 1,
    electronaffinity: 1,
    valence: 1,
    ionizationEnergies: 1,
  },
  safety: {
    autoignitionPoint: 0,
    dotHazardClass: 0,
    dotNumbers: 0,
    euNumber: 0,
    nfpaFireRating: 0,
    nfpaHazards: 0,
    nfpaHealthRating: 0,
    nfpaReactivityRating: 0,
    rtecsNumber: 0,
  },
  atomic: {
    atomicRadius: 1,
    covalentRadius: 1,
    crystalStructure: 0,
    latticeAngles: 0,
    latticeConstants: 0,
    spaceGroupName: 0,
    spaceGroupNumber: 0,
    vanDerWaalsRadius: 1,
  },
  electrical: {
    resistivity: 1,
    electricalConductivity: 1,
    electricalType: 0,
    superconductingPoint: 1,
  },
  magnetic: {
    curiePoint: 1,
    magneticType: 0,
    massMagneticSusceptibility: 1,
    molarMagneticSusceptibility: 1,
    volumeMagneticSusceptibility: 1,
  },
  physical: {
    density: 1,
    brinellHardness: 1,
    bulkModulus: 1,
    mohsHardness: 1,
    molarVolume: 1,
    poissonRatio: 1,
    refractiveIndex: 1,
    shearModulus: 1,
    speedOfSound: 1,
    vickersHardness: 1,
    youngModulus: 1,
  },
} as const;

export type ElectronConfigurationProperty = {
  electrons: Record<string, number>;
  inert_gas: string;
};

export type IsotopicAbundancesProperty = Record<
  number,
  { value: number; unit: string }
>;

export type TypeProperty = {
  value: `${ElementType}`;
  unit: null;
};

export enum ValueType {
  ordinary = "ordinary",
  exponential = "exponential",
}

export type OrdinaryValue = string | number | null;
export type ExponentialValue = {
  p: number | null;
  n: number | null;
  M: number | null;
} | null;
export type Unit = string | null;

export type Property =
  | {
      value: ExponentialValue | string | number | null;
      unit: Unit;
    }
  | string
  | number
  | null;

export type MetaProperty = {
  inert_gas: string;
  electrons: Record<string, number>;
};

export type ChartProperty = {
  meta?: MetaProperty;
  ordinary: OrdinaryValue;
  exponential: ExponentialValue;
  unit: Unit;
} | null;

export enum RootProperties {
  _id = "_id",
  name = "name",
  label = "label",
  symbol = "symbol",
  atomicNumber = "atomicNumber",
  atomicWeight = "atomicWeight",
}

export enum Classification {
  group = "group",
  color = "color",
  period = "period",
  type = "type",
  block = "block",
  discovery = "discovery",
  alternateNames = "alternateNames",
  casNumber = "casNumber",
  cidNumber = "cidNumber",
  electronConfiguration = "electronConfiguration",
  gasPhase = "gasPhase",
  gmelinNumber = "gmelinNumber",
  namesOfAllotropes = "namesOfAllotropes",
  nscNumber = "nscNumber",
}

export enum Abundances {
  inEarthsCrust = "inEarthsCrust",
  inHumans = "inHumans",
  inMeteorites = "inMeteorites",
  inOceans = "inOceans",
  inSun = "inSun",
  inUniverse = "inUniverse",
}

export enum Nuclear {
  lifetime = "lifetime",
  decayMode = "decayMode",
  halfLife = "halfLife",
  isotopicAbundances = "isotopicAbundances",
}

export enum Thermal {
  phase = "phase",
  absoluteBoilingPoint = "absoluteBoilingPoint",
  absoluteMeltingPoint = "absoluteMeltingPoint",
  adiabaticIndex = "adiabaticIndex",
  boilingPoint = "boilingPoint",
  criticalPressure = "criticalPressure",
  criticalTemperature = "criticalTemperature",
  heatOfCombustion = "heatOfCombustion",
  heatOfFusion = "heatOfFusion",
  heatOfVaporization = "heatOfVaporization",
  meltingPoint = "meltingPoint",
  neelPoint = "neelPoint",
  specificHeat = "specificHeat",
  thermalConductivity = "thermalConductivity",
  thermalExpansion = "thermalExpansion",
}

export enum Reactivity {
  electronegativity = "electronegativity",
  electronaffinity = "electronaffinity",
  valence = "valence",
  ionizationEnergies = "ionizationEnergies",
}

export enum Safety {
  autoignitionPoint = "autoignitionPoint",
  dotHazardClass = "dotHazardClass",
  dotNumbers = "dotNumbers",
  euNumber = "euNumber",
  nfpaFireRating = "nfpaFireRating",
  nfpaHazards = "nfpaHazards",
  nfpaHealthRating = "nfpaHealthRating",
  nfpaReactivityRating = "nfpaReactivityRating",
  rtecsNumber = "rtecsNumber",
}

export enum Atomic {
  atomicRadius = "atomicRadius",
  covalentRadius = "covalentRadius",
  crystalStructure = "crystalStructure",
  latticeAngles = "latticeAngles",
  latticeConstants = "latticeConstants",
  spaceGroupName = "spaceGroupName",
  spaceGroupNumber = "spaceGroupNumber",
  vanDerWaalsRadius = "vanDerWaalsRadius",
}

export enum Electrical {
  resistivity = "resistivity",
  electricalConductivity = "electricalConductivity",
  electricalType = "electricalType",
  superconductingPoint = "superconductingPoint",
}

export enum Magnetic {
  curiePoint = "curiePoint",
  magneticType = "magneticType",
  massMagneticSusceptibility = "massMagneticSusceptibility",
  molarMagneticSusceptibility = "molarMagneticSusceptibility",
  volumeMagneticSusceptibility = "volumeMagneticSusceptibility",
}

export enum Physical {
  density = "density",
  brinellHardness = "brinellHardness",
  bulkModulus = "bulkModulus",
  mohsHardness = "mohsHardness",
  molarVolume = "molarVolume",
  poissonRatio = "poissonRatio",
  refractiveIndex = "refractiveIndex",
  shearModulus = "shearModulus",
  speedOfSound = "speedOfSound",
  vickersHardness = "vickersHardness",
  youngModulus = "youngModulus",
}

export type PropertyLabel =
  | RootProperties
  | Classification
  | Abundances
  | Nuclear
  | Thermal
  | Reactivity
  | Atomic
  | Safety
  | Electrical
  | Magnetic
  | Physical;

export enum DomainLabel {
  classification = "classification",
  abundances = "abundances",
  nuclear = "nuclear",
  thermal = "thermal",
  reactivity = "reactivity",
  safety = "safety",
  atomic = "atomic",
  electrical = "electrical",
  magnetic = "magnetic",
  physical = "physical",
}

export interface Element {
  _id?: string;
  name: string;
  label: string;
  symbol: string;
  atomicNumber: number;
  atomicWeight: string;
  classification: Omit<
    Record<`${Classification}`, Property>,
    Classification.electronConfiguration | Classification.type
  > & {
    type: TypeProperty;
    electronConfiguration: ElectronConfigurationProperty;
  };
  abundances: Record<`${Abundances}`, Property>;
  nuclear: Omit<Record<`${Nuclear}`, Property>, Nuclear.isotopicAbundances> & {
    isotopicAbundances: IsotopicAbundancesProperty;
  };
  thermal: Record<`${Thermal}`, Property>;
  reactivity: Record<`${Reactivity}`, Property>;
  safety: Record<`${Safety}`, Property>;
  atomic: Record<`${Atomic}`, Property>;
  electrical: Record<`${Electrical}`, Property>;
  magnetic: Record<`${Magnetic}`, Property>;
  physical: Record<`${Physical}`, Property>;
}

export type ElementWithPropertiesMap = Record<string, ChartProperty>;
