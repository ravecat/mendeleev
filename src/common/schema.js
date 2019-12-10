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
