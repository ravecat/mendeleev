const LANTHANUM_GROUP = [57,71];
const ACTINIUM_GROUP = [89,103];

export const getElementLeftPosition = ({ element: { group, atomicNumber, type }, width }) => {
  const position = (group - 1) * (width - 1);

  switch (type) {
    // Use atomic number for set position instead group for lantanoids/actinoids (no group data)
    case 'lantanoids':
      return LANTHANUM_GROUP[1] === atomicNumber ? position : (atomicNumber - LANTHANUM_GROUP[0])*(width - 1) + 2*(width - 1);
    case 'actinoids':
      return ACTINIUM_GROUP[1] === atomicNumber ? position : (atomicNumber - ACTINIUM_GROUP[0])*(width - 1) + 2*(width - 1);
    default:
      return position;
  }
};

export const getElementTopPosition = ({ element: { period, atomicNumber, type }, height }) => {
  const position = (height - 1)*(period - 1);

  switch (type) {
    case 'lantanoids':
      return LANTHANUM_GROUP[1] === atomicNumber ? position : (Number(period) + 1)*height + 15;
    case 'actinoids':
      return ACTINIUM_GROUP[1] === atomicNumber ? position :  (Number(period) + 1)*height + 20;
    default:
      return position;
  }
};
