export const TYPE = {
  ALKALI: 'alkali',
  ALKALINE: 'alkaline',
  TRANSITION: 'transition',
  POST_TRANSITION: 'post-transition',
  METALLOIDS: 'metalloids',
  NONMETALS: 'nonmetals',
  HALOGENS: 'halogens',
  NOBLE: 'noble',
  UNKNOWN: 'unknown',
  LANTANOIDS: 'lantanoids',
  ACTINOIDS: 'actinoids'
};

export const LIST_VIEW = 'list';
export const GRAPH_VIEW = 'chart';

export const BLOCK = {
  s: 's',
  p: 'p',
  d: 'd',
  f: 'f',
  g: 'g'
};

export const GROUPS = {
  SCANDIUM: {
    title: 'Scandium group',
    set: [21, 30]
  },
  YTTRIUM: {
    title: 'Yttrium group',
    set: [39, 48]
  },
  HAFNIUM: {
    title: 'Hafnium group',
    set: [72, 80]
  },
  RUTHERFORDIUM: {
    title: 'Rutherfordium group',
    set: [104, 112]
  },
  SUBRUTHERFORDIUM: {
    title: 'Subrutherfordium group',
    set: [158, 166]
  },
  SUPERACTINIDES: {
    title: 'Superactinides',
    set: [121, 157]
  },
  LANTHANIDES: {
    title: 'Lanthanides',
    set: [57, 71]
  },
  ACTINIDES: {
    title: 'Actinides',
    set: [89, 103]
  }
};

export const SCHEMA = {
  name: 'string',
  atomicNumber: 'number',
  atomicWeight: 'number',
  classification: {
    group: 'number',
    color: 'string',
    period: 'number',
    type: 'string',
    block: 'string',
    discovery: 'string',
    alternateNames: 'string',
    casNumber: 'string',
    cidNumber: 'string',
    electronConfiguration: 'string',
    gasPhase: 'string',
    gmelinNumber: 'string',
    namesOfAllotropes: 'string',
    nscNumber: 'string'
  },
  abundances: {
    inEarthsCrust: 'number',
    inHumans: 'number',
    inMeteorites: 'number',
    inOceans: 'number',
    inSun: 'number',
    inUniverse: 'number'
  },
  nuclear: {
    lifetime: 'number',
    decayMode: 'string',
    halfLife: 'number',
    knownIsotopes: 'string',
    neutronCrossSection: 'number',
    neutronMassAbsorption: 'number',
    stableIsotopes: 'string'
  },
  thermal: {
    phase: 'string',
    absoluteBoilingPoint: 'number',
    absoluteMeltingPoint: 'number',
    adiabaticIndex: 'string',
    boilingPoint: 'number',
    criticalPressure: 'number',
    criticalTemperature: 'number',
    heatOfCombustion: 'number',
    heatOfFusion: 'number',
    heatOfVaporization: 'number',
    meltingPoint: 'number',
    neelPoint: 'number',
    specificHeat: 'number',
    thermalConductivity: 'number',
    thermalExpansion: 'number'
  },
  reactivity: {
    electronegativity: 'number',
    electronaffinity: 'number',
    valence: 'number',
    ionizationEnergies: 'number'
  },
  safety: {
    autoignitionPoint: 'string',
    dotHazardClass: 'string',
    dotNumbers: 'string',
    euNumber: 'string',
    nfpaFireRating: 'string',
    nfpaHazards: 'string',
    nfpaHealthRating: 'string',
    nfpaReactivityRating: 'string',
    rtecsNumber: 'string'
  },
  atomic: {
    atomicRadius: 'number',
    covalentRadius: 'number',
    crystalStructure: 'string',
    latticeAngles: 'string',
    latticeConstants: 'string',
    spaceGroupName: 'string',
    spaceGroupNumber: 'string',
    vanDerWaalsRadius: 'number'
  },
  electrical: {
    resistivity: 'number',
    electricalConductivity: 'number',
    electricalType: 'string',
    superconductingPoint: 'number'
  },
  magnetic: {
    curiePoint: 'number',
    magneticType: 'string',
    massMagneticSusceptibility: 'number',
    molarMagneticSusceptibility: 'number',
    volumeMagneticSusceptibility: 'number'
  },
  physical: {
    density: 'number',
    brinellHardness: 'number',
    bulkModulus: 'number',
    mohsHardness: 'number',
    molarVolume: 'number',
    poissonRatio: 'number',
    refractiveIndex: 'number',
    shearModulus: 'number',
    speedOfSound: 'number',
    vickersHardness: 'number',
    youngModulus: 'number'
  }
};
