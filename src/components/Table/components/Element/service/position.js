import { GROUPS } from 'common/constants';

const { ACTINIDES, LANTHANIDES } = GROUPS;

export const getElementLeftPosition = ({ element: { group, atomicNumber, type }, width }) => {
  const position = (group - 1) * (width - 1);

  switch (type) {
    // Use atomic number for set position instead group for lantanoids/actinoids (no group data)
    case 'lantanoids':
      return (atomicNumber - LANTHANIDES[0])*(width - 1) + 2*(width - 1);
    case 'actinoids':
      return (atomicNumber - ACTINIDES[0])*(width - 1) + 2*(width - 1);
    default:
      return position;
  }
};

export const getElementTopPosition = ({ element: { period, atomicNumber, type }, height }) => {
  const position = (height - 1)*(period - 1);

  switch (type) {
    case 'lantanoids':
      return (Number(period) + 1)*height + 15;
    case 'actinoids':
      return (Number(period) + 1)*height + 20;
    default:
      return position;
  }
};
