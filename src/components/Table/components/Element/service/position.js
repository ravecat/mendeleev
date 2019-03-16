const LANTHANUM = 57;
const LUTETIUM = 71;
const ACTINIUM = 89;
const LAWRENCIUM = 103;

export const getElementLeftPosition = ({ element: { group, atomicNumber, type }, width }) => {
  const position = (group - 1) * (width - 1);

  switch (type) {
    // Use atomic number for set position instead group for lantanoids/actinoids (no group data)
    case 'lantanoids':
      return LUTETIUM === atomicNumber ? position : (atomicNumber - LANTHANUM)*(width - 1) + 2*(width - 1);
    case 'actinoids':
      return LAWRENCIUM === atomicNumber ? position : (atomicNumber - ACTINIUM)*(width - 1) + 2*(width - 1);
    default:
      return position;
  }
};

export const getElementTopPosition = ({ element: { period, atomicNumber, type }, height }) => {
  const position = (height - 1)*(period - 1);

  switch (type) {
    case 'lantanoids':
      return LUTETIUM === atomicNumber ? position : (Number(period) + 1)*height + 15;
    case 'actinoids':
      return LAWRENCIUM === atomicNumber ? position :  (Number(period) + 1)*height + 20;
    default:
      return position;
  }
};
