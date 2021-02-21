import styled, { keyframes } from "styled-components";

export const Loader = (): JSX.Element => {
  return (
    <Wrapper>
      <Icon />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const pulse = keyframes`
  0% {
		transform: scale(0.9);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.5);
	}
	
	70% {
		transform: scale(1);
		box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
	}
	
	100% {
		transform: scale(0.9);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
	}
`;

const Icon = styled.div`
  border-radius: 50%;
  background: ${({ theme }) => theme.divider};
  box-shadow: 0 0 0 0 ${({ theme }) => theme.divider};
  background-clip: content-box;
  border: 3px solid ${({ theme }) => theme.divider};
  padding: 8px;
  height: 40px;
  width: 40px;
  animation: ${pulse} 1.2s infinite;
`;
