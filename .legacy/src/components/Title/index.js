import styled from 'styled-components';
import { Media, Header } from 'styled-components-toolbox';

const Title = styled(Header)`
  padding-bottom: 10px;
  line-height: 1;
  font-size: ${({ theme }) => theme.textSize.header};
  ${Media.responsive`
    text-align: center;
  `}
`;

export default Title;
