import { ElementType } from "api/element";

export const theme = {
  colors: {
    primaryTextColor: "#212121",
    secondaryTextColor: "#757575",
    textColor: "#FFFFFF",
    dividerColor: "#BDBDBD",
    icon: "#FFFFFF",
    primaryIcon: "#4d91fE",
  },
  textSize: {
    header: "20px",
    text: "14px",
    secondaryText: "12px",
    thirdText: "10px",
    subText: "8px",
  },
  table: {
    cellWidth: 76,
    cellHeight: 50,
    color: {
      [ElementType.ALKALI]: "#FEC590",
      [ElementType.ALKALINE]: "#FFDF92",
      [ElementType.TRANSITION]: "#ECFF91",
      [ElementType.POST_TRANSITION]: "#FEF991",
      [ElementType.METALLOIDS]: "#91FF9E",
      [ElementType.NONMETALS]: "#AB91FF",
      [ElementType.HALOGENS]: "#F992FF",
      [ElementType.NOBLE]: "#90DFFE",
      [ElementType.UNKNOWN]: "#4d91fE",
      [ElementType.LANTANOIDS]: "#D1FF92",
      [ElementType.ACTINOIDS]: "#B7FF91",
    },
  },
};
