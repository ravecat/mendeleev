import styled from "styled-components";
import { Text } from "styled-components-toolbox";

export const Title = styled(Text)`
  padding-bottom: 10px;
  font-size: ${({ theme }) => theme.size.header};
`;
