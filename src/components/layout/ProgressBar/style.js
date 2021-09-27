import styled from 'styled-components';

export const Container = styled.div`
  height: 20px;
  width: 100%;
  background: white;
  border-radius: 10px;
  box-shadow: inset 0 0 2px #000;
`;

export const Content = styled.div`
  height: 100%;
  background: ${props => props.color};
  border-radius: 8px;
  max-width: 100%;
  width: ${props => props.percentage}%;
  transition: all 0.3s ease-out;
  h1 {
    font-weight: 300;
    font-size: 1.2rem;
    text-align: center;
  }
`;
