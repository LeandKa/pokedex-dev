import styled, { keyframes } from 'styled-components';
import { CgPokemon } from 'react-icons/cg';

const LoadingAnimation = keyframes`  
from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Icon = styled(CgPokemon)`
  text-align: center;
  font-size: 6rem;
  animation: ${LoadingAnimation} 1s linear infinite;
`;

export const Span = styled.span`
  font-size: 1.5rem;
  margin-left: 0.5rem;
`;
