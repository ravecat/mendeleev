import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  border: 1px dashed ${({ theme }) => theme.colors.dividerColor};
  
  &:before {
    content: "Data isn't available";
    color: ${({ theme }) => theme.colors.secondaryTextColor};
  }
`
