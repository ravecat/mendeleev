import { axios } from "api/config";

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

export type Property = {
  unit:
    | { p: number | null; n: number | null; M: number | null }
    | string
    | number
    | null;
  value: string | null;
};

export interface RootProperties {
  _id: string;
  name: string;
  label: string;
  symbol: string;
  atomicNumber: number;
  atomicWeight: string;
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

export interface Element extends RootProperties {
  classifications: Omit<
    Record<Classification, Property>,
    "electronConfiguration"
  > & {
    electronConfiguration: {
      electrons: Record<string, number>;
      inert_gas: string;
    };
  };
  abundances: Record<Abundances, Property>;
  nuclear: Omit<Record<Nuclear, Property>, "isotopicAbundances"> & {
    isotopicAbundances: Record<string, Property>;
  };
  thermal: Record<Thermal, Property>;
  reactivity: Record<Reactivity, Property>;
  safety: Record<Safety, Property>;
  atomic: Record<Atomic, Property>;
  electrical: Record<Electrical, Property>;
  magnetic: Record<Magnetic, Property>;
  physical: Record<Physical, Property>;
}

export async function getElements(): Promise<Element[]> {
  const { data } = await axios.get<Element[]>("/elements");

  return data;
}
