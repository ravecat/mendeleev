import { TYPE } from 'common/constants';

export default {
  colors: {
    primaryTextColor: '#212121',
    secondaryTextColor: '#757575',
    textColor: '#FFFFFF',
    dividerColor: '#BDBDBD'
  },
  textSize: {
    header: '16px',
    text: '14px',
    secondaryText: '12px',
    thirdText: '10px',
    subText: '8px'
  },
  table: {
    cellWidth: 76,
    cellHeight: 50,
    color: {
      [TYPE.ALKALI]: '#FEC590',
      [TYPE.ALKALINE]: '#FFDF92',
      [TYPE.TRANSITION]: '#ECFF91',
      [TYPE.POST_TRANSITION]: '#FEF991',
      [TYPE.METALLOIDS]: '#91FF9E',
      [TYPE.NONMETALS]: '#AB91FF',
      [TYPE.HALOGENS]: '#F992FF',
      [TYPE.NOBLE]: '#90DFFE',
      [TYPE.UNKNOWN]: '#C8C8C8',
      [TYPE.LANTANOIDS]: '#D1FF92',
      [TYPE.ACTINOIDS]: '#B7FF91'
    }
  }
};
