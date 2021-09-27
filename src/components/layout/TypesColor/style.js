import styled from 'styled-components';

export const Span = styled.span`
  color: white;
  padding: 0.2rem;
  border: 2px solid black;
  text-transform: capitalize;
  border-radius: 10px;
  margin-left: 0.7rem;
  background: ${props => props.background};
`;
